
const { sum, subtract, fetchData } = require('./index')


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

test('true or false', () => {
    const n = null;
    expect(n).toBeFalsy()
})

test('2 + 2', () => {
    const data = 2 + 2
    expect(data).toBeGreaterThan(3)
})

test('string', () => {
    const string = " hello i am a good boy"
    expect(string).toMatch('i')
})


test("arrays", () => {
    const arrS = ["abc", "vcb", "xyz", "omg"]
    expect(arrS).not.toContain('milk')
})

test('err', () => {
    const err = () => {
        throw new Error('u created new err')
    }
    expect(() => err()).toThrow()
})
fetchData


test('fetch data user', async () => {
    const data = await fetchData(1)
    expect(data.id).toBe(1)
})


test('handle data', async () => {
    const arr = [1, 2, 3, 4]
    arr.push(5)
    console.log(arr[arr.length - 1])
    expect(arr[arr.length - 1]).toBe(5)
})