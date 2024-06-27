import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = [
            new Square(currentSquare.row + 1, currentSquare.col),
            new Square(currentSquare.row - 1, currentSquare.col),
            new Square(currentSquare.row, currentSquare.col + 1),
            new Square(currentSquare.row, currentSquare.col - 1),
            new Square(currentSquare.row + 1, currentSquare.col + 1),
            new Square(currentSquare.row - 1, currentSquare.col - 1),
            new Square(currentSquare.row - 1, currentSquare.col + 1),
            new Square(currentSquare.row + 1, currentSquare.col - 1)
        ];

        // Remove out-of-bounds squares
        return availableMoves.filter((s: Square) => s.col >= 0 && s.col <= 7 && s.row >= 0 && s.row <= 7);
    }
}
