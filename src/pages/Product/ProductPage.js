import React, {useEffect, useState} from "react";
import Styles from './ProductPage.module.css'

export const ProductPage = () => {
    const [id, setId] = useState('');

    useEffect(() => {
        setId(window.location.pathname.split('/').reverse()[0]);
    }, []);

  return (
    <div className={Styles.main}>
      <div className={Styles.content}>
        <h1>Продукт id: {id}</h1>
      </div>
    </div>
  );
};
