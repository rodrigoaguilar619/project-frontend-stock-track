import { DataTablePropsI, MaskDataCurrencyPropsI, MaskDataPropsI } from "lib-components-frontend-ts/lib/@types/components/dataTable/dataTable"

export interface MaskDataDownUpPropsI extends MaskDataCurrencyPropsI {
    addSymbolDownUp?: boolean
}

export interface MaskDataTableCellFillBooleanPropsI {
    color?: string
}
export interface MaskDataCustomPropsI extends MaskDataPropsI {
    maskType: MaskDataTypeCustomEnum,
    maskDataCustomProps?: MaskDataDownUpPropsI | MaskDataTableCellFillBooleanPropsI
}

export interface DataTableCustomPropsI extends DataTablePropsI {
    maskProps?: MaskDataPropsI | MaskDataCustomPropsI,
}