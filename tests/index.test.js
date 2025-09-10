const { main } = require('src/index');   // <--- destructure the function

test('should perform the primary task correctly', () => {
    expect(main()).toBe("Hello from GitHub Actions!");
});
