import { MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { DataTableCustomPropsI } from "@app/utils/maskDataCustomUtil";
import { DataTablePropsI } from "lib-components-frontend-ts/lib/@types/components/dataTable/dataTable";
import { FormInputContainerPropsI } from "lib-components-frontend-ts/lib/@types/components/formInputs/formInputs";
import { InputElementEnum, MaskDataTypeEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";

export const columnsIssuesMovementsList: DataTableCustomPropsI[] = [
    {
        field: 'alert', header: 'Alert', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "4%" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.ISSUE_ALERT_MOVEMENT
        }
    },
    {
        field: 'issue', header: 'Issue', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'descriptionStatus', header: 'Status', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'priceMovement', header: 'Price Mov.', tableConfig: {
            aligns: { alignCell: "left" },
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
            aligns: { alignCell: "left" },
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
            aligns: { alignCell: "left" },
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
        field: 'descriptionBroker', header: 'Broker', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'descriptionCurrency', header: 'Currency', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'priceBuy1', header: 'P. Buy 1', tableConfig: {
            aligns: { alignCell: "left" },
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
            aligns: { alignCell: "left" },
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
            aligns: { alignCell: "left" },
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
            aligns: { alignCell: "left" },
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
        field: 'descriptionSector', header: 'Sector', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        }
    },
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