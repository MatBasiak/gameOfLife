class GameOfLife {

    constructor(boardWidth, boardHeight) {
        this.width = boardWidth;
        this.heigh = boardHeight;
        this.board = document.getElementById('board');        
        this.cells = [];
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
        let index=(y - 1) * this.width + (x - 1);
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
        this.setCellState(15, 3, 'live');
        this.setCellState(15, 4, 'live');
        this.setCellState(16, 4, 'live');
        this.setCellState(13, 3, 'live');
        this.setCellState(14, 3, 'live');
        this.setCellState(6, 12, 'live');
        this.setCellState(6, 13, 'live');
        this.setCellState(8, 13, 'live');
        this.setCellState(7, 14, 'live');
    }

    computeCellNextState(x, y) {

        let numbersOfLivingNeigbors = 0;
       
        if (x < 1) {
            x = 1
        }
        if (y < 1) {
            y = 1
        }
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
        const nextStateBorder = [];

        for (let i = 0; i < this.heigh; i++) {
            for (let j = 0; j < this.width; j++) {
                nextStateBorder.push(this.computeCellNextState(j, i))
            }
        }
        return nextStateBorder;

    }
    printNextGeneration() {
        

        let newState = this.computeNextGeneration();
        console.log(newState);
        newState.forEach((state, i) => {
            if (state===1) {
                this.cells[i].classList.add('live');
              
            } else if (state===0) {
                this.cells[i].classList.remove('live');
               
            }

        })


    }
    


    
    
}


 const start = ()=>{

    const width= document.getElementById('width').value;
    const height= document.getElementById('height').value;

     const game = new GameOfLife(width, height);
     game.containerSizeChange();
     game.createBoard();
     game.firstGlider()
     begin.style.display='none';

 }



const begin = document.getElementById('begin');
const play = document.getElementById('play');
const pause = document.getElementById('pause');

begin.addEventListener("click",start)

play.addEventListener('click', ()=>{
let int = setInterval(function () {
    game.computeNextGeneration();
    game.printNextGeneration()
}, 500)
    pause.addEventListener('click', () => { clearInterval(int) })
}

);









