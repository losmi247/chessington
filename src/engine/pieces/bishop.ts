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
        let availableMoves = Square.getDiagonalSquares(currentSquare);
        return availableMoves.filter((s: Square) => s.col >= 0 && s.col <= 7 && s.row >= 0 && s.row <= 7);
    }
}
