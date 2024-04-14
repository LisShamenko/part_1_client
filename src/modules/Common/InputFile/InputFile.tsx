import { ChangeEvent, useRef } from "react";
// 
import s from './input-file.module.sass';



// 
interface IProps {
    cs?: string,
    id: string,
    label: string,
    required?: boolean,
}

export const InputFile = (
    {
        cs = '', id, label,
        required,
    }: IProps
): JSX.Element => {

    const ref = useRef<HTMLImageElement>(null);

    const onChange = (e: any) => {
        const selectedFile = e.target.files[0];
        const reader = new FileReader();

        if (ref.current) {
            ref.current.title = selectedFile.name;
        }

        reader.onload = function (event) {
            // @ts-ignore
            ref.current.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
    }

    return (
        <div className={cs}>
            <label className={s['label-container']} htmlFor={id}>

                <input className={s['input-hide']} id={id} type="file"
                    accept="image/png, image/jpeg"
                    onChange={onChange}
                />

                <span className={s['label-box']}>
                    {label}
                </span>

                <div className={s['icon-box']}>
                    <svg className={s['icon']}>
                        <use xlinkHref='/svg/action/symbols.svg#upload'></use>
                    </svg>
                </div>

                <input className={s['text-box']} type={"text"} value='' />

                <div className={s['preview-box']}>
                    <div className={s['preview-margin']}>
                        <img className={s['preview']} ref={ref} />
                    </div>
                </div >
            </label>
        </div>
    );
}

