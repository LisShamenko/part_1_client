import { NavLink } from 'react-router-dom';
//
import s from './link.module.sass';



// 
interface IProps {
    cs?: string,
    label: string,
    to: string,
}

export const Link = (
    { cs = '', label, to }: IProps
): JSX.Element => {

    return (
        <div className={cs + ' ' + s['link-box']}>
            <NavLink className={s['link']} to={to}>{label}</NavLink>
        </div>
    );
}
