import { PropsWithChildren, FormEvent } from "react";
//
import s from './form.module.sass';
import { Text } from '../Text/Text';
import { Line } from "../Line/Line";



// 
interface IProps {
    cs?: string,
    name?: string,
    title?: string,
    action: string,
    onSubmit?: (e: FormEvent<HTMLFormElement>) => boolean,
}

export const Form = (
    {
        children, cs = '', name = '', title = '',
        action, onSubmit,
    }: PropsWithChildren<IProps>
): JSX.Element => {

    return (
        <form className={cs + ' ' + s['form']} autoComplete='on'
            name={name} action={action} onSubmit={onSubmit}
        >
            {title && (<>
                <Text cs={s['title']} label={title} />
                <Line type='hard' />
            </>)}
            {children}
        </form>
    );
}
