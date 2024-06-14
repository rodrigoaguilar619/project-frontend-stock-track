import { DataTableCustomPropsI } from "@app/_types/utils/maskDataCustomUtil";
import { MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const columnsTransactionIssuesList: DataTableCustomPropsI[] = [
    {
        field: 'issue', header: 'Issue', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "4%" },
        }
    },
    {
        field: 'totalTitles', header: 'Total titles', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "3%" },
        }
    },
    {
        field: 'descriptionTypeCurrency', header: 'Type currency', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "4%" },
        }
    },
    {
        field: 'priceBuy', header: 'Price buy', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "6%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'issueSellEstimate', header: 'Issue sell estimate', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "6%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'gainLossPercentage', header: 'Gain/loss estimate %', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolPercent: true,
                addSymbolDownUp: true
            }
        }
    },
    {
        field: 'gainLossTotal', header: 'Gain/loss estimate total', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolCurrency: true,
                addSymbolDownUp: true
            }
        }
    },
    {
        field: 'open', header: 'Price open', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "6%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'currentPrice', header: 'Price current', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'trackBuyPriceUsd', header: 'Price buy track (USD)', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'trackBuyPriceMxn', header: 'Price buy track (MXN)', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'date', header: 'Date transaction', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: "DD/MM/YYYY"
            }
        }
    },
    {
        field: 'lastSaleTimestamp', header: 'Date price updated', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: "DD/MM/YYYY HH:mm:ss"
            }
        }
    },
    {
        field: 'isUpPercentageFromBuyPrice', header: 'Is able to sell', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
            isSortable: true
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.FILL_TABLE_CELL_BOOLEAN,
            maskDataCustomProps: {
                color: "#F8FF67"
            }
        }
    },
    {
        field: 'isDownPercentageFromCurrentPrice', header: 'Down from open', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
            isSortable: true
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.FILL_TABLE_CELL_BOOLEAN,
            maskDataCustomProps: {
                color: "#FCA829"
            }
        }
    },
    {
        field: 'isNearPriceBuy', header: 'Is able to buy', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
            isSortable: true
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.FILL_TABLE_CELL_BOOLEAN,
            maskDataCustomProps: {
                color: "#45FE6C"
            }
        }
    }
];