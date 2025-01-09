import { DataTablePropsI } from "lib-components-react/lib/@types/components/dataTable/dataTable";
import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { InputElementEnum, MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const columnsIssuesList: DataTablePropsI[] = [
    {
        field: 'initials', header: 'Issue', tableConfig: {
            styleCss: { width: "5%", textAlign: "center" },
        }
    },
    {
        field: 'description', header: 'Description', tableConfig: {
            styleCss: { width: "20%", textAlign: "left" },
        }
    },
    {
        field: 'descriptionIndex', header: 'Index', tableConfig: {
            styleCss: { width: "10%", textAlign: "center" },
        }
    },
    {
        field: 'descriptionTypeStock', header: 'Type stock', tableConfig: {
            styleCss: { width: "10%", textAlign: "left" },
        }
    },
    {
        field: 'descriptionSector', header: 'Sector', tableConfig: {
            styleCss: { width: "10%", textAlign: "left" },
        }
    },
    {
        field: 'descriptionStatusIssue', header: 'Status', tableConfig: {
            styleCss: { width: "10%", textAlign: "center" },
        }
    },
];

export const inputFitlerIssuesIds = {
    statusIssue: "idStatusIssue",
    sector: "idSector",
    typeStock: "idTypeStock",
    index: "idIndex",
}

export const columnsFilterIssuesList: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Status Issue:",
            inputProps: {
                id: inputFitlerIssuesIds.statusIssue,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Sector:",
            inputProps: {
                id: inputFitlerIssuesIds.sector,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Type Stock:",
            inputProps: {
                id: inputFitlerIssuesIds.typeStock,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Index:",
            inputProps: {
                id: inputFitlerIssuesIds.index,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}