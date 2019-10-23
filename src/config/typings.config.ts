export const GRID_DEFAULT_HEIGHT = 15;

export interface ICell {
    key: number;
    value: any;
}

export interface IGrid {
    height: number;
    width?: number;
}
