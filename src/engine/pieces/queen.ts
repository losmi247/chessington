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

        let diagonalSquares = board.getDiagonalSquares(currentSquare);
        let rowAndColumnSquares = board.getRowAndColumnSquares(currentSquare);

        return diagonalSquares.concat(rowAndColumnSquares);
    }
}
