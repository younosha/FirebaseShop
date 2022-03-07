import { useContext } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from "../index";

export const IsAdmin = () => {
    const {auth} = useContext(Context);
    const [user, loading] = useAuthState(auth);

    return {
        admin: user && user.email === 'roma1997sport@mail.ru',
        loading
    }
}