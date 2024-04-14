import s from './text-pair.module.sass';
import { Text } from '../Text/Text';



// 
interface IProps {
    cs?: string,
    label?: string,
    value?: string,
}

export const TextPair = (
    { cs = '', label = '', value = '' }: IProps
): JSX.Element => {

    return (
        <div className={cs + ' ' + s['text-pair']}>
            <Text cs={s['label']} label={label} />
            <Text cs={s['text']} label={value} />
        </div>
    );
}
