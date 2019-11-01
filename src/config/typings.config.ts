export const GRID_DEFAULT_HEIGHT = 15

export interface ICell {
    key: number
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
