import { FormInputColumnPropsI, FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { InputElementEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";

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
            label: "Type Stock:",
            inputProps: {
                id: inputIssuesAddMainIds.idTypeStock,
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssuesAddMainIds.idTypeStock, validatorRules: ["required"]
            }
        },
        {
            label: "Status Issue:",
            inputProps: {
                id: inputIssuesAddMainIds.idStatusIssue,
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssuesAddMainIds.idStatusIssue, validatorRules: ["required"]
            }
        },
        {
            label: "Historical Start Date:",
            inputProps: {
                id: inputIssuesAddMainIds.historicalStartDate,
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
        label: "Initials:",
        inputProps: {
            id: inputIssuesAddMultipleIds.initials,
            inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.initials, validatorRules: ["required"]
        }
    },
    {
        label: "Description:",
        inputProps: {
            id: inputIssuesAddMultipleIds.description,
            inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.description, validatorRules: ["required"]
        }
    },
    {
        label: "Is S&P 500:",
        inputProps: {
            id: inputIssuesAddMultipleIds.isSp500,
            inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.isSp500, validatorRules: ["required"]
        }
    },
    {
        label: "Sector:",
        inputProps: {
            id: inputIssuesAddMultipleIds.idSector,
            inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.idSector, validatorRules: ["required"]
        }
    },
]

export const formContainersIssuesAddMain: FormInputContainerPropsI[] = [inputsIssuesAddMain];