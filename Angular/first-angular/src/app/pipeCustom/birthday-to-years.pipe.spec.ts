import { BirthdayToYearsPipe } from './birthday-to-years.pipe';

describe('BirthdayToYearsPipe', () => {
  it('create an instance', () => {
    const pipe = new BirthdayToYearsPipe();
    expect(pipe).toBeTruthy();
  });
});
