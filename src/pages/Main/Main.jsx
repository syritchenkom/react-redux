import React from 'react';

import './style.css';
import { PageAnimated } from '../../components'

export const Main = () => {
 
    return (
        <PageAnimated>
            <div className="main">
                <div className="row">
                <div className="block block-right"></div>
            </div>
            <div className="row">
                <div className="block block-left"></div>
                <div className="block block-right"></div>
            </div>
            </div>
        </PageAnimated>
    )
}