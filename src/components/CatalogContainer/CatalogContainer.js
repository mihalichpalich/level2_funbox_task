import React from 'react';

import CatalogList from "../CatalogList/CatalogList";

const CatalogContainer = () => {
    return (
        <div>
            <h1>Ты сегодня покормил кота?</h1>
            <CatalogList/>
        </div>
    );
};

export default CatalogContainer;