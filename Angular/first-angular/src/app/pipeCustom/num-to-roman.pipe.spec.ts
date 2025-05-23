import { RomanPipe } from './num-to-roman.pipe';

describe('NumToRomanPipe', () => {
  it('create an instance', () => {
    const pipe = new RomanPipe();
    expect(pipe).toBeTruthy();
  });
});
