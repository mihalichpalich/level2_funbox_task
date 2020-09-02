import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import CatalogList from "../CatalogList/CatalogList";
import {CatalogTitle} from './styled-components';

const CatalogContainer = () => {
    return (
        <div >
            <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
                <Row>
                    <Col>
                        <CatalogTitle>Ты сегодня покормил кота?</CatalogTitle>
                    </Col>
                </Row>

                <CatalogList/>
            </Container>
        </div>
    );
};

export default CatalogContainer;