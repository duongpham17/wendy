import styles from './Edit.module.scss';
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../Context";
import {api} from '@database/api';
import useForm from '@hooks/useForm';
import Button from '@components/buttons/Button';
import Input from '@components/inputs/Input';
import Cover from '@components/cover/Style3';
import Line from '@components/line/Style1';
import Flex from '@components/containers/Flex';

interface Props {
    edit: {type: string, index: number} | null, 
    setEdit:React.Dispatch<React.SetStateAction<{type: string, index: number} | null>>
}

const Edit = () => {
    const {selectedData, setSelectedData, setData, data} = useContext(Context);

    const [edit, setEdit] = useState<Props["edit"]>(null);

    const [moveIndex, setMoveIndex] = useState(-1);

    const [sure, setSure] = useState(false);

    const onMoveIndex = async (index: number) => {
        if(!selectedData) return;
        if(moveIndex === index) return setMoveIndex(-1);
        if(moveIndex === -1) return setMoveIndex(index);
        const prices = [...selectedData.prices];
        const first_value = selectedData.prices[moveIndex];
        const second_value = selectedData.prices[index];
        prices[moveIndex] = second_value;
        prices[index] = first_value;
        const updated = {...selectedData, prices};
        setSelectedData(updated);
        await api.patch("/prices", updated);
        setMoveIndex(-1);
    };

    const onDeletePrice = async() => {
        if(!selectedData) return;
        await api.delete(`/prices/${selectedData._id}`);
        const update = data.filter(el => el._id !== selectedData._id);
        setData(update);
        setSelectedData(null);
        setSure(false);
    };

    return (!selectedData ? <></> :
        <div className={styles.container}>
            {!sure
                ? <Button label1="Delete" onClick={() => setSure(true)} />
                : <Flex><Button label1="sure" color="red" onClick={onDeletePrice} /><Button label1="cancel" onClick={() => setSure(false)} /></Flex>
            }

            <Line />

            <Header />
            
            <Line />

            <Create />

            <Line />

            {selectedData.prices.map((el, index) => 
                <div className={`${styles.element} ${index===moveIndex?styles.selected:""}`} key={el}>
                    <button onClick={() => onMoveIndex(index)}>{index+1}.</button>
                    <button onClick={() => setEdit({type: el, index})}>{el}</button>
                </div>    
            )}

            {edit && <Selected edit={edit} setEdit={setEdit} />}
            
        </div>
    )
};

const Header = () => {

    const {selectedData, setSelectedData} = useContext(Context);

    const [edit, setEdit] = useState(false);

    const {values, onChange, edited, loading, onSubmit, setValues} = useForm(selectedData, callback);
    
    async function callback(){
        if(!edited) return;
        const updated = values;
        await api.patch("/prices", updated);
        setSelectedData(updated);
    };

    useEffect(() => {
        if (selectedData) {
            setValues(selectedData);
        }
    }, [selectedData, setValues]);
    
    return (
        <div className={styles.header}>
            <button onClick={() => setEdit(true)}>{selectedData?.type}</button>
            {edit &&
                <Cover onClose={() => setEdit(false)} open={edit?true:false}>
                    <form onSubmit={onSubmit}>
                        <Input value={values?.type} name="type" onChange={onChange}/>
                        {edited && <Button type="submit" label1="update" color="blue" loading={loading}/>}
                    </form>
                </Cover>
            }
        </div>
    )
}

const Create = () => {

    const {selectedData, setSelectedData} = useContext(Context);

    const initialState = { type: "" };

    const {values, onChange, edited, loading, onSubmit, onClear} = useForm(initialState, callback);

    async function callback(){
        if(!selectedData || !values) return;
        const prices = [...selectedData.prices, values.type];
        const updated = {...selectedData, prices};
        await api.patch("/prices", updated);
        setSelectedData(updated)
        onClear();
    };

    return (
        <form onSubmit={onSubmit}>
            <Input label1={"New Price"} value={values?.type} name="type" onChange={onChange}/>
            {edited && <Button type="submit" label1="create" color="blue" loading={loading}/>}
        </form>
    )
};

const Selected = ({edit, setEdit}: Props) => {

    const {selectedData, setSelectedData, setData} = useContext(Context);

    const [sure, setSure] = useState(false);

    const initialState = edit;

    const {values, onChange, edited, loading, onSubmit} = useForm(initialState, callback);
    
    async function callback(){
        if(!selectedData || !edit || !values) return;
        const prices = selectedData.prices.map((_, index) => index === edit.index ? values.type : _ );
        const updated = {...selectedData, prices};
        setSelectedData(updated);
        await api.patch("/prices", updated);
        setData(state => state.map(el => el._id === selectedData._id ? updated : el));
        setEdit(null);
    };

    const onDelete = async () => {
        if(!selectedData || !edit || !values) return;
        const prices = selectedData.prices.filter((_, index) => index !== edit.index);
        const updated = {...selectedData, prices};
        setSelectedData(updated);
        await api.patch("/prices", updated);
        setEdit(null);
    };

    return (
        <Cover onClose={() => setEdit(null)} open={edit?true:false}>
            <form onSubmit={onSubmit}>
                {!sure 
                    ? <Button onClick={() => setSure(true)} label1="delete" />
                    : <Flex><Button label1="sure" onClick={onDelete} color="red"/><Button label1="cancel" onClick={() => setSure(false)}/></Flex>
                }
                <Line />
                <Input value={values?.type} name="type" onChange={onChange}/>
                {edited && <Button type="submit" label1="update" color="blue" loading={loading}/>}
            </form>
        </Cover>
    )
};

export default Edit;