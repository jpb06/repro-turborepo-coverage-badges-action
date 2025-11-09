import { describe, expect, it } from 'vitest';

import { doStuff } from './index';

describe('doStuff function', () => {
  it('should return a result', () => {
    const result = doStuff('A');

    expect(result).toBe('You selected A');
  });

  it('should throw an error', () => {
    expect(() => doStuff('')).toThrowError('Invalid input');
  });
});
