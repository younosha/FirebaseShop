import React from 'react';
import Styles from './Loader.module.css'

export const Loader = () => {
    return <div className={Styles.loaderWrapper}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
}