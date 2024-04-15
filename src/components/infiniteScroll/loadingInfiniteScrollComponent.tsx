import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import InfiniteScroll from "react-infinite-scroll-component";

const LoadingInfiniteScrollComponent: React.FC<LoadingInfiniteScrollComponentPropsI> = (props) => {

    const renderLoading = () => {
        return <Card style={{ width: '100%' }}>
            <Card.Header style={{ textAlign: "center" }}><span style={{ paddingRight: "3px" }}>{props.totalItems == null ? "Start loading" : (props.itemsLength + " of " + props.totalItems)}</span><Spinner animation="border" size="sm" /></Card.Header>
        </Card>
    }

    let hasMore = props.totalItems == null || props.itemsLength < props.totalItems;

    return (<InfiniteScroll
        dataLength={props.itemsLength}
        next={hasMore ? props.executeFunction : null}
        hasMore={hasMore}
        scrollThreshold={0.8}
        loader={renderLoading()}
        endMessage={<div></div>}
        children={undefined}
    >
    </InfiniteScroll>)
}

export default LoadingInfiniteScrollComponent