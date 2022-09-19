export const getCookies = (len = 14): string => {
  let cookie = "";
  const symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
  for (let i = 0; i < len; i++) {
    cookie += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return cookie;
};
