import { User } from '@prisma/client';
import { Secret } from 'jsonwebtoken';

import httpStatus from 'http-status';
import config from '../../../config';
import {
  isUserPasswordConvertBcrypt,
  isUserPasswordMatch,
} from '../../../helpers/bcryptHelper';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

//  create user
const createUser = async (userData: User): Promise<User> => {
  const isUserFound = await prisma.user.findUnique({
    where: {
      mobile: userData?.mobile,
    },
  });
  //  check is user
  if (!isUserFound) {
    const newPassword = await isUserPasswordConvertBcrypt(userData?.password);
    const res = await prisma.user.create({
      data: { ...userData, password: newPassword },
    });
    const { password, ...userWithoutPassword } = res;
    return {
      data: userWithoutPassword,
      success: true,
      status: httpStatus.OK,
      message: `Create user ${userWithoutPassword.full_name} successfully!`,
    };
  } else {
    return {
      data: null,
      success: true,
      status: httpStatus.NOT_FOUND,
      message: `User with mobile already exists.`,
    };
  }

  // end
};

// login user
const loginUser = async (props: User): Promise<User> => {
  const res = await prisma.user.findUnique({
    where: {
      mobile: props?.mobile,
    },
  });

  if (res) {
    const { mobile, role, password, ...responseData } = res;
    // check password
    const isMatchPassword = await isUserPasswordMatch(
      props?.password,
      password
    );
    // send
    if (isMatchPassword) {
      // access Token
      const accessToken = jwtHelpers.createToken(
        { mobile, role },
        config.jwt.secret as Secret,
        config.jwt.expires_in as string
      );
      // refresh Token
      const refreshToken = jwtHelpers.createToken(
        { mobile, role },
        config.jwt.refresh_secret as Secret,
        config.jwt.refresh_expires_in as string
      );

      return {
        data: {
          ...responseData,
          access_token: accessToken,
          refresh_token: refreshToken,
        },
        message: 'Login successfully',
        status: httpStatus.OK,
        success: true,
      };
    } else {
      return {
        data: null,
        message: 'Password is incorrect!',
        success: false,
        status: httpStatus.NOT_FOUND,
      };
    }
  } else {
    return {
      data: null,
      message: 'Number is incorrect!',
      success: false,
      status: httpStatus.NOT_FOUND,
    };
  }
};

// export
export const UserService = {
  createUser,
  loginUser,
};
