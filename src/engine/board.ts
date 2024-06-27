import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import Piece from './pieces/piece';

export default class Board {
    public currentPlayer: Player;
    private readonly board: (Piece | undefined)[][];

    public constructor(currentPlayer?: Player) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    public setPiece(square: Square, piece: Piece | undefined) {
        this.board[square.row][square.col] = piece;
    }

    public getPiece(square: Square) {
        return this.board[square.row][square.col];
    }

    public findPiece(pieceToFind: Piece) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    public movePiece(fromSquare: Square, toSquare: Square) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    public getDiagonalSquares(square: Square) {
        let diagonalSquares = new Array(0);
        for (let i = 1; i < this.board.length; i++) {
            diagonalSquares.push(new Square(square.row - i, square.col - i));
            diagonalSquares.push(new Square(square.row + i, square.col - i));
            diagonalSquares.push(new Square(square.row - i, square.col + i));
            diagonalSquares.push(new Square(square.row + i, square.col + i));
        }
        return diagonalSquares;
    }

    public getRowAndColumnSquares(square: Square) {
        let rowAndColumnSquares = new Array(0);
        for (let i = 0; i < this.board.length; i++) {
            if (i !== square.col) {
                rowAndColumnSquares.push(new Square(square.row, i));
            }
            if (i !== square.row) {
                rowAndColumnSquares.push(new Square(i, square.col));
            }
        }
        return rowAndColumnSquares;
    }

    private createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }
}
