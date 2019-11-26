export const GRID_DEFAULT_HEIGHT = 15

export interface ICell {
    cellKey: number
    value: string
}

export interface IGrid {
    cellRows: ICell[][]
}


export interface IAppState {
    gridState: IGrid
    height: number
    width: number
}

export interface IOutput{
    snakes: string[],
    foods: string[]
}

/*export interface ICell {
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
}*/
