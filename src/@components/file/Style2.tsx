import styles from './Style2.module.scss';

interface Props {
    id: string,
    src: string[],
    onUpload?: (blob: any) => Promise<void>;
}

const Style1 = ({src, onUpload, id}: Props) => {
    
    const onChangeFile = async (e: any): Promise<void> => {
        e.preventDefault();
        const file = e.target.files ? e.target.files : e.dataTransfer.files;
        const objectURLs: string[] = [];
        const files: any[] = [];
        for(let i = 0; i < file.length; i++){
            objectURLs.push(URL.createObjectURL(file[i]));
            files.push(file[i]);
        }
        if(onUpload) await onUpload(files);
    };

    return (
        <div className={styles.container}>

            <div className={styles.upload} onDragOver={(e) => e.preventDefault()} onDrop={onChangeFile}>
                <label htmlFor={`myfile${id}`}>Upload images <br/> or <br/> drag and drop</label>
                <input type="file" id={`myfile${id}`} accept='image/*' className={styles.inputFile} onChange={onChangeFile}/>
            </div>

        </div>
    )
}

export default Style1