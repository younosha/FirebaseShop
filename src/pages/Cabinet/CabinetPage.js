import React from "react";
import Styles from './CabinetPage.module.css'
import {AddForm} from '../../components/AddForm/AddForm'
import { IsAdmin } from "../../utils/IsAdmin";
import { Loader } from "../../components/Loader/Loader";


export const CabinetPage = () => {
  const loading = IsAdmin().loading;
  const admin = IsAdmin().admin;

  return (
    <div className={Styles.main}>
      <div className={Styles.content}>
        <h1>Кабинет</h1>
        {loading ? <Loader/> : (admin ? <AddForm /> : <h1>Тебе тут делать ничего нельзя</h1>)}
      </div>
    </div>
  );
};
