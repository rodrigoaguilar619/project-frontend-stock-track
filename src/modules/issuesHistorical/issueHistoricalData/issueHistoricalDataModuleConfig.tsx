import { MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { DataTableCustomPropsI } from "@app/utils/maskDataCustomUtil";
import { DataTablePropsI } from "lib-components-frontend-ts/lib/@types/components/dataTable/dataTable";
import { MaskDataTypeEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";

export const columnsIssueTransactionResumenList: DataTablePropsI[] = [
    {
        field: 'currentIssuePrice', header: 'Issue Current Price', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
            
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'currentIssueDate', header: 'Issue Current Price Date', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: "DD/MM/yyyy"
            }
        }
    },
    {
        field: 'currentDollarPrice', header: 'Dollar Current Price', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'currentDollarDate', header: 'Dollar Current Price Date', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: "DD/MM/yyyy"
            }
        }
    },
    {
        field: 'dollarPriceDeprecatePercentage', header: 'Dollar Deprecation', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'currentDollarPriceAfterDeprecate', header: 'Dollar Current Price After Deprecate', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'commisionSell', header: 'Commision Sell', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'taxesPercentage', header: 'Taxes %', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'issueSellEstimate', header: 'Issue Sell Estimate (MXN)', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2
            }
        }
    }
];

export const columnsIssueTransactionList: DataTableCustomPropsI[] = [
    {
        field: 'descriptionBroker', header: 'Broker', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'descriptionTypeCurrency', header: 'Currency', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'totalShares', header: 'T. Shares', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'priceBuy', header: 'Price Buy', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" },
            
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
        field: 'sumPriceBuy', header: 'Sum P. Buy', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" },
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
        field: 'buyDate', header: 'Buy Date', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: "DD/MM/yyyy"
            }
        }
    },
    {
        field: 'priceSell', header: 'Price Sell', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" },
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
        field: 'sumPriceSell', header: 'Sum P. Sell', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" },
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
        field: 'sellDate', header: 'Sell Date', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: "DD/MM/yyyy"
            }
        }
    },
    {
        field: 'sellGainLossPercentage', header: 'Gain/Loss %', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolPercent: true
            }
        }
    },
    {
        field: 'sellGainLossTotal', header: 'Gain/Loss Total', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "8%" }
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'gainLossPercentageEstimate', header: 'Estimated Gain/Loss %', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "8%" }
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolPercent: true
            }
        }
    },
    {
        field: 'gainLossTotalEstimate', header: 'Estimated Gain/Loss Total', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "8%" }
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                decimalPlaces: 2,
                addSeparateComma: true,
                addSymbolCurrency: true
            }
        }
    }
];