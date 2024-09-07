import { DataTablePropsI } from "lib-components-react/lib/@types/components/dataTable/dataTable";
import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { InputElementEnum, MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const columnsIssuesManagerList: DataTablePropsI[] = [
    {
        field: 'initials', header: 'Issue', tableConfig: {
            styleCss: { width: "5%", textAlign: "left" },
        }
    },
    {
        field: 'description', header: 'Description', tableConfig: {
            styleCss: { width: "20%", textAlign: "left" },
        }
    },
    {
        field: 'isSp500', header: 'Is S&P 500', tableConfig: {
            styleCss: { width: "5%", textAlign: "left" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.ANSWER
        }
    },
    {
        field: 'isInvest', header: 'Is Invest', tableConfig: {
            styleCss: { width: "5%", textAlign: "left" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.ANSWER
        }
    },
    {
        field: 'descriptionTypeStock', header: 'Type stock', tableConfig: {
            styleCss: { width: "5%", textAlign: "left" },
        }
    },
    {
        field: 'descriptionSector', header: 'Sector', tableConfig: {
            styleCss: { width: "10%", textAlign: "left" },
        }
    },
    {
        field: 'descriptionStatusIssue', header: 'Status', tableConfig: {
            styleCss: { width: "7%", textAlign: "left" },
        }
    },
    {
        field: 'descriptionStatusIssueQuick', header: 'Status Quick', tableConfig: {
            styleCss: { width: "7%", textAlign: "left" },
        }
    },
    {
        field: 'descriptionStatusIssueTrading', header: 'Status Trading', tableConfig: {
            styleCss: { width: "7%", textAlign: "left" },
        }
    },
];

export const inputFilterIssuesManagerIds = {
    sector: "idSector",
    typeStock: "idTypeStock",
    isSp500: "isSp500",
    isInvest: "isInvest",
    statusIssue: "idStatusIssue",
    statusIssueQuick: "idStatusIssueQuick",
    statusIssueTrading: "idStatusIssueTrading",
}

export const columnsFilterIssuesManagerList: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Sector:",
            inputProps: {
                id: inputFilterIssuesManagerIds.sector,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Type Stock:",
            inputProps: {
                id: inputFilterIssuesManagerIds.typeStock,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Is S&P 500:",
            inputProps: {
                id: inputFilterIssuesManagerIds.isSp500,
                inputType: InputElementEnum.SELECT, value: '', options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
        {
            label: "Is Invest:",
            inputProps: {
                id: inputFilterIssuesManagerIds.isInvest,
                inputType: InputElementEnum.SELECT, value: '', options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
        {
            label: "Status Issue:",
            inputProps: {
                id: inputFilterIssuesManagerIds.statusIssue,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Status Quick:",
            inputProps: {
                id: inputFilterIssuesManagerIds.statusIssueQuick,
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
        {
            label: "Status Trading:",
            inputProps: {
                id: inputFilterIssuesManagerIds.statusIssueTrading, 
                inputType: InputElementEnum.SELECT, value: '', options: [], isOptionAll: true
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}