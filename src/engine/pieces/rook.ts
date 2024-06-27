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
        let availableMoves = new Array(0);

        for (let i = 0; i < 8; i++) {
            if (i !== currentSquare.col) {
                availableMoves.push(new Square(currentSquare.row, i));
            }
            if (i !== currentSquare.row) {
                availableMoves.push(new Square(i, currentSquare.col));
            }
        }

        return availableMoves;
    }
}
