import { PropsWithChildren } from "react";
//
import s from './form.module.sass';
import { Line } from "../Line/Line";



// 
interface IProps {
    cs?: string,
}

export const ButtonBox = (
    {
        children, cs = '',
    }: PropsWithChildren<IProps>
): JSX.Element => {

    return (<>
        <Line type='hard' />
        <div className={cs + ' ' + s['button-box']}>
            {children}
        </div>
    </>);
}
