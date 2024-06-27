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

        let dummyBishop = new Bishop(this.player);
        board.setPiece(currentSquare, dummyBishop);
        let bishopMoves = dummyBishop.getAvailableMoves(board);

        let dummyRook = new Rook(this.player);
        board.setPiece(currentSquare, dummyRook);
        let rookMoves = dummyRook.getAvailableMoves(board);

        return bishopMoves.concat(rookMoves);
    }
}
