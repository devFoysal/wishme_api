export const isRandomNumber = (length = 4): number => {
  const minValue = Math.pow(10, length - 1);
  const maxValue = Math.pow(10, length) - 1;
  return Math.floor(minValue + Math.random() * (maxValue - minValue + 1));
};

export const isExpireTime = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 2);
  const time = date.toISOString().slice(0, 19).replace('T', ' ');
  console.log('time', typeof time, 'time>>', time);

  return time;
};

export const isCurrentTimeMatch = (oldTime: string): boolean => {
  const date = new Date();
  const currentTime = date.toISOString().slice(0, 19).replace('T', ' ');

  // check
  const oldDateTime = new Date(oldTime);
  const currentDateTime = new Date(currentTime);
  return oldDateTime >= currentDateTime;
};
