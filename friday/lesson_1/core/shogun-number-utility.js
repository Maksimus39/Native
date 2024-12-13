export class ShogunNumberUtility {
    getRandomNumber(fromInclusive, toExclusive) {
        if (fromInclusive >= toExclusive) {
            throw new Error('fromInclusive should be less than toExclusive');
        }
        return Math.floor(Math.random() * (toExclusive - fromInclusive)) + fromInclusive;
    }
}

