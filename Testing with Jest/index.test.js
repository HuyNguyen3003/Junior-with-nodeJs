
const { sum, subtract } = require('./index')


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('tes obj', () => {
    const obj = {}
    expect(obj).toEqual({})
})