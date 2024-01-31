import axios from 'axios';
import config from '../config';

export const SEND_SMS = async (number: string, msg: string) => {
  const formattedNumber = String(number).startsWith('88')
    ? number
    : `88${number}`;

  const user = config.sms_user;
  const pass = config.sms_pass;
  const masking = 'BEATNIK';

  const url = `http://services.smsnet24.com/sendSms?user_id=${user}&user_password=${pass}&route_id=1&sms_type_id=1&sms_sender=${masking}&sms_receiver=${formattedNumber}&sms_text=${msg}&sms_category_name=Promotion`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};
