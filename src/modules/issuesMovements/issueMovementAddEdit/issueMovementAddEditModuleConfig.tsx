import { FormInputColumnPropsI, FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { InputElementEnum, InputMaskEnum } from "lib-components-react/lib/catalogs/enumCatalog";

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
            label: "Initials:",
            inputProps: {
                id: inputIssueMovementIds.issue,
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { },
            },
            validations: {
                idValidation: inputIssueMovementIds.issue, validatorRules: ["required"]
            }
        },
        {
            label: "Broker:",
            inputProps: {
                id: inputIssueMovementIds.idBroker,
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssueMovementIds.idBroker, validatorRules: ["required"]
            }
        },
        {
            label: "Status:",
            inputProps: {
                id: inputIssueMovementIds.idStatus,
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
        label: "Transaction number:",
        inputProps: {
            id: inputIssueMovementBuyIds.buyTransactionNumber,
            inputType: InputElementEnum.MASK, value: '', updateValue: () => { }, isReadOnly: true,
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 0 },
        },
        validations: {
            idValidation: inputIssueMovementBuyIds.buyTransactionNumber, validatorRules: ["required"]
        }
    },
    {
        label: "Buy Price:",
        inputProps: {
            id: inputIssueMovementBuyIds.buyPrice,
            inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        },
        validations: {
            idValidation: inputIssueMovementBuyIds.buyPrice, validatorRules: ["required"]
        }
    },
    {
        label: "Buy Date:",
        inputProps: {
            id: inputIssueMovementBuyIds.buyDate,
            inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
        },
        validations: {
            idValidation: inputIssueMovementBuyIds.buyDate, validatorRules: ["required"]
        }
    },
    {
        label: "Sell Price:",
        inputProps: {
            id: inputIssueMovementBuyIds.sellPrice,
            inputType: InputElementEnum.MASK, value: null, updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 2 }
        }
    },
    {
        label: "Sell Date:",
        inputProps: {
            id: inputIssueMovementBuyIds.sellDate,
            inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
        }
    },
    {
        label: "Total Shares:",
        inputProps: {
            id: inputIssueMovementBuyIds.totalShares,
            inputType: InputElementEnum.MASK, value: '', updateValue: () => { },
            maskType: InputMaskEnum.NUMBER, maskProps: { totalDecimals: 4 }
        },
        validations: {
            idValidation: inputIssueMovementBuyIds.totalShares, validatorRules: ["required"]
        }
    }
]

export const formContainersIssueMovement: FormInputContainerPropsI[] = [inputsIssueMovement];