import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = new Array(0);

        for(let horizontalDirection of [-1,0,1]){
            for(let verticalDirection of [-1,0,1]){
                if(horizontalDirection != 0 || verticalDirection != 0) {
                    availableMoves.push(
                        new Square(
                            currentSquare.row + verticalDirection,
                            currentSquare.col + horizontalDirection
                        )
                    );
                }
            }
        }

        return availableMoves.filter((square: Square) => square.isValid());
    }
}
