export default class Square {
    public row: number;
    public col: number;

    public constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    public static at(row: number, col: number) {
        return new Square(row, col);
    }

    public static getDiagonalSquares(square: Square) {
        let diagonalSquares = new Array(0);
        for (let i = 1; i < 8; i++) {
            diagonalSquares.push(new Square(square.row - i, square.col - i));
            diagonalSquares.push(new Square(square.row + i, square.col - i));
            diagonalSquares.push(new Square(square.row - i, square.col + i));
            diagonalSquares.push(new Square(square.row + i, square.col + i));
        }
        return diagonalSquares;
    }

    public static getRowAndColumnSquares(square: Square) {
        let rowAndColumnSquares = new Array(0);
        for (let i = 0; i < 8; i++) {
            if (i !== square.col) {
                rowAndColumnSquares.push(new Square(square.row, i));
            }
            if (i !== square.row) {
                rowAndColumnSquares.push(new Square(i, square.col));
            }
        }
        return rowAndColumnSquares;
    }

    public equals(otherSquare: Square) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    public toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
