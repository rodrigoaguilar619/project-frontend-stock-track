import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { InputElementEnum, InputMaskEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { ConstantCatalogEnum } from "@app/catalogs/enumCatalog";

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
            label: "Id issue:",
            inputProps: {
                id: inputIssueManagerIds.idIssue,
                inputType: InputElementEnum.TEXT, value: '', isReadOnly: true,
            }
        },
        {
            label: "Initials:",
            inputProps: {
                id: inputIssueManagerIds.initials,
                inputType: InputElementEnum.TEXT, value: '', isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.initials, validatorRules: ["required"]
            }
        },
        {
            label: "Description:",
            inputProps: {
                id: inputIssueManagerIds.description,
                inputType: InputElementEnum.TEXT, value: '', isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.description, validatorRules: ["required"]
            }
        },
        {
            label: "Is S&P 500:",
            inputProps: {
                id: inputIssueManagerIds.isSp500,
                inputType: InputElementEnum.SELECT, value: '', options: CATALOG_DEFAULT_TRUE_FALSE, isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.isSp500, validatorRules: ["required"]
            }
        },
        {
            label: "Sector:",
            inputProps: {
                id: inputIssueManagerIds.idSector,
                inputType: InputElementEnum.SELECT, value: '', options: [], isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.idSector, validatorRules: ["required"]
            }
        },
        {
            label: "Type Stock:",
            inputProps: {
                id: inputIssueManagerIds.idTypeStock,
                inputType: InputElementEnum.SELECT, value: '', options: [], isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.idTypeStock, validatorRules: ["required"]
            }
        },
        {
            label: "Status Issue:",
            inputProps: {
                id: inputIssueManagerIds.idStatusIssue,
                inputType: InputElementEnum.SELECT, value: '', options: [], isReadOnly: true,
            },
            validations: {
                idValidation: inputIssueManagerIds.idStatusIssue, validatorRules: ["required"]
            }
        },
        {
            label: "Historical Start Date:",
            inputProps: {
                id: inputIssueManagerIds.historicalStartDate,
                inputType: InputElementEnum.CALENDAR, value: null, isReadOnly: true, dateFormat: ConstantCatalogEnum.DATE_FORMAT_INPUT
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
            label: "Status Issue quick:",
            inputProps: {
                id: inputIssueManagerIds.idStatusIssueQuick, 
                inputType: InputElementEnum.SELECT, value: '', options: []
            },
            validations: {
                idValidation: inputIssueManagerIds.idStatusIssueQuick, validatorRules: ["required"]
            }
        },
        {
            label: "Status Issue trading:",
            inputProps: {
                id: inputIssueManagerIds.idStatusIssueTrading, 
                inputType: InputElementEnum.SELECT, value: '', options: []
            },
            validations: {
                idValidation: inputIssueManagerIds.idStatusIssueTrading, validatorRules: ["required"]
            }
        },
        {
            label: "Is Invest:",
            inputProps: {
                id: inputIssueManagerIds.isInvest,
                inputType: InputElementEnum.SELECT, value: '', options: CATALOG_DEFAULT_TRUE_FALSE
            },
            validations: {
                idValidation: inputIssueManagerIds.isInvest, validatorRules: ["required"]
            }
        },
        {
            label: "Fair Value:",
            inputProps: {
                id: inputIssueManagerIds.fairValue,
                inputType: InputElementEnum.MASK, value: '',
                maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
            },
            validations: {
                idValidation: inputIssueManagerIds.fairValue, validatorRules: ["numeric"]
            }
        },
        {
            label: "Track Buy Value:",
            inputProps: {
                id: inputIssueManagerIds.trackBuyPrice,
                inputType: InputElementEnum.MASK, value: '',
                maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
            },
            validations: {
                idValidation: inputIssueManagerIds.trackBuyPrice, validatorRules: ["numeric"]
            }
        },
        {
            label: "Track Sell Value:",
            inputProps: {
                id: inputIssueManagerIds.trackSellPrice,
                inputType: InputElementEnum.MASK, value: '',
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