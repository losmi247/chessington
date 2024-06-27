import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = new Array(0);

        for(let horizontalDirection of [-1,1]){
            for(let verticalDirection of [-1,1]){
                availableMoves.push(
                    new Square(currentSquare.row + horizontalDirection, currentSquare.col + verticalDirection * 2),
                    new Square(currentSquare.row + horizontalDirection * 2, currentSquare.col + verticalDirection),
                );
            }
        }

        return availableMoves.filter((s: Square) => s.col >= 0 && s.col <= 7 && s.row >= 0 && s.row <= 7);
    }
}
