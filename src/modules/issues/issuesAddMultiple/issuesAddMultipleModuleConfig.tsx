import { FormInputColumnPropsI, FormInputContainerPropsI } from "lib-components-frontend-ts/lib/@types/components/formInputs/formInputs";
import { InputElementEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-frontend-ts/lib/catalogs/defaultCatalog";

export const inputIssuesAddMainIds = {
    idTypeStock: "idTypeStock",
    idStatusIssue: "idStatusIssue",
    historicalStartDate: "historicalStartDate",
}

export const inputIssuesAddMultipleIds = {
    initials: "initials",
    description: "description",
    isSp500: "isSp500",
    idSector: "idSector"
}

const inputsIssuesAddMain: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputIssuesAddMainIds.idTypeStock, label: "Type Stock:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssuesAddMainIds.idTypeStock, validatorRules: ["required"]
            }
        },
        {
            id: inputIssuesAddMainIds.idStatusIssue, label: "Status Issue:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssuesAddMainIds.idStatusIssue, validatorRules: ["required"]
            }
        },
        {
            id: inputIssuesAddMainIds.historicalStartDate, label: "Historical Start Date:",
            inputProps: {
                inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
            },
            validations: {
                idValidation: inputIssuesAddMainIds.historicalStartDate, validatorRules: ["required"]
            }
        },
    ],
    columnstotal: 3,
    containerWidth: "100%"
}

export const inputsIssuesAddMultiple: FormInputColumnPropsI[] = [
    {
        id: inputIssuesAddMultipleIds.initials, label: "Initials:",
        inputProps: {
            inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.initials, validatorRules: ["required"]
        }
    },
    {
        id: inputIssuesAddMultipleIds.description, label: "Description:",
        inputProps: {
            inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.description, validatorRules: ["required"]
        }
    },
    {
        id: inputIssuesAddMultipleIds.isSp500, label: "Is S&P 500:",
        inputProps: {
            inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.isSp500, validatorRules: ["required"]
        }
    },
    {
        id: inputIssuesAddMultipleIds.idSector, label: "Sector:",
        inputProps: {
            inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.idSector, validatorRules: ["required"]
        }
    },
]

export const formContainersIssuesAddMain: FormInputContainerPropsI[] = [inputsIssuesAddMain];