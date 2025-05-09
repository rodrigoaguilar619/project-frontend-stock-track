import { DataTableCustomPropsI } from "@app/_types/utils/maskDataCustomUtil";
import { ConstantCatalogEnum, MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { InputElementEnum, MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const columnFieldsIssuesMovementsNames = {
    alert: {field: 'alert', header: 'Alert'},
    issue: {field: 'issue', header: 'Issue'},
    status: {field: 'descriptionStatus', header: 'Status'},
    broker: {field: 'descriptionBroker', header: 'Broker'},
    currency : {field: 'descriptionCurrency', header: 'Currency'},
    totalSharesNotSold: {field: 'totalSharesNotSold', header: 'Total Shares'},
    performanceTotalNotSold: {field: 'performanceTotalNotSold', header: 'Performance Total'},
    performancePercentageNotSold: {field: 'performancePercentageNotSold', header: 'Performance Percentage'},
    totalSharesSold: {field: 'totalSharesSold', header: 'Total Shares'},
    performanceTotalSold: {field: 'performanceTotalSold', header: 'Performance Total'},
    performancePercentageSold: {field: 'performancePercentageSold', header: 'Performance Percentage'},
    performanceTotal: {field: 'performanceTotal', header: 'Performance Total'},
    sector: {field: 'descriptionSector', header: 'Sector'},
}

export const columnsIssuesMovementsTotalList: DataTableCustomPropsI[] = [
    {
        field: "totalBuyPrice", header: "Total Buy Price", tableConfig: {
            styleCss: { width: "25%", textAlign: "center" },
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
        field: "totalCurrentPrice", header: "Total Current Price", tableConfig: {
            styleCss: { width: "25%", textAlign: "center" },
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
        field: "performanceTotal", header: "Total Performance", tableConfig: {
            styleCss: { width: "25%", textAlign: "center" },
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
        field: "performancePercentage", header: "Performance Percentage", tableConfig: {
            styleCss: { width: "25%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                addSeparateComma: true,
                addSymbolPercent: true,
                decimalPlaces: 2,
                addSymbolDownUp: true
            }
        }
    },
]

export const columnsIssuesMovementsList: DataTableCustomPropsI[] = [
    {
        field: columnFieldsIssuesMovementsNames.alert.field, header: columnFieldsIssuesMovementsNames.alert.header, tableConfig: {
            styleCss: { width: "4%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.ISSUE_ALERT_MOVEMENT
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.issue.field, header: columnFieldsIssuesMovementsNames.issue.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.status.field, header: columnFieldsIssuesMovementsNames.status.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.broker.field, header: columnFieldsIssuesMovementsNames.broker.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.currency.field, header: columnFieldsIssuesMovementsNames.currency.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.totalSharesNotSold.field, header: columnFieldsIssuesMovementsNames.totalSharesNotSold.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.performanceTotalNotSold.field, header: columnFieldsIssuesMovementsNames.performanceTotalNotSold.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
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
        field: columnFieldsIssuesMovementsNames.performancePercentageNotSold.field, header: columnFieldsIssuesMovementsNames.performancePercentageNotSold.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                addSeparateComma: true,
                addSymbolPercent: true,
                decimalPlaces: 2,
                addSymbolDownUp: true
            }
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.totalSharesSold.field, header: columnFieldsIssuesMovementsNames.totalSharesSold.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.performanceTotalSold.field, header: columnFieldsIssuesMovementsNames.performanceTotalSold.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.performancePercentageSold.field, header: columnFieldsIssuesMovementsNames.performancePercentageSold.header, tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                addSeparateComma: true,
                addSymbolPercent: true,
                decimalPlaces: 2,
                addSymbolDownUp: true
            }
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.sector.field, header: columnFieldsIssuesMovementsNames.sector.header, tableConfig: {
            styleCss: { width: "10%", textAlign: "center" },
        }
    },
];

export const columnsIssuesMovementsExpandedList: DataTableCustomPropsI[] = [
    {
        field: 'currentPriceDate', header: 'C. Price date', tableConfig: {
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
        field: 'currentPrice', header: 'C. Price', tableConfig: {
            styleCss: { width: "7%", textAlign: "center" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                addSymbolCurrency: true,
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'fairValue', header: 'Fair Value', tableConfig: {
            styleCss: { width: "7%", textAlign: "center" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                addSymbolCurrency: true,
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'issuePerformance', header: 'Yield CP-FV', tableConfig: {
            styleCss: { width: "6%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                addSeparateComma: true,
                addSymbolPercent: true,
                decimalPlaces: 2,
                addSymbolDownUp: true
            }
        }
    },
    {
        field: 'priceBuy1', header: 'P. Buy 1', tableConfig: {
            styleCss: { width: "7%", textAlign: "center" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                addSymbolCurrency: true,
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'priceBuy2', header: 'P. Buy 2', tableConfig: {
            styleCss: { width: "7%", textAlign: "center" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                addSymbolCurrency: true,
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'priceBuy3', header: 'P. Buy 3', tableConfig: {
            styleCss: { width: "7%", textAlign: "center" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                addSymbolCurrency: true,
                decimalPlaces: 2
            }
        }
    },
    {
        field: 'priceBuy4', header: 'P. Buy 4', tableConfig: {
            styleCss: { width: "7%", textAlign: "center" }
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                addSymbolCurrency: true,
                decimalPlaces: 2
            }
        }
    }
];

export const inputFitlerIssuesMovementsIds = {
    statusIssueMovement: "idStatusIssueMovement",
    sector: "idSector",
    broker: "idBroker",
    index: "idIndex",
    filterYear: "year",
    isSold: "isSold"
}

export const columnsFilterIssuesList: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Status Issue:",
            inputProps: {
                id: inputFitlerIssuesMovementsIds.statusIssueMovement,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Sector:",
            inputProps: {
                id: inputFitlerIssuesMovementsIds.sector,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Broker:",
            inputProps: {
                id: inputFitlerIssuesMovementsIds.broker,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Index:",
            inputProps: {
                id: inputFitlerIssuesMovementsIds.index,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Year:",
            inputProps: {
                id: inputFitlerIssuesMovementsIds.filterYear,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Is Sold:",
            inputProps: {
                id: inputFitlerIssuesMovementsIds.isSold,
                inputType: InputElementEnum.SELECT, value: '', options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
    ],
    columnstotal: 7,
    containerWidth: "100%"
}