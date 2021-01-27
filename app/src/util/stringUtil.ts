
export const isEmailValid = (email: string): boolean => {
  // Regex copied from https://emailregex.com/
  const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return emailRegex.test(String(email).toLowerCase());
};

export const isPathValid = (input: string): boolean => {
  const pattern = new RegExp('^'
    + '(\\/[-a-z\\d%_.~+]*)*',
  'i');
  return pattern.test(input);
};

export const isUrlValid = (input: string): boolean => {
  const pattern = new RegExp('^'
    + '(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?' // port
    + '(\\/[-a-z\\d%_.~+]*)*' // path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$', // fragment locator
  'i');
  return pattern.test(input);
};
