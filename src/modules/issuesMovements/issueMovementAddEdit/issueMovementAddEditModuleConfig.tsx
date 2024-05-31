import { FormInputColumnPropsI, FormInputContainerPropsI } from "lib-components-frontend-ts/lib/@types/components/formInputs/formInputs";
import { InputElementEnum, InputMaskEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";

export const inputIssueMovementIds = {
    idIssueMovement: "idIssueMovement",
    issue: "issue",
    idBroker: "idBroker",
    idStatus: "idStatus",
    priceMovement: "priceMovement",

}

export const inputIssueMovementBuyIds = {
    buyTransactionNumber: "buyTransactionNumber",
    buyPrice: "buyPrice",
    buyDate: "buyDate",
    sellPrice: "sellPrice",
    sellDate: "sellDate",
    totalShares: "totalShares",
}

const inputsIssueMovement: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputIssueMovementIds.issue, label: "Initials:",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { },
            },
            validations: {
                idValidation: inputIssueMovementIds.issue, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueMovementIds.idBroker, label: "Broker:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssueMovementIds.idBroker, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueMovementIds.idStatus, label: "Status:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssueMovementIds.idStatus, validatorRules: ["required"]
            }
        }
    ],
    columnstotal: 3,
    containerWidth: "100%"
}

export const inputsIssueMovementBuysAddMultiple: FormInputColumnPropsI[] = [
    {
        id: inputIssueMovementBuyIds.buyTransactionNumber, label: "Transaction number:",
        inputProps: {
            inputType: InputElementEnum.MASK, value: '', updateValue: () => { }, isReadOnly: true,
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 0 },
        },
        validations: {
            idValidation: inputIssueMovementBuyIds.buyTransactionNumber, validatorRules: ["required"]
        }
    },
    {
        id: inputIssueMovementBuyIds.buyPrice, label: "Buy Price:",
        inputProps: {
            inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        },
        validations: {
            idValidation: inputIssueMovementBuyIds.buyPrice, validatorRules: ["required"]
        }
    },
    {
        id: inputIssueMovementBuyIds.buyDate, label: "Buy Date:",
        inputProps: {
            inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
        },
        validations: {
            idValidation: inputIssueMovementBuyIds.buyDate, validatorRules: ["required"]
        }
    },
    {
        id: inputIssueMovementBuyIds.sellPrice, label: "Sell Price:",
        inputProps: {
            inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        }
    },
    {
        id: inputIssueMovementBuyIds.sellDate, label: "Sell Date:",
        inputProps: {
            inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
        }
    },
    {
        id: inputIssueMovementBuyIds.totalShares, label: "Total Shares:",
        inputProps: {
            inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        },
        validations: {
            idValidation: inputIssueMovementBuyIds.totalShares, validatorRules: ["required"]
        }
    }
]

export const formContainersIssueMovement: FormInputContainerPropsI[] = [inputsIssueMovement];