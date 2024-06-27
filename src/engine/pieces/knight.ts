import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import Offset from "../offset"

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);

        let offsets = new Array(0);
        for(let horizontalDirection of [-1,1]){
            for(let verticalDirection of [-1,1]){
                offsets.push(
                    new Offset(verticalDirection, horizontalDirection * 2),
                    new Offset(verticalDirection * 2, horizontalDirection),
                );
            }
        }

        let availableMoves = offsets.map((offset: Offset) =>
            new Square(
                currentSquare.row + offset.verticalOffset,
                currentSquare.col + offset.horizontalOffset
            ),
        );

        return availableMoves.filter((square: Square) => square.isValid());
    }
}
