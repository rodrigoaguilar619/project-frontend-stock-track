import { DataTableCustomPropsI } from "@app/_types/utils/maskDataCustomUtil";
import { MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { InputElementEnum, MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const columnsPortfolioList: DataTableCustomPropsI[] = [
    {
        field: 'broker', header: 'Broker', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
        }
    },
    {
        field: 'typeCurrency', header: 'Currency', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        }
    },
    {
        field: 'totalDeposits', header: 'Total Deposits', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'titles', header: 'Titles', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'lastUpdate', header: 'Last Update', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
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
            aligns: { alignCell: "center" },
            styleCss: { width: "15%" },
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
            id: inputFitlerIssuesIds.statusIssue, label: "Status Issue:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFitlerIssuesIds.sector, label: "Sector:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFitlerIssuesIds.typeStock, label: "Type Stock:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFitlerIssuesIds.isSp500, label: "Is S&P 500:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}