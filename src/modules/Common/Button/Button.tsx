import { MouseEvent } from "react";
// 
import s from './button.module.sass';
import { Text } from '../Text/Text';



// 
type InputType = "blue" | "red";

interface IProps {
    cs?: string,
    label?: string,
    type?: InputType,
    disabled?: boolean,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
}

export const Button = (
    {
        cs = '', label = '', type = 'blue',
        disabled = false, onClick,
    }: IProps
): JSX.Element => {

    return (
        <button className={cs + ' ' + s['button'] + ' ' + s[`button-${type}`]}
            disabled={disabled} onClick={onClick}
        >
            <Text cs={s['label']} label={label} />
        </button>
    );
}
