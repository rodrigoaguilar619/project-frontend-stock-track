import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { InputElementEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { ConstantCatalogEnum } from "@app/catalogs/enumCatalog";

export const inputIssueIds = {
    idIssue: "idIssue",
    description: "description",
    initials: "initials",
    idIndex: "idIndex",
    idSector: "idSector",
    idTypeStock: "idTypeStock",
    idStatusIssue: "idStatusIssue",
    historicalStartDate: "historicalStartDate",
}

const inputsIssue: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Id issue:",
            inputProps: {
                id: inputIssueIds.idIssue, 
                inputType: InputElementEnum.TEXT, value: '', isReadOnly: true,
            }
        },
        {
            label: "Initials:",
            inputProps: {
                id: inputIssueIds.initials,
                inputType: InputElementEnum.TEXT, value: ''
            },
            validations: {
                idValidation: inputIssueIds.initials, validatorRules: ["required"]
            }
        },
        {
            label: "Description:",
            inputProps: {
                id: inputIssueIds.description,
                inputType: InputElementEnum.TEXT, value: ''
            },
            validations: {
                idValidation: inputIssueIds.description, validatorRules: ["required"]
            }
        },
        {
            label: "Index:",
            inputProps: {
                id: inputIssueIds.idIndex,
                inputType: InputElementEnum.SELECT, value: '', options: []
            },
            validations: {
                idValidation: inputIssueIds.idIndex, validatorRules: ["required"]
            }
        },
        {
            label: "Sector:",
            inputProps: {
                id: inputIssueIds.idSector,
                inputType: InputElementEnum.SELECT, value: '', options: []
            },
            validations: {
                idValidation: inputIssueIds.idSector, validatorRules: ["required"]
            }
        },
        {
            label: "Type Stock:",
            inputProps: {
                id: inputIssueIds.idTypeStock,
                inputType: InputElementEnum.SELECT, value: '', options: []
            },
            validations: {
                idValidation: inputIssueIds.idTypeStock, validatorRules: ["required"]
            }
        },
        {
            label: "Status Issue:",
            inputProps: {
                id: inputIssueIds.idStatusIssue,
                inputType: InputElementEnum.SELECT, value: '', options: []
            },
            validations: {
                idValidation: inputIssueIds.idStatusIssue, validatorRules: ["required"]
            }
        },
        {
            label: "Historical Start Date:",
            inputProps: {
                id: inputIssueIds.historicalStartDate,
                inputType: InputElementEnum.CALENDAR, value: null, dateFormat: ConstantCatalogEnum.DATE_FORMAT_INPUT
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