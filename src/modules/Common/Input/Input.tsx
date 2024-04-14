import { ChangeEvent } from "react";
// 
import s from './input.module.sass';



// 
type InputType = "date" | "email" | "file" | "password" | "text";

interface IProps {
    cs?: string,
    id: string,
    type: InputType,
    label: string,
    value: string,
    required?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const Input = (
    {
        cs = '', id, type, label, value,
        required, onChange,
    }: IProps
): JSX.Element => {

    return (
        <div className={cs + ' ' + s['input']}>
            <label className={s['label']} htmlFor={id}>
                {label}
            </label>
            <input className={s['text']} id={id} type={type}
                value={value} onChange={onChange}
                required={required}
            />
        </div>
    );
}
