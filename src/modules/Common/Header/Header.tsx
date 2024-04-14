import s from './header.module.sass';
import { Text } from '../Text/Text';
import { AuthCard } from '../AuthCard/AuthCard';



// 
interface IProps {
    cs?: string,
}

export const Header = (
    { cs = '' }: IProps
): JSX.Element => {

    return (
        <div className={cs + ' ' + s['header']}>
            <Text cs={s['left']} label='Application' />
            <div className={s['right']}>
                <AuthCard accountName='My Login' />
            </div>
        </div>
    );
}
