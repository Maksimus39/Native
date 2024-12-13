import {GameStatuses} from "./game-statuses";


export class Game {
    #status = GameStatuses.SETTINGS
    #googlePosition = null
    #numberUtility;// = new ShogunNumberUtility()


    constructor(somethingSimilarToNumberUtility) {
        this.#numberUtility = somethingSimilarToNumberUtility
    }


    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4
        },
        googleJumpInterval: 1000
    }

    set googleJumpInterval(newValue) {
        if (typeof newValue !== "number") {
            throw new Error('Arguments must be a number.');
        }
        if (newValue <= 0) {
            throw new Error('Arguments must be a number.');
        }
        this.#settings.googleJumpInterval = newValue;
    }

    start() {
        if (this.#status !== GameStatuses.SETTINGS) {
            throw new Error("Game must be in Settings before Start");
        }
        this.#status = GameStatuses.IN_PROGRESS
        this.#googleJump()

        setTimeout(() => {
            this.#googleJump()
        }, this.#settings.googleJumpInterval)
    }

    #googleJump() {
        const newPosition = {
            x: this.#numberUtility.getRandomNumber(0, this.#settings.gridSize.columnsCount),
            y: this.#numberUtility.getRandomNumber(0, this.#settings.gridSize.rowsCount),
        }
        if (newPosition.x === this.googlePosition?.x && newPosition.y === this.googlePosition?.y) {
            this.#googleJump()
            return;
        }
        this.#googlePosition = newPosition
    }

    get status() {
        return this.#status;
    }

    get googlePosition() {
        return this.#googlePosition;
    }

    get gridSize() {
        return this.#settings.gridSize
    }
}

