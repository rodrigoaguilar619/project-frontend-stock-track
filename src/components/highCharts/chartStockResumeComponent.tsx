import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { MaskDataTypeCustomEnum } from '@app/catalogs/enumCatalog';
import { calculateGainLossPercentage } from '@app/utils/calculatorUtil';
import { maskDataCustom } from '@app/utils/maskDataCustomUtil';
import { MaskDataTypeEnum } from 'lib-components-react/lib/catalogs/enumCatalog';
import { compareDatesWithoutTime, dataWithValue } from 'lib-components-react/lib/utils/dataUtils/dataUtil';
import { maskData } from 'lib-components-react/lib/utils/dataUtils/maskDataUtil';
import { formatDecimalsLimit, formatNumberDecimal } from 'lib-components-react/lib/utils/formatUtils/formatNumericUtil';
import ChartStockComponent from './chartStockComponent';

let styleColumn = {
    paddingRight: "unset",
    paddingLeft: "unset",
    paddingTop: "unset",
    paddingBottom: "unset",
    marginTop: "auto",
    marginBottom: "auto"
}

let styleRow = {
    height: "20px"
}

const ChartStockResumeComponent: React.FC<ChartStockResumeComponentPropsI> = (props) => {

    const stockData = props.stockChartData;

    const renderChartStockComponent = () => {

        if (stockData === undefined || stockData === null || stockData.length === 0) {
            return <div style={{ textAlign: "center" }}><h3>No data retreived</h3></div>;
        }
        else
            return <ChartStockComponent
                chartData={stockData}
                chartFlags={props.stockTransactionBuys}
                rangeSelector={4}
                trackBuyPrice={props.stockData.trackBuyPrice}
                trackSellPrice={props.stockData.trackSellPrice}
                trackFairValue={props.stockData.fairValue}
            />
    }

    let priceToShow = props.stockData.previousClosePrice;
    let priceDayToShow = props.stockData.previousClosePrice;
    let isCurrentPrice = false;

    if (props.stockData.currentPriceDate !== undefined && props.stockData.currentPriceDate !== null) {
        isCurrentPrice = compareDatesWithoutTime(new Date(props.stockData.currentPriceDate), new Date());
        priceToShow = props.stockData.currentPrice;
        priceDayToShow = props.stockData.currentPriceDate;
    }

    let priceDayDownUp = 0;
    let fairValueDownUp = null;

    if (props.stockData.currentPriceDate !== undefined && props.stockData.currentPriceDate !== null) {
        priceDayDownUp = calculateGainLossPercentage(props.stockData.previousClosePrice ?? 0, props.stockData.currentPrice ?? 0);
        
        if (Number.isNaN(priceDayDownUp) || !isFinite(priceDayDownUp)) 
            priceDayDownUp = 0;
        else {
            if (!dataWithValue(priceDayDownUp)) {
                priceDayDownUp = 0;
            }
            priceDayDownUp = formatDecimalsLimit(priceDayDownUp, 2);
        }
    }

    if (props.stockData.fairValue !== undefined && priceToShow !== undefined) {
        fairValueDownUp = calculateGainLossPercentage(props.stockData.fairValue, priceToShow);
        
        if (!Number.isNaN(fairValueDownUp) && !isFinite(fairValueDownUp)) {
            if (dataWithValue(priceDayDownUp)) {
                fairValueDownUp = formatDecimalsLimit(priceDayDownUp, 1);
            } else {
                fairValueDownUp = formatDecimalsLimit(0, 1);
            }
        } else
            fairValueDownUp = undefined;
    }
    
    return (<div>
        <Container className={"customBootstrapRow"} style={{ backgroundColor: "white", borderBottom: "0.01rem solid black", maxWidth: "100%" }}>
            <Row style={styleRow}>
                <Col title="Fair value" style={{ textAlign: "center", fontSize: "9px", ...styleColumn }}>
                    <b style={{ fontSize: "12px", color: "orange" }}> FV: {dataWithValue(props.stockData.fairValue) ? formatNumberDecimal(props.stockData.fairValue, 1, false, false) : "---"}</b>
                </Col>
                <Col title={isCurrentPrice ? "Current price" : "Last price historical record"} style={{ textAlign: "center", ...styleColumn }}>
                    <b style={{ fontSize: "12px" }}> {isCurrentPrice ? "CP:" : "LP:"} {dataWithValue(priceToShow) ? formatNumberDecimal(priceToShow, 1, false, false) : "---"}</b>
                </Col>
                <Col title="Yield. Difference of current price over price of previous day" style={{ textAlign: "center", ...styleColumn }}>
                    <b style={{ fontSize: "12px" }}> {"Yield:"} {priceDayDownUp == 0 ? "---" : maskDataCustom(priceDayDownUp, { maskType: MaskDataTypeCustomEnum.DOWN_UP, maskDataCustomProps: { addSymbolDownUp: true } })}</b>
                </Col>
                <Col style={{ textAlign: "center" }} xs={4}>
                    <b style={{ fontSize: "12px" }}>Issue: {props.stockData.issueName}</b>
                </Col>
            </Row>
            <Row style={styleRow}>
                <Col title="Date of current price" style={{ textAlign: "center", ...styleColumn }}>
                    <b style={{ fontSize: "12px" }}>{maskData(priceDayToShow, { maskType: MaskDataTypeEnum.DATE, maskDataProps: { format: "MM-DD hh:mm" } })}</b>
                </Col>
                <Col title="Difference of current price over fair value" style={{ textAlign: "center", ...styleColumn }}>
                    <b style={{ fontSize: "12px" }}>≈FV: {fairValueDownUp === undefined ? "---------" : maskDataCustom(fairValueDownUp, { maskType: MaskDataTypeCustomEnum.DOWN_UP, maskDataCustomProps: { addSymbolDownUp: true } })}</b>
                </Col>
                <Col style={{ textAlign: "center", fontSize: "15px" }}>
                </Col>
                <Col style={{ textAlign: "center" }} xs={4}>
                </Col>
            </Row>
        </Container>
        {renderChartStockComponent()}
    </div>)
}

export default ChartStockResumeComponent