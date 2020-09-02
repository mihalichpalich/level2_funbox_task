import React from 'react';

import CatalogItemCard from "../CatalogItemCard/CatalogItemCard";
import CatalogItemComment from "../CatalogItemComment/CatalogItemComment";
import {CatalogItemWrapper} from "./styled-components";

const CatalogItem = () => {
    return (
        <CatalogItemWrapper>
            <CatalogItemCard/>
            <CatalogItemComment/>
        </CatalogItemWrapper>
    );
};

export default CatalogItem;