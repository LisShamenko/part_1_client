import s from './card.module.sass';
import { Image } from '../Image/Image';
import { TextPair } from '../TextPair/TextPair';
import { Line } from '../Line/Line';



// 
interface IProps {
    cs?: string,
    avatar?: string,
    login: string,
    email: string,
    birth: string,
    gender: string,
}

export const Card = (
    {
        cs = '', avatar,
        login, email, birth, gender
    }: IProps
): JSX.Element => {

    return (
        <div className={cs + ' ' + s['card']}>
            <Image cs={s['image']} src={avatar} />
            <Line />
            <TextPair label='name: ' value={login} />
            <TextPair label='email: ' value={email} />
            <TextPair label='birth date: ' value={birth} />
            <TextPair label='gender: ' value={gender} />
        </div>
    );
}
