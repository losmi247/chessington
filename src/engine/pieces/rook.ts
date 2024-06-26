import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let square = board.findPiece(this);
        let moves = new Array(0);

        for (let i = 0; i < 8; i++) {
            //Horizontal
            if (i !== square.col) {
                moves.push(new Square(square.row, i));
            }
            //Vertical
            if (i !== square.row) {
                moves.push(new Square(i, square.col));
            }
        }

        return moves;
    }
}
