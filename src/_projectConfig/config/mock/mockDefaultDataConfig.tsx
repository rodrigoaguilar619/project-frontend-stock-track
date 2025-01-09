import { inputIssueIds } from "@app/modules/issues/issueUpdate/issueUpdateModuleConfig";
import { inputIssuesAddMainIds, inputIssuesAddMultipleIds } from "@app/modules/issues/issuesAddMultiple/issuesAddMultipleModuleConfig";
import { inputIssueManagerIds } from "@app/modules/issuesManager/issueManagerUpdate/issueManagerUpdateModuleConfig";
import { inputIssueMovementBuyIds, inputIssueMovementIds } from "@app/modules/issuesMovements/issueMovementAddEdit/issueMovementAddEditModuleConfig";

export const setDevUpdateIssueDefaultData = (setFormData: Function, formData: Record<string, any>) => {
    setFormData({
        ...formData,
        [inputIssueIds.idIssue]: 2,
        [inputIssueIds.description]: "APPLE 2",
        [inputIssueIds.initials]: "AAPL",
        [inputIssueIds.idIndex]: true,
        [inputIssueIds.idSector]: 1,
        [inputIssueIds.idTypeStock]: 1,
        [inputIssueIds.idStatusIssue]: 1,
        [inputIssueIds.historicalStartDate]: 1414786400000,
    });
};

export const setDevAddMultipleIssuesDefaultData = (setFormMainData: Function, setFormMultipleData: Function, formMainData: Record<string, any>, formMultipleData: Record<string, any>[]) => {
    setFormMainData({
        ...formMainData,
        [inputIssuesAddMainIds.idTypeStock]: 1,
        [inputIssuesAddMainIds.idStatusIssue]: 1,
        [inputIssuesAddMainIds.historicalStartDate]: 1414786400000,
    });

    setFormMultipleData([
        {
            [inputIssuesAddMultipleIds.description]: "APPLE 2",
            [inputIssuesAddMultipleIds.initials]: "AAPL",
            [inputIssuesAddMultipleIds.idIndex]: 1,
            [inputIssuesAddMultipleIds.idSector]: 1,
        },
        {
            [inputIssuesAddMultipleIds.description]: "Adobe Inc.",
            [inputIssuesAddMultipleIds.initials]: "ADBE",
            [inputIssuesAddMultipleIds.idIndex]: 2,
            [inputIssuesAddMultipleIds.idSector]: 2,
        }
    ]);
};

export const setDevUpdateMangerIssueDefaultData = (setFormData: Function, formData: Record<string, any>) => {
    setFormData({
        ...formData,
        [inputIssueManagerIds.idStatusIssueQuick]: 1,
        [inputIssueManagerIds.idStatusIssueTrading]: 1,
        [inputIssueManagerIds.isInvest]: true,
        [inputIssueManagerIds.trackBuyPrice]: 2.0,
        [inputIssueManagerIds.trackSellPrice]: 3.0,
        [inputIssueManagerIds.fairValue]: 1.1
    });
};

export const setDevAddMultipleIssueMovementDefaultData = (setFormMainData: Function, setFormMultipleData: Function, formMainData: Record<string, any>, formMultipleData: Record<string, any>[]) => {
    setFormMainData({
        ...formMainData,
        [inputIssueMovementIds.idBroker]: 2,
        [inputIssueMovementIds.idStatus]: 2,
        [inputIssueMovementIds.issue]: "AON",
        [inputIssueMovementIds.priceMovement]: 1.1,
    });

    setFormMultipleData([
        {
            [inputIssueMovementBuyIds.buyTransactionNumber]: 1,
            [inputIssueMovementBuyIds.buyDate]: 1414786400000,
            [inputIssueMovementBuyIds.buyPrice]: 1.1,
            [inputIssueMovementBuyIds.sellDate]: 1418786400000,
            [inputIssueMovementBuyIds.sellPrice]: 2.2
        },
        {
            [inputIssueMovementBuyIds.buyTransactionNumber]: 2,
            [inputIssueMovementBuyIds.buyDate]: 1314786400000,
            [inputIssueMovementBuyIds.buyPrice]: 11.1,
            [inputIssueMovementBuyIds.sellDate]: 1318786400000,
            [inputIssueMovementBuyIds.sellPrice]: 22.2
        }
    ]);
};