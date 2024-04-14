import s from './auth-card.module.sass';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { Image } from '../Image/Image';



// 
interface IProps {
    cs?: string,
    accountName: string,
}

export const AuthCard = (
    {
        cs = '',
        accountName,
    }: IProps
): JSX.Element => {

    const test = "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg";

    return (
        <div className={cs + ' ' + s['auth-card']}>
            <Image cs={s['image']} src={test} />

            <div className={s['auth-box']}>

                <div className={s['login-box']}>
                    <Text cs={s['login']} label={accountName} />
                </div>

                <div className={s['buttons-box']}>
                    <Button label='exit' />
                    <Button label='delete' />
                </div>
            </div>
        </div>
    );
}
