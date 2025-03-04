Page({
    data: {
        score: 0,
        bestScore: 0,
        grid: [],
        gameOver: false,
        gameWon: false,
        gameMessage: ''
    },

    onLoad() {
        this.initGame();
    },

    initGame() {
        const grid = new Array(4).fill(null).map(() => new Array(4).fill(null));
        this.setData({
            grid: grid,
            score: 0,
            gameOver: false,
            gameWon: false,
            gameMessage: ''
        });
        this.addStartTiles();
    },

    addStartTiles() {
        for (let i = 0; i < 2; i++) {
            this.addRandomTile();
        }
    },

    addRandomTile() {
        const availableCells = this.getAvailableCells();
        if (availableCells.length > 0) {
            const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
            const value = Math.random() < 0.9 ? 2 : 4;
            this.setData({
                grid: this.updateGrid(randomCell, value)
            });
        }
    },

    getAvailableCells() {
        const availableCells = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (!this.data.grid[i][j]) {
                    availableCells.push({ x: i, y: j });
                }
            }
        }
        return availableCells;
    },

    updateGrid(cell, value) {
        const newGrid = JSON.parse(JSON.stringify(this.data.grid));
        newGrid[cell.x][cell.y] = { value: value, mergedFrom: null };
        return newGrid;
    },

    onRestart() {
        this.initGame();
    },

    onKeepPlaying() {
        this.setData({
            gameWon: false,
            gameMessage: ''
        });
    },

    handleMove(direction) {
        // Implement the game logic for moving tiles
        // This is a placeholder for the actual game logic
        console.log('Move direction:', direction);
    }
});