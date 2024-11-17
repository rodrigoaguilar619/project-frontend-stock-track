import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { InputElementEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const inputTransactionIssuesFileIds = {
    idBroker: "idBroker",
    idFileTransaction: "idFileTransaction",
    file: "fileTransactionIssues"
}

const fileTransaction: any[] = [
    { description: 'Transactions issues', id: 1 },
    { description: 'Transactions money', id: 2 }
];

const inputsTransactionIssuesFile: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Broker:",
            inputProps: {
                id: inputTransactionIssuesFileIds.idBroker,
                inputType: InputElementEnum.SELECT, value: '', options: []
            },
            validations: {
                idValidation: inputTransactionIssuesFileIds.idBroker, validatorRules: ["required"]
            }
        },
        {
            label: "File transactions:",
            inputProps: {
                id: inputTransactionIssuesFileIds.idFileTransaction,
                inputType: InputElementEnum.SELECT, value: '', options: fileTransaction
            },
            validations: {
                idValidation: inputTransactionIssuesFileIds.idFileTransaction, validatorRules: ["required"]
            }
        },
        {
            label: "File transactions:",
            inputProps: {
                id: inputTransactionIssuesFileIds.file,
                inputType: InputElementEnum.FILE, value: null, options: []
            },
            validations: {
                idValidation: inputTransactionIssuesFileIds.file, validatorRules: ["required"]
            }
        }
    ],
    columnstotal: 3,
    containerWidth: "100%"
}

export const formContainersTransactionIssuesFile: FormInputContainerPropsI[] = [inputsTransactionIssuesFile];