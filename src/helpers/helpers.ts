const cleanPathString = (path: string) => {
  return path
    .split('/')
    .filter((p) => !!p)
    .join('/');
};

export { cleanPathString };
