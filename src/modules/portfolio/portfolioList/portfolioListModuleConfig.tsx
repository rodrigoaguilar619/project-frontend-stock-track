import { DataTableCustomPropsI } from "@app/_types/utils/maskDataCustomUtil";
import { MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { InputElementEnum, MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const columnsPortfolioList: DataTableCustomPropsI[] = [
    {
        field: 'broker', header: 'Broker', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        }
    },
    {
        field: 'typeCurrency', header: 'Currency', tableConfig: {
            styleCss: { width: "10%", textAlign: "center" },
        }
    },
    {
        field: 'totalDeposits', header: 'Total Deposits', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2,
                addSymbolCurrency: true,
                addSeparateComma: true
            }
        }
    },
    {
        field: 'totalSecuritiesValue', header: 'Total Securities Value', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                decimalPlaces: 2,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'totalSecuritiesValueMxn', header: 'Total Securities Value (MXN)', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                decimalPlaces: 2,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'yield', header: 'Yield', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                addSeparateComma: true,
                decimalPlaces: 2,
                addSymbolPercent: true,
                addSymbolDownUp: true
            }
        }
    }
];

export const columnsPortfolioData: DataTableCustomPropsI[] = [
    {
        field: 'initials', header: 'Issue', tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: 'titles', header: 'Titles', tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: 'lastUpdate', header: 'Last Update', tableConfig: {
            styleCss: { width: "10%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.DATE,
            maskDataProps: {
                format: "DD/MM/yyyy HH:mm:ss"
            }
        }
    },
    {
        field: 'costAvgBuyPerTitle', header: 'Cost Avg Buy Per Title (USD)', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                decimalPlaces: 2,
                addSymbolCurrency: true,
                addSeparateComma: true
            }
        }
    },
    {
        field: 'costAvgSellPerTitleMxn', header: 'Cost Avg Sell Per Title (MXN)', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                decimalPlaces: 2,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'costTotalSell', header: 'Cost Total Sell (USD)', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                decimalPlaces: 2,
                addSymbolCurrency: true
            }
        }
    },{
        field: 'costTotalSellMxn', header: 'Cost Total Sell (MXN)', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.CURRENCY,
            maskDataProps: {
                addSeparateComma: true,
                decimalPlaces: 2,
                addSymbolCurrency: true
            }
        }
    },
    {
        field: 'yield', header: 'Yield', tableConfig: {
            styleCss: { width: "15%", textAlign: "center" },
        },
        maskProps: {
            maskType: MaskDataTypeCustomEnum.DOWN_UP,
            maskDataCustomProps: {
                addSeparateComma: true,
                decimalPlaces: 2,
                addSymbolPercent: true,
                addSymbolDownUp: true
            }
        }
    }
];

export const inputFitlerIssuesIds = {
    statusIssue: "idStatusIssue",
    sector: "idSector",
    typeStock: "idTypeStock",
    isSp500: "isSp500",
}

export const columnsFilterIssuesList: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Status Issue:",
            inputProps: {
                id: inputFitlerIssuesIds.statusIssue,
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            label: "Sector:",
            inputProps: {
                id: inputFitlerIssuesIds.sector,
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            label: "Type Stock:",
            inputProps: {
                id: inputFitlerIssuesIds.typeStock,
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            label: "Is S&P 500:",
            inputProps: {
                id: inputFitlerIssuesIds.isSp500,
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}