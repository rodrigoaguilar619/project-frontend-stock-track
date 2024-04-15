import { FormInputContainerPropsI } from "lib-components-frontend-ts/lib/@types/components/formInputs/formInputs";
import { InputElementEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";

export const inputTransactionIssuesFileIds = {
    idBroker: "idBroker",
    file: "fileTransactionIssues"
}

const inputsTransactionIssuesFile: FormInputContainerPropsI = {
    inputColumns: [
        {
            id: inputTransactionIssuesFileIds.idBroker, label: "Broker:",
            inputProps: {
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputTransactionIssuesFileIds.idBroker, validatorRules: ["required"]
            }
        },
        {
            id: inputTransactionIssuesFileIds.file, label: "File transactions:",
            inputProps: {
                inputType: InputElementEnum.FILE, value: null, updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputTransactionIssuesFileIds.file, validatorRules: ["required"]
            }
        }
    ],
    columnstotal: 2,
    containerWidth: "100%"
}

export const formContainersTransactionIssuesFile: FormInputContainerPropsI[] = [inputsTransactionIssuesFile];