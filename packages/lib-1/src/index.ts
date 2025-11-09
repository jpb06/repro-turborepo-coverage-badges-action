export const doStuff = (input: string) => {
  if (input === 'A') {
    return 'You selected A';
  }

  throw new Error('Invalid input');
};
