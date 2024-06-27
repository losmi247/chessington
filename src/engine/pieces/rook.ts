import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);
        let availableRowMoves = board.getReachableRowSquares(currentSquare);
        let availableColMoves = board.getReachableColSquares(currentSquare);

        return availableRowMoves.concat(availableColMoves);
    }
}
