export const RandomNumber = (length = 4): number => {
  const minValue = Math.pow(10, length - 1);
  const maxValue = Math.pow(10, length) - 1;
  return Math.floor(minValue + Math.random() * (maxValue - minValue + 1));
};


export const ExpireTime = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 2);
  const time = date.toISOString().slice(0, 19).replace('T', ' ');
  return time;
};

export const CurrentTimeMatch = (oldTime: string): boolean => {
  const currentDateTime = new Date();
  const oldDateTime = new Date(oldTime);
  const match = currentDateTime.getTime() >= oldDateTime.getTime();

  return match;
};
