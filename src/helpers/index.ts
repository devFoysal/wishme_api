export const RandomNumber = (length = 4): number => {
  console.log('length', length);
  return Math.floor(1000 + Math.random() * 9000);
};

export const ExpireTime = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 2);
    const time = date.toISOString().slice(0, 19).replace('T', ' ');
    return time;
  };

export const CurrentTimeMatch = (oldTime:string): boolean => {
  const currentDateTime = new Date();
  const oldDateTime = new Date(oldTime);
  const match = currentDateTime.getTime() >= oldDateTime.getTime();

  return match;
};
