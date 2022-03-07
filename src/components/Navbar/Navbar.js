import React, { useContext } from "react";
import {Link} from "react-router-dom";
import Styles from './Navbar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Context } from "../..";
import firebase from "firebase/compat/app";
import {useAuthState} from 'react-firebase-hooks/auth'
import Button from '@mui/material/Button';

export default function NavBar () {
  const {auth} = useContext(Context);
  const [user, loading] = useAuthState(auth);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  }

    return (
      <div className={Styles.main}>
        <div className={Styles.content}>
          <Link to="/" className={Styles.link}>
            Главная
          </Link>
          <Link to="/catalog" className={Styles.link} style={{marginLeft: '20px'}}>
            Каталог
          </Link>
          {!loading && <div className={Styles.userBlock}>
            <Link to="/cabinet" className={Styles.link} style={{marginRight: '20px'}}>
              {user ? 
                <img src={user.photoURL} className={Styles.avatar} alt='avatar'/>
                :
                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
              }
            </Link>
            {!user ? 
              <Button variant="outlined" onClick={login} style={{color: 'white', border:'1px solid white'}}>Логин</Button>
              : 
              <Button variant="outlined" onClick={() => auth.signOut()} style={{color: 'white', border:'1px solid white'}}>Выйти</Button>
            }
            
          </div>}
        </div>
      </div>
    );
}
