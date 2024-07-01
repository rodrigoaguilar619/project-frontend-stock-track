import { FormInputContainerPropsI } from "lib-components-react/lib/@types/components/formInputs/formInputs";
import { InputElementEnum } from "lib-components-react/lib/catalogs/enumCatalog";

export const inputTransactionIssuesFileIds = {
    idBroker: "idBroker",
    file: "fileTransactionIssues"
}

const inputsTransactionIssuesFile: FormInputContainerPropsI = {
    inputColumns: [
        {
            label: "Broker:",
            inputProps: {
                id: inputTransactionIssuesFileIds.idBroker,
                inputType: InputElementEnum.SELECT, value: '', updateValue: () => { }, options: []
            },
            validations: {
                idValidation: inputTransactionIssuesFileIds.idBroker, validatorRules: ["required"]
            }
        },
        {
            label: "File transactions:",
            inputProps: {
                id: inputTransactionIssuesFileIds.file,
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