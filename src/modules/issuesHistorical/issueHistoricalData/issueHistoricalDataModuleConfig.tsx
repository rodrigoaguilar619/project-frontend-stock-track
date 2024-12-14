import { DataTableCustomPropsI } from "@app/_types/utils/maskDataCustomUtil";
import { ConstantCatalogEnum, MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { DataTablePropsI } from "lib-components-react/lib/@types/components/dataTable/dataTable";
import { MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const columnsIssueTransactionResumenList: DataTablePropsI[] = [
    {
        field: 'currentIssuePrice', header: 'Issue Current Price', tableConfig: {
            styleCss: { width: "10%", textAlign: "center" },
            
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
            styleCss: { width: "7%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: ConstantCatalogEnum.DATE_FORMAT_TABLE
            }
        }
    },
    {
        field: 'currentDollarPrice', header: 'Dollar Current Price', tableConfig: {
            styleCss: { width: "10%", textAlign: "center" },
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
            styleCss: { width: "7%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: ConstantCatalogEnum.DATE_FORMAT_TABLE
            }
        }
    },
    {
        field: 'dollarPriceDeprecatePercentage', header: 'Dollar Deprecation', tableConfig: {
            styleCss: { width: "10%", textAlign: "center" },
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
            styleCss: { width: "10%", textAlign: "center" },
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
            styleCss: { width: "10%", textAlign: "center" },
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
            styleCss: { width: "10%", textAlign: "center" },
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
            styleCss: { width: "10%", textAlign: "center" },
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
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: 'descriptionTypeCurrency', header: 'Currency', tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: 'totalShares', header: 'T. Shares', tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 4,
                addSeparateComma: true
            }
        }
    },
    {
        field: 'priceBuy', header: 'Price Buy', tableConfig: {
            styleCss: { width: "7%", textAlign: "center" },
            
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
            styleCss: { width: "7%", textAlign: "center" },
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
            styleCss: { width: "7%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: ConstantCatalogEnum.DATE_FORMAT_TABLE
            }
        }
    },
    {
        field: 'priceSell', header: 'Price Sell', tableConfig: {
            styleCss: { width: "7%", textAlign: "center" },
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
            styleCss: { width: "7%", textAlign: "center" },
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
            styleCss: { width: "7%", textAlign: "center" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: ConstantCatalogEnum.DATE_FORMAT_TABLE
            }
        }
    },
    {
        field: 'sellGainLossPercentage', header: 'Gain/Loss %', tableConfig: {
            styleCss: { width: "7%", textAlign: "center" }
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
            styleCss: { width: "8%", textAlign: "center" }
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
            styleCss: { width: "8%", textAlign: "center" }
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
            styleCss: { width: "8%", textAlign: "center" }
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