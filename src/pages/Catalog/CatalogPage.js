import React, {useContext} from "react";
import Styles from './CatalogPage.module.css'
import CardComponent from '../../components/Card/Card'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { Context } from "../..";
import {Loader} from '../../components/Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';


export const CatalogPage = () => {
  const {firestore} = useContext(Context);
  const [products] = useCollectionData(
    firestore.collection('products')
  );

  const deleteProduct = async (e, id) => {
    e.stopPropagation();
    await firestore.collectionGroup('products').onSnapshot(sanpham => {
      sanpham.forEach((doc) => {
        if (id === doc.data().id) {
          firestore.collection('products').doc(doc.id).delete()
        }
      })
    })
    toast.success("Товар успешно удален!")
  }

  return (
    <div className={Styles.main}>
      <div className={Styles.content}>
        <ToastContainer 
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            closeOnClick 
        />
        <h1>Каталог</h1>
        {products ? <div className={Styles.table}>
          {products.map(element => 
            <CardComponent
              key={element.id}
              image={element.image}
              title={element.title}
              description={element.description}
              id={element.id}
              handleDelete={deleteProduct}
          />  
          )}
        </div> : <Loader/>}
      </div>
    </div>
  );
};
