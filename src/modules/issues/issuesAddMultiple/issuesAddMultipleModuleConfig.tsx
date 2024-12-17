import { FormInputColumnPropsI, FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { InputElementEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { dateFormat } from "highcharts";
import { ConstantCatalogEnum } from "@app/catalogs/enumCatalog";

export const inputIssuesAddMainIds = {
    idTypeStock: "idTypeStock",
    idStatusIssue: "idStatusIssue",
    idIndex: "idIndex",
    historicalStartDate: "historicalStartDate",
}

export const inputIssuesAddMultipleIds = {
    initials: "initials",
    description: "description",
    idIndex: "idIndex",
    idSector: "idSector"
}

const inputsIssuesAddMain: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Type Stock:",
            inputProps: {
                id: inputIssuesAddMainIds.idTypeStock,
                inputType: InputElementEnum.SELECT, value: '', options: []
            },
            validations: {
                idValidation: inputIssuesAddMainIds.idTypeStock, validatorRules: ["required"]
            }
        },
        {
            label: "Status Issue:",
            inputProps: {
                id: inputIssuesAddMainIds.idStatusIssue,
                inputType: InputElementEnum.SELECT, value: '', options: []
            },
            validations: {
                idValidation: inputIssuesAddMainIds.idStatusIssue, validatorRules: ["required"]
            }
        },
        {
            label: "Historical Start Date:",
            inputProps: {
                id: inputIssuesAddMainIds.historicalStartDate,
                inputType: InputElementEnum.CALENDAR, value: null, dateFormat: ConstantCatalogEnum.DATE_FORMAT_INPUT
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
            inputType: InputElementEnum.TEXT, value: ''
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.initials, validatorRules: ["required"]
        }
    },
    {
        label: "Description:",
        inputProps: {
            id: inputIssuesAddMultipleIds.description,
            inputType: InputElementEnum.TEXT, value: ''
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.description, validatorRules: ["required"]
        }
    },
    {
        label: "Index:",
        inputProps: {
            id: inputIssuesAddMultipleIds.idIndex,
            inputType: InputElementEnum.SELECT, value: '', options: []
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.idIndex, validatorRules: ["required"]
        }
    },
    {
        label: "Sector:",
        inputProps: {
            id: inputIssuesAddMultipleIds.idSector,
            inputType: InputElementEnum.SELECT, value: '', options: []
        },
        validations: {
            idValidation: inputIssuesAddMultipleIds.idSector, validatorRules: ["required"]
        }
    },
]

export const formContainersIssuesAddMain: FormInputContainerPropsI[] = [inputsIssuesAddMain];