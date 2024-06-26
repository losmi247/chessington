import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = new Array(0);

        for (let i = 1; i < 8; i++) {
            availableMoves.push(new Square(currentSquare.row - i, currentSquare.col - i));
            availableMoves.push(new Square(currentSquare.row + i, currentSquare.col - i));
            availableMoves.push(new Square(currentSquare.row - i, currentSquare.col + i));
            availableMoves.push(new Square(currentSquare.row + i, currentSquare.col + i));
        }

        // Remove out-of-bounds squares
        return availableMoves.filter((s: Square) => s.col >= 0 && s.col <= 7 && s.row >= 0 && s.row <= 7);
    }
}
