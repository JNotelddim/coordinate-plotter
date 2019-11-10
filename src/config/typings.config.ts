export const GRID_DEFAULT_HEIGHT = 15

export interface ICell {
    cellKey: number
    value: any
    onClick?: (event: React.MouseEvent<HTMLTableDataCellElement>) => void
}

export interface IRow {
    cells: ICell[]
    index: number
}

export interface IGrid {
    rows: IRow[]
}

export interface GridState {
    snakes: string[]
    foods: string[]
}

export interface AppState {
    gridState: GridState
    grid: IGrid
    rows: IRow[]
}
