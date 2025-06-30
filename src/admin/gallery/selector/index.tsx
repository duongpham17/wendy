import styles from './Selector.module.scss';
import React, {useContext, useState} from 'react';
import {Context} from "../Context";
import {api} from '@database/api';

import useForm from '@hooks/useForm';
import Cover from '@components/cover/Style3';
import Input from '@components/inputs/Input';
import Button from '@components/buttons/Button';

interface Props {
    create: boolean,
    setCreate: React.Dispatch<React.SetStateAction<boolean>>
};

const Selector = () => {
    const {data, selectedData, setSelectedData} = useContext(Context);

    const [create, setCreate] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.element}>
                <button className={styles.createBtn} onClick={()=>setCreate(true)}>+</button>
            </div>  
            {data.map(el => 
                <div className={styles.element} key={el._id as string}>
                    <button className={selectedData?._id === el._id ? styles.selected : ""} onClick={() => setSelectedData(el)}>{el.type.slice(0, 9)}</button>
                </div>    
            )}

            {create && <Create create={create} setCreate={setCreate} />}
        </div>
    )
};

const Create = ({setCreate, create}:Props) => {

    const {setData} = useContext(Context);

    const initialState = { type: "", images: [], createdAt: Date.now()};

    const {values, onChange, onSubmit, edited, loading, onClear} = useForm(initialState, callback);

    async function callback(){
        try{
            const res = await api.post("/gallery", values);
            setData(state => [...state, res.data.data])
            setCreate(false);
            onClear();
        } catch(err){
            console.log(err);
        }
    };

    return (
        <Cover onClose={() => setCreate(false)} open={create}>
            <form onSubmit={onSubmit}>
                <Input label1={"Gallery Category"} value={values?.type} name="type" onChange={onChange}/>
                {edited && <Button type="submit" label1="update" color="blue" loading={loading}/>}
            </form>
        </Cover>
    )
};

export default Selector;