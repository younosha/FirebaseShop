import React, {useState, useContext} from "react";
import Styles from './AddForm.module.css'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { Context } from "../..";

export const AddForm = () => {
    const {firestore} = useContext(Context);
    // const [mainFoto, setMainFoto] = useState(null);
    // const [fotos, setFotos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mainLink, setMainLink] = useState('');


    // const fileClick = () => {
    //     const input = document.getElementById('file');
    //     input.click();
    // }

    // const filesClick = () => {
    //     const input = document.getElementById('files');
    //     input.click();
    // }

    const sendProduct = async () => {
        firestore.collection('products').add({
            id: (new Date()).getTime(),
            image: mainLink,
            title: title,
            description: description
        })
        setTitle('');
        setDescription('');
        setMainLink('');
        toast.success("Товар успешно добавлен!");
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

        <div className={Styles.content}>
            {/* <div style={{display: 'flex', flexDirection: 'column', marginTop: '22px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h4 style={{margin: '0'}}>Выберите главную фотографию:</h4>
                <label htmlFor="contained-button-file">
                <input
                    accept="image/*" 
                    id="file" 
                    type="file" 
                    onChange={e => setMainFoto(e.target.files[0])}
                    style={{display: 'none'}}
                />
                <Button variant="contained" component="span" style={{marginLeft: '10px'}} onClick={fileClick}>
                    Загрузить
                </Button>
            </label>
            </div>
            <div>
                {mainFoto && mainFoto.name}
            </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '22px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <h4 style={{margin: '0'}}>Выберите остальные фотографии:</h4>
                <label htmlFor="contained-button-file">
                <input 
                    accept="image/*"
                    id="files" 
                    type="file" 
                    onChange={e => setFotos(Array.from(e.target.files))}
                    style={{display: 'none'}}
                    multiple
                />
                <Button variant="contained" component="span" style={{marginLeft: '10px'}} onClick={filesClick}>
                    Загрузить
                </Button>
                </label>
                </div>
                {fotos.map(foto => {
                    return <div key={foto.name}>{foto.name}</div>
                })}
            </div> */}
            <div>
                <h4>Главное фото:</h4>
                <TextField
                    id="outlined-multiline-static"
                    placeholder="Вставьте ссылку"
                    style={{width: '100%'}}
                    multiline
                    value={mainLink}
                    onChange={e => {
                        const link = e.target.value;
                        const linkArr = link.split('/');
                        setMainLink(`https://drive.google.com/uc?export=view&id=${linkArr[linkArr.length - 2]}`);
                    }}
                />
            </div>
            <div>
                <h4>Название:</h4>
                <TextField
                    id="outlined-multiline-static"
                    placeholder="Введите название..."
                    style={{width: '100%'}}
                    multiline
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <h4>Описание:</h4>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={5}
                    placeholder="Введите описание..."
                    style={{width: '100%'}}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <Button variant="contained" onClick={sendProduct} style={{marginTop: '20px'}}>Добавить</Button>
        </div>
        </div>
    </div>
  );
};
