import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { InputElementEnum, InputMaskEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const inputFilterIssuesHistoricalIds = {
    sector: "idSector",
    typeStock: "idTypeStock",
    isSp500: "isSp500",
    isInvest: "isInvest",
    statusIssueQuick: "idStatusIssueQuick",
    statusIssueTrading: "idStatusIssueTrading",
    fairValuePriceOverPercentage: "fairValuePriceOverPercentage"
}

export const columnsFilterIssuesHistoricalList: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Sector:",
            inputProps: {
                id: inputFilterIssuesHistoricalIds.sector,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Type Stock:",
            inputProps: {
                id: inputFilterIssuesHistoricalIds.typeStock,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Is S&P 500:",
            inputProps: {
                id: inputFilterIssuesHistoricalIds.isSp500,
                inputType: InputElementEnum.SELECT, value: '', options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
        {
            label: "Is Invest:",
            inputProps: {
                id: inputFilterIssuesHistoricalIds.isInvest,
                inputType: InputElementEnum.SELECT, value: '', options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
        {
            label: "Status Quick:",
            inputProps: {
                id: inputFilterIssuesHistoricalIds.statusIssueQuick,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Status Trading:",
            inputProps: {
                id: inputFilterIssuesHistoricalIds.statusIssueTrading,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Fair value price over %:",
            inputProps: {
                id: inputFilterIssuesHistoricalIds.fairValuePriceOverPercentage,
                inputType: InputElementEnum.MASK, value: '',
                maskType: InputMaskEnum.NUMBER, maskProps: { }
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}