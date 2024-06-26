import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let square = board.findPiece(this);
        let moves = new Array(0);
        if(this.player == Player.WHITE){
            if(square.row == 1){
                moves.push(new Square(square.row+2, square.col));
            }
            moves.push(new Square(square.row+1, square.col));
        }
        else{
            if(square.row == 6){
                moves.push(new Square(square.row-2, square.col));
            }
            moves.push(new Square(square.row-1, square.col));
        }

        return moves;
    }
}
