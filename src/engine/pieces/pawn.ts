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
        if(this.player == Player.WHITE){
            return new Array(new Square(square.row+1, square.col));
        }
        else{
            return new Array(new Square(square.row-1, square.col));
        }
    }
}
