import { describe, expect, it } from 'vitest';

import { doSomeOtherStuff } from './index';

describe('doSomeOtherStuff function', () => {
  it('should return a result', () => {
    const result = doSomeOtherStuff('B');

    expect(result).toBe('You selected B');
  });
});
