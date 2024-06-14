import { DataTableCustomPropsI } from "@app/_types/utils/maskDataCustomUtil";
import { MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
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
        field: "performanceTotal", header: "Performance Total", tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
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
            aligns: { alignCell: "left" },
            styleCss: { width: "4%" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.ISSUE_ALERT_MOVEMENT
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.issue.field, header: columnFieldsIssuesMovementsNames.issue.header, tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.status.field, header: columnFieldsIssuesMovementsNames.status.header, tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.broker.field, header: columnFieldsIssuesMovementsNames.broker.header, tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.currency.field, header: columnFieldsIssuesMovementsNames.currency.header, tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.totalSharesNotSold.field, header: columnFieldsIssuesMovementsNames.totalSharesNotSold.header, tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.performanceTotalNotSold.field, header: columnFieldsIssuesMovementsNames.performanceTotalNotSold.header, tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.performanceTotalSold.field, header: columnFieldsIssuesMovementsNames.performanceTotalSold.header, tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: columnFieldsIssuesMovementsNames.performancePercentageSold.field, header: columnFieldsIssuesMovementsNames.performancePercentageSold.header, tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        }
    },
];

export const columnsIssuesMovementsExpandedList: DataTableCustomPropsI[] = [
    {
        field: 'currentPriceDate', header: 'C. Price date', tableConfig: {
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
        field: 'currentPrice', header: 'C. Price', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
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
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
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
        field: 'issuePerformance', header: 'Yield', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "6%" }
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
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
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
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
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
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
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
            aligns: { alignCell: "center" },
            styleCss: { width: "7%" }
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
}

export const columnsFilterIssuesList: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputFitlerIssuesMovementsIds.statusIssueMovement, label: "Status Issue:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFitlerIssuesMovementsIds.sector, label: "Sector:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFitlerIssuesMovementsIds.broker, label: "Broker:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}