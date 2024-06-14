import { DataTablePropsI } from "lib-components-react/lib/@types/components/dataTable/dataTable";
import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { CATALOG_DEFAULT_TRUE_FALSE } from "lib-components-react/lib/catalogs/defaultCatalog";
import { InputElementEnum, MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const columnsIssuesManagerList: DataTablePropsI[] = [
    {
        field: 'initials', header: 'Issue', tableConfig: {
            aligns: { alignCell: "left" },
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
            aligns: { alignCell: "left" },
            styleCss: { width: "5%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.ANSWER
        }
    },
    {
        field: 'isInvest', header: 'Is Invest', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "5%" },
        },
        maskProps: {
            maskType: MaskDataTypeEnum.ANSWER
        }
    },
    {
        field: 'descriptionTypeStock', header: 'Type stock', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "5%" },
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
            aligns: { alignCell: "left" },
            styleCss: { width: "7%" },
        }
    },
    {
        field: 'descriptionStatusIssueQuick', header: 'Status Quick', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "7%" },
        }
    },
    {
        field: 'descriptionStatusIssueTrading', header: 'Status Trading', tableConfig: {
            aligns: { alignCell: "left" },
            styleCss: { width: "7%" },
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
            id: inputFilterIssuesManagerIds.sector, label: "Sector:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesManagerIds.typeStock, label: "Type Stock:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesManagerIds.isSp500, label: "Is S&P 500:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesManagerIds.isInvest, label: "Is Invest:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: CATALOG_DEFAULT_TRUE_FALSE, isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesManagerIds.statusIssue, label: "Status Issue:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesManagerIds.statusIssueQuick, label: "Status Quick:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
        {
            id: inputFilterIssuesManagerIds.statusIssueTrading, label: "Status Trading:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: [], isOptionAll: true
            }
        },
    ],
    columnstotal: 5,
    containerWidth: "100%"
}