export const getEllipsesTxt = (str, num) => {
  return `${str.substr(0, num)}...${str.substr(str.length - num, str.length)}`;
};
