import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = new Array(0);

        let playerDirection = this.player == Player.WHITE ? 1 : -1;
        if((playerDirection == 1 && currentSquare.row == 1) || (playerDirection == -1 && currentSquare.row == 6)) {
            availableMoves.push(new Square(currentSquare.row + 2*playerDirection, currentSquare.col));
        }
        availableMoves.push(new Square(currentSquare.row + playerDirection, currentSquare.col));

        return availableMoves.filter((square: Square) => board.isVerticalPathClear(currentSquare, square));
    }
}
