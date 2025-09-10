const { main } = require('../src/index');

describe('main function', () => {
    test('should perform the primary task correctly', () => {
        expect(main()).toBe("Hello from GitHub Actions!");
    });
});