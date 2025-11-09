export const doSomeOtherStuff = (input: string) => {
  if (input === 'B') {
    return 'You selected B';
  }

  throw new Error('Invalid input');
};
