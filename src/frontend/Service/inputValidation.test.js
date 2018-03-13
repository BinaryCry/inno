import { recordValidation } from './inputValidation';

test('Function validator check', () => {
    expect(typeof recordValidation()).toBe('function');
    expect(recordValidation(5)('12345')).toEqual('12345');
    expect(recordValidation(5, false)('123456')).toEqual(false);
    expect(recordValidation(15, true)('<b>string</b>')).toEqual('string');
});