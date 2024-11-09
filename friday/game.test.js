import {Game, GAME_STATUSES} from "./game.js";

describe('game', () => {
    it('game should started', () => {
        const game = new Game();
        expect(game.status).toBe(GAME_STATUSES.PENDING);
        game.start();
        expect(game.status).toBe(GAME_STATUSES.IN_PROGRESS)
    })
    it('settings should be set', () => {
        const game = new Game();

        // default settings
        expect(game.settings.gridSize).toEqual({
            columnsCount: 4,
            rowsCount: 4,
        })
        game.settings = {
            gridSize: {
                columnsCount: 4,
                rowsCount: 4,
            }
        }

        // didnt`e change because of deep copy
        game.settings.gridSize.columnsCount = -100


        expect(game.settings.gridSize).toEqual({
            columnsCount: 4,
            rowsCount: 4,
        })
    })
    it('google should be on the grid after start', () => {
        const game = new Game();

        game.settings={
            gridSize: {
                columnsCount: 3,
                rowsCount: 2,
            }
        }
        game.start();

        expect(game.googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(game.googlePosition.x).toBeLessThan(3)

        expect(game.googlePosition.y).toBeGreaterThanOrEqual(0)
        expect(game.googlePosition.x).toBeLessThan(2)
    })
})