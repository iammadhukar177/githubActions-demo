const { main } = require('../index');

test('should perform the primary task correctly', () => {
    expect(main()).toBe("Hello from GitHub Actions!");
});
