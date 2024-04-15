import { useRef, useState } from "react";
// 
import s from './input-file.module.sass';



// 
interface IProps {
    cs?: string,
    id: string,
    label: string,
    required?: boolean,
    onSetFile?: (file: any) => void,
    onSetFilename?: (filename: string) => void,
}

export const InputFile = (
    {
        cs = '', id, label, required,
        onSetFile, onSetFilename,
    }: IProps
): JSX.Element => {

    const ref = useRef<HTMLImageElement>(null);
    const [filename, setFilename] = useState('file');

    const onChangeFile = (e: any) => {
        const selectedFile = e.target.files[0];
        if (ref.current) ref.current.title = selectedFile.name;
        if (onSetFile) onSetFile(selectedFile);

        setFilename(selectedFile.name);
        if (onSetFilename) onSetFilename(selectedFile.name);

        const reader = new FileReader();
        reader.onload = function (event) {
            try {
                // @ts-ignore
                ref.current.src = event.target.result;
            }
            catch (err) {
                console.log('--- Wrong file selected!');
            }
        };
        reader.readAsDataURL(selectedFile);
    }

    const onChangeFilename = (e: any) => {
        setFilename(e.target.value);
        if (onSetFilename) onSetFilename(e.target.value);
    }

    return (
        <div className={cs}>
            <label className={s['label-container']} htmlFor={id}>

                <input className={s['input-hide']} id={id} type="file"
                    accept="image/png, image/jpeg" required={required}
                    onChange={onChangeFile}
                />

                <span className={s['label-box']}>
                    {label}
                </span>

                <div className={s['icon-box']}>
                    <svg className={s['icon']}>
                        <use xlinkHref='/svg/action/symbols.svg#upload'></use>
                    </svg>
                </div>

                <input className={s['text-box']} type={"text"}
                    value={filename} onChange={onChangeFilename}
                />

                <div className={s['preview-box']}>
                    <div className={s['preview-margin']}>
                        <img className={s['preview']} ref={ref} />
                    </div>
                </div >
            </label>
        </div>
    );
}

