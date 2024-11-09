export class Game {

    #status = GAME_STATUSES.PENDING
    #googlePosition = null
    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4,
        }
    }

    // post/mutation/action/setter
    start() {
        this.#status = GAME_STATUSES.IN_PROGRESS
        this.#googlePosition = {x: 0, y: 0}
    }

    // selector/getter
    get status() {
        return this.#status
    }

    get settings() {
        return {
            ...this.#settings,
            gridSize: {
                ...this.#settings.gridSize,
            }
        }
    }

    set settings(settings) {

        if (settings.gridSize.columnsCount * settings.gridSize.rowsCount < 4) {
            throw new Error('401:Cells count should be 4 or more')
        }
        return this.#settings = settings;
    }

    get googlePosition() {
        return this.#googlePosition
    }
}

export const GAME_STATUSES = {
    PENDING: 'pending',
    IN_PROGRESS: 'inProgress',
    COMPLETED: 'completed'
}