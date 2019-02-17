class GameOfLife {

    constructor(boardWidth, boardHeight) {
        this.width = boardWidth;
        this.heigh = boardHeight;
        this.board = document.getElementById('board');
        this.cells = [];

        this.play = document.getElementById('play').addEventListener('click', this.play.bind(this));
        this.pause = document.getElementById('pause')
    }
    containerSizeChange() {
        this.board.style.width = `${this.width*10 +2}px`
        this.board.style.height = `${this.heigh*10 +2}px`
    }
    createBoard() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.heigh; j++) {
                let div = document.createElement('div');
                this.board.appendChild(div);
            }
        }
        this.cells = [...document.querySelectorAll('#board>div')]
        this.cells.forEach(cell => {
            cell.addEventListener('mousemove', (e) => e.target.classList.toggle("live"))
        })

    }
    calculateIndex(x, y) {
        let index = (y - 1) * this.width + (x - 1);
        return this.cells[index];
    }
    setCellState(x, y, state) {
        const cell = this.calculateIndex(x, y);
        if (state === 'live') {
            cell.classList.add('live');
        } else if (state === 'dead') {
            cell.classList.remove('live');
        }
    }
    firstGlider() {
        this.setCellState(5, 3, 'live');
        this.setCellState(5, 4, 'live');
        this.setCellState(6, 4, 'live');
        this.setCellState(3, 3, 'live');
        this.setCellState(4, 3, 'live');
        this.setCellState(6, 1, 'live');
        this.setCellState(6, 2, 'live');
        this.setCellState(8, 3, 'live');
        this.setCellState(7, 4, 'live');
    }

    computeCellNextState(x, y) {

        let numbersOfLivingNeigbors = 0;




        const neighbors = [
            this.calculateIndex(x - 1, y - 1),
            this.calculateIndex(x, y - 1),
            this.calculateIndex(x + 1, y - 1),
            this.calculateIndex(x - 1, y),
            this.calculateIndex(x + 1, y),
            this.calculateIndex(x - 1, y + 1),
            this.calculateIndex(x, y + 1),
            this.calculateIndex(x + 1, y + 1),
        ];



        neighbors.forEach(element => {
            if (!element) return

            if (element.classList.contains('live')) {
                numbersOfLivingNeigbors++;
            }
        })

        if ((this.calculateIndex(x, y).classList.contains('live') && numbersOfLivingNeigbors === 3) || numbersOfLivingNeigbors >= 2 && numbersOfLivingNeigbors <= 3) {
            return 1
        }
        return 0;




    }
    computeNextGeneration() {
        const nextStateBoard = [];

        for (let y = 1; y <= this.heigh; y++) {
            for (let x = 1; x <= this.width; x++) {

                nextStateBoard.push(this.computeCellNextState(y, x))

            }
        }
        return nextStateBoard;

    }
    printNextGeneration() {


        let newState = this.computeNextGeneration();

        newState.forEach((state, i) => {
            if (state === 1) {
                this.cells[i].classList.add('live');

            } else if (state === 0) {
                this.cells[i].classList.remove('live');

            }

        })


    }
    start() {
        this.containerSizeChange();
        this.createBoard();
        this.firstGlider()
        


    }
    play() {
        let int = setInterval(() => {
            this.computeNextGeneration();
            this.printNextGeneration();
        }, 1000)
        this.pause.addEventListener('click', () => {
            clearInterval(int)
        })
    }







}

const newGame = () => {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    const game = new GameOfLife(width, height);
    game.start();
   
    begin.style.display = 'none'
     play.style.display = 'inline'
     pause.style.display = "inline"
    
}

const begin = document.getElementById('begin');
begin.addEventListener('click', newGame);
 play.style.display = "none"
 pause.style.display="none"