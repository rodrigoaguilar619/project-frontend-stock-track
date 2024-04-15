import { DataTablePropsI } from "lib-components-frontend-ts/lib/@types/components/dataTable/dataTable";
import { FormInputContainerPropsI } from "lib-components-frontend-ts/lib/@types/components/formInputs/formInputs";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-frontend-ts/lib/catalogs/defaultCatalog";
import { InputElementEnum, MaskDataTypeEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";

export const columnsIssuesList: DataTablePropsI[] = [
    {
        field: 'initials', header: 'Issue', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "5%" },
        }
    },
    {
        field: 'description', header: 'Description', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "20%" },
        }
    },
    {
        field: 'isSp500', header: 'Is S&P 500', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.ANSWER
        }
    },
    {
        field: 'descriptionTypeStock', header: 'Type stock', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        }
    },
    {
        field: 'descriptionSector', header: 'Sector', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "10%" },
        }
    },
    {
        field: 'descriptionStatusIssue', header: 'Status', tableConfig: {
            aligns: { alignCell: "center" },
            styleCss: { width: "10%" },
        }
    },
];

export const inputFitlerIssuesIds = {
    statusIssue: "idStatusIssue",
    sector: "idSector",
    typeStock: "idTypeStock",
    isSp500: "isSp500",
}

export const columnsFilterIssuesList: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputFitlerIssuesIds.statusIssue, label: "Status Issue:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFitlerIssuesIds.sector, label: "Sector:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFitlerIssuesIds.typeStock, label: "Type Stock:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFitlerIssuesIds.isSp500, label: "Is S&P 500:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}