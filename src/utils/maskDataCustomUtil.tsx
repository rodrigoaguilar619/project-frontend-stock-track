import { MaskDataCustomPropsI, MaskDataDownUpPropsI, MaskDataTableCellFillBooleanPropsI } from "@app/_types/utils/maskDataCustomUtil";

import { MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { MaskDataTypeEnum, TooltipIdCustomEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { maskData } from "lib-components-react/lib/utils/dataUtils/maskDataUtil";


export function formatUpDownColorNumber(value: number, maskDataProps?: MaskDataDownUpPropsI) {
    
    let valueFormatted = maskData(Math.abs(value), { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: maskDataProps });

    if (value === 0)
        return value;

    let classColor = "";
    let spanColor = "";

    if (value < 0) {
        classColor = "colorNumberDown";
        spanColor = "red";
    }
    else if (value > 0) {
        classColor = "colorNumberUp";
        spanColor = "green";
    }

    return <div style={{ display: "inline-block", alignItems: "center" }}>
        <img alt="" className={ maskDataProps?.addSymbolDownUp ? classColor : ""} style={{ marginRight: "1px", marginTop: "-2px" }} />
        <span style={{ color: spanColor }}>{valueFormatted}</span>
    </div>;
}

export function formatIssueAlertMovement(value: string) {

    if (value != null && value != undefined) {

        let classWarning = value.includes("BUY:") ? "iconWarning" : "iconWarningGreen";

        return <div style={{justifyContent: "center", display: "flex"}}>
                <div data-tooltip-id={TooltipIdCustomEnum.TOOLTIP_CUSTOM} data-tooltip-html={value} className={classWarning}></div>
            </div>;
    }
    else
        return null;
}

export function formatCellFillColorBoolean(value: string, maskDataProps?: MaskDataTableCellFillBooleanPropsI) {

    let valueFormated = value;

    let propertieBackGroundColor = {};

    if (value === "true" && maskDataProps !== undefined)
        propertieBackGroundColor = {backgroundColor: maskDataProps.color};
    
    return <div style={{ ...propertieBackGroundColor, position: "absolute", top: "0", left: "0", width: "100%", height: "100%",
        padding: "inherit"}}>{valueFormated}</div>
}


export function maskDataCustom(value: any, maskDataProps?: MaskDataCustomPropsI) {

    let valueFormated = value;
    let isMaskCustom = true;

    if (maskDataProps !== undefined && maskDataProps !== null) {

        if (valueFormated === null && maskDataProps.isShowNull)
            return "null";
        else if (valueFormated === null && !maskDataProps.isShowNull)
            return "";

        switch (maskDataProps.maskType) {

            case MaskDataTypeCustomEnum.DOWN_UP: {
                let maskProps = maskDataProps.maskDataCustomProps as MaskDataDownUpPropsI;
                valueFormated = formatUpDownColorNumber(value, maskProps);
                break;
            }
            case MaskDataTypeCustomEnum.ISSUE_ALERT_MOVEMENT: {
                valueFormated = formatIssueAlertMovement(value);
                break;
            }
            case MaskDataTypeCustomEnum.FILL_TABLE_CELL_BOOLEAN: {
                let maskProps = maskDataProps.maskDataCustomProps as MaskDataTableCellFillBooleanPropsI;
                valueFormated = formatCellFillColorBoolean(value, maskProps);
                break;
            }
            default: {
                isMaskCustom = false;
                break;
            }
        }
    }

    if (!isMaskCustom)
        valueFormated = maskData(value, maskDataProps);

    return valueFormated;
}