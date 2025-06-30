import styles from './Edit.module.scss';
import React, {useContext, useState} from 'react';
import {Context} from "../Context";
import {api} from '@database/api';
import {upload, remove} from '@lib/pinata';
import { RiDeleteBin3Fill } from "react-icons/ri";
import Button from '@components/buttons/Button';
import Round from '@components/buttons/Round';
import File from '@components/file/Style2';
import Flex from '@components/containers/Flex'

const Edit = () => {
    const {selectedData, setSelectedData, setData, data} = useContext(Context);

    const [loading, setLoading] = useState(false);

    const [moveIndex, setMoveIndex] = useState(-1);

    const [sure, setSure] = useState(false);

    const onMoveIndex = async (index: number) => {
        if(!selectedData) return;
        if(moveIndex === index) return setMoveIndex(-1);
        if(moveIndex === -1) return setMoveIndex(index);
        const images = [...selectedData.images];
        const first_value = selectedData.images[moveIndex];
        const second_value = selectedData.images[index];
        images[moveIndex] = second_value;
        images[index] = first_value;
        const updated = {...selectedData, images};
        setSelectedData(updated);
        await api.patch("/gallery", updated);
        setMoveIndex(-1);
    };

    const onUploadImage = async (blob: any) => {
        if(!selectedData) return;
        setLoading(true);
        const urls: string[] = [];
        for(let i = 0; i < blob.length; i++){
            const {url} = await upload(blob[i]);
            urls.push(url);
        };
        const images = [...selectedData.images, ...urls];
        const updated = {...selectedData, images}
        setSelectedData(updated);
        await api.patch("/gallery", updated);
        setData(state => state.map(el => el._id === selectedData._id ? updated : el));
        setLoading(false);
    };

    const onDeleteImage = async (url: string, index: number) => {
        if(!selectedData) return;
        setLoading(true);
        await remove(url);
        const images = selectedData.images.filter((el, i) => index !== i);
        const updated = {...selectedData, images}
        setSelectedData(updated);
        await api.patch("/gallery", updated);
        setData(state => state.map(el => el._id === selectedData._id ? updated : el));
        setLoading(false);
    };

    const onDeleteCategory = async() => {
        if(!selectedData) return;
        setLoading(true);
        await api.delete(`/gallery/${selectedData._id}`);
        for(const url of selectedData?.images){
            await remove(url);
        };
        const update = data.filter(el => el._id !== selectedData._id);
        setData(update);
        setSelectedData(null);
        setLoading(false);
        setSure(false);
    };

    return ( !selectedData ? <></> :
        <div className={styles.container}>

            {!sure
                ? <Button label1="Delete" onClick={() => setSure(true)} />
                : <Flex><Button label1="sure" color="red" onClick={onDeleteCategory} /><Button label1="cancel" onClick={() => setSure(false)} /></Flex>
            }

            {selectedData && 
                <File src={selectedData.images} onUpload={onUploadImage} id={"1"} />
            }

            <div className={styles.images}>
                {selectedData?.images.map((el, index) => 
                    <div className={`${styles.element} ${index===moveIndex?styles.selected:""}`} key={el}>
                        <Round label1={<RiDeleteBin3Fill/>} color="light" onClick={()=> onDeleteImage(el, index)} loading={loading} />
                        <img src={el} alt="wendy" onClick={() => onMoveIndex(index)} />
                    </div>    
                )}
            </div>
            
        </div>
    )
};

export default Edit;