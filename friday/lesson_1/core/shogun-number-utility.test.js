import {ShogunNumberUtility} from "./shogun-number-utility";


describe('ShogunNumberUtility', () => {
    let utility;

    beforeEach(() => {
        utility = new ShogunNumberUtility();
    });

    it('should generate a random integer within the specified range', () => {
        const fromInclusive = 1;
        const toExclusive = 10;

        const randomInt = utility.getRandomNumber(fromInclusive, toExclusive);

        expect(randomInt).toBeGreaterThanOrEqual(fromInclusive);
        expect(randomInt).toBeLessThan(toExclusive);
    });

    it('should generate different random integers on multiple calls', () => {
        const fromInclusive = 1;
        const toExclusive = 10;

        const randomInt1 = utility.getRandomNumber(fromInclusive, toExclusive);
        const randomInt2 = utility.getRandomNumber(fromInclusive, toExclusive);

        // Since the numbers are random, they might be the same, but we can check if they are not always the same
        expect(randomInt1).not.toBe(randomInt2);
    });

    it('should handle edge cases correctly', () => {
        const fromInclusive = 1;
        const toExclusive = 2;

        const randomInt = utility.getRandomNumber(fromInclusive, toExclusive);

        expect(randomInt).toBeGreaterThanOrEqual(fromInclusive);
        expect(randomInt).toBeLessThan(toExclusive);
    });

    it('should throw an error if fromInclusive is greater than or equal to toExclusive', () => {
        const fromInclusive = 10;
        const toExclusive = 1;

        expect(() => utility.getRandomNumber(fromInclusive, toExclusive)).toThrow('fromInclusive should be less than toExclusive');
    });
});
