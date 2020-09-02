import React from 'react';

import {CatalogCardWrapper} from "./styled-components";

const CatalogItemCard = () => {
    return (
        <CatalogCardWrapper>
            <p>Сказочное заморское яство</p>
            <h1>Нямушка</h1>
            <h2>с рыбой</h2>
            <div>
                <span><strong>40</strong> порций</span>
                <span><strong>2</strong> мыши в подарок</span>
            </div>
            <span><strong>0,5</strong> кг</span>
        </CatalogCardWrapper>
    );
};

export default CatalogItemCard;