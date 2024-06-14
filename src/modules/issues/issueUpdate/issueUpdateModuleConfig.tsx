import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { InputElementEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";

export const inputIssueIds = {
    idIssue: "idIssue",
    description: "description",
    initials: "initials",
    isSp500: "isSp500",
    idSector: "idSector",
    idTypeStock: "idTypeStock",
    idStatusIssue: "idStatusIssue",
    historicalStartDate: "historicalStartDate",
}

const inputsIssue: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputIssueIds.idIssue, label: "Id issue:",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }, isReadOnly: true,
            }
        },
        {
            id: inputIssueIds.initials, label: "Initials:",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
            },
            validations: {
                idValidation: inputIssueIds.initials, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueIds.description, label: "Description:",
            inputProps: {
                inputType: InputElementEnum.TEXT, value: '', updateValue: () => { }
            },
            validations: {
                idValidation: inputIssueIds.description, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueIds.isSp500, label: "Is S&P 500:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE
            },
            validations: {
                idValidation: inputIssueIds.isSp500, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueIds.idSector, label: "Sector:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssueIds.idSector, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueIds.idTypeStock, label: "Type Stock:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssueIds.idTypeStock, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueIds.idStatusIssue, label: "Status Issue:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputIssueIds.idStatusIssue, validatorRules: ["required"]
            }
        },
        {
            id: inputIssueIds.historicalStartDate, label: "Historical Start Date:",
            inputProps: {
                inputType: InputElementEnum.CALENDAR, value: null, updateValue: () => { }
            },
            validations: {
                idValidation: inputIssueIds.historicalStartDate, validatorRules: ["required"]
            }
        },
    ],
    columnstotal: 4,
    containerWidth: "100%"
}

export const formContainersIssues: FormInputContainerPropsI[] = [inputsIssue];