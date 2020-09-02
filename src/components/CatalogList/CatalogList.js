import React from 'react';
import {Row, Col} from "react-bootstrap";

import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = () => {
    return (
        <Row>
            <Col md={6} xl={4}>
                <CatalogItem/>
            </Col>
            <Col md={6} xl={4}>
                <CatalogItem/>
            </Col>
            <Col md={6} xl={4}>
                <CatalogItem/>
            </Col>
        </Row>
    );
};

export default CatalogList;