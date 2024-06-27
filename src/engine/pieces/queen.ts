import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import Bishop from "./bishop";
import Rook from "./rook";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);

        let diagonalSquares = Square.getDiagonalSquares(currentSquare);
        let rowAndColumnSquares = Square.getRowAndColumnSquares(currentSquare);
        let availableMoves = diagonalSquares.concat(rowAndColumnSquares);

        return availableMoves.filter((s: Square) => s.col >= 0 && s.col <= 7 && s.row >= 0 && s.row <= 7);
    }
}
