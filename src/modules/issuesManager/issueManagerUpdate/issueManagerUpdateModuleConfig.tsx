import { FormInputContainerPropsI } from "lib-components-frontend-ts/lib/@types/components/formInputs/formInputs";
import { InputElementEnum, InputMaskEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-frontend-ts/lib/catalogs/defaultCatalog";

export const inputIssueManagerIds = {
    idIssue: "idIssue",
    description: "description",
    initials: "initials",
    isSp500: "isSp500",
    idSector: "idSector",
    idTypeStock: "idTypeStock",
    idStatusIssue: "idStatusIssue",
    idStatusIssueQuick: "idStatusIssueQuick",
    idStatusIssueTrading: "idStatusIssueTrading",
    isInvest: "isInvest",
    historicalStartDate: "historicalStartDate",
    trackBuyPrice: "trackBuyPrice",
    trackSellPrice: "trackSellPrice",
    fairValue: "fairValue"
}

const inputsIssue: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputIssueManagerIds.idIssue, label: "Id issue:",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }, isReadOnly: true,
            }
        },
        {
            id: inputIssueManagerIds.initials, label: "Initials:",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }, isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.initials, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueManagerIds.description, label: "Description:",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }, isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.description, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueManagerIds.isSp500, label: "Is S&P 500:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE, isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.isSp500, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueManagerIds.idSector, label: "Sector:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.idSector, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueManagerIds.idTypeStock, label: "Type Stock:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.idTypeStock, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueManagerIds.idStatusIssue, label: "Status Issue:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.idStatusIssue, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueManagerIds.historicalStartDate, label: "Historical Start Date:",
            inputProps: {
                inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }, isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.historicalStartDate, validatorRules: ["required"]
            }
        },
    ],
    columnstotal: 4,
    containerWidth: "100%"
}

const inputsIssueManager: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputIssueManagerIds.idStatusIssueQuick, label: "Status Issue quick:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssueManagerIds.idStatusIssueQuick, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueManagerIds.idStatusIssueTrading, label: "Status Issue trading:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssueManagerIds.idStatusIssueTrading, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueManagerIds.isInvest, label: "Is Invest:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE
            },
            validations: {
                idValidation: inputIssueManagerIds.isInvest, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueManagerIds.fairValue, label: "Fair Value:",
            inputProps: {
                inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
                maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
            },
            validations: {
                idValidation: inputIssueManagerIds.fairValue, validatorRules: ["numeric"]
            }
        },
        {
            id: inputIssueManagerIds.trackBuyPrice, label: "Track Buy Value:",
            inputProps: {
                inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
                maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
            },
            validations: {
                idValidation: inputIssueManagerIds.trackBuyPrice, validatorRules: ["numeric"]
            }
        },
        {
            id: inputIssueManagerIds.trackSellPrice, label: "Track Sell Value:",
            inputProps: {
                inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
                maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
            },
            validations: {
                idValidation: inputIssueManagerIds.trackSellPrice, validatorRules: ["numeric"]
            }
        }
    ],
    columnstotal: 6,
    containerWidth: "100%"
}

export const formContainersIssuesManager: FormInputContainerPropsI[] = [inputsIssue, inputsIssueManager];