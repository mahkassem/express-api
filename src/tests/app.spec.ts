let arrayStr: string[] = []

describe("1. Test Suite", () => {
    beforeAll(async () => {
        arrayStr = ["img.jpg", "img1.jpg"];
    })

    it("I. A single test that will succeed", () => {
        const result = true;
        expect(result).toBe(true);
    })

    it("II. A single test that will scceed", () => {
        expect(arrayStr[0]).toBe('img.jpg');
    })
})