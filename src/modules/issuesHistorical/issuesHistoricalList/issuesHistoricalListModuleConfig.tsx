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
            id: inputFilterIssuesHistoricalIds.sector, label: "Sector:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesHistoricalIds.typeStock, label: "Type Stock:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesHistoricalIds.isSp500, label: "Is S&P 500:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesHistoricalIds.isInvest, label: "Is Invest:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesHistoricalIds.statusIssueQuick, label: "Status Quick:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesHistoricalIds.statusIssueTrading, label: "Status Trading:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesHistoricalIds.fairValuePriceOverPercentage, label: "Fair value price over %:",
            inputProps: {
                inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
                maskType: InputMaskEnum.NUMBER, maskProps: { }
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}