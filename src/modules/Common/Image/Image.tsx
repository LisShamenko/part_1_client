import s from './image.module.sass';
import { baseURL } from '../../../api/accountsAPI';



// 
interface IProps {
    cs?: string,
    label?: string,
    src?: string,
}

export const Image = (
    {
        cs = '', label = '', src = '',
    }: IProps
): JSX.Element => {

    const getSrc = () => {
        if (src) {
            const url = new URL(src, baseURL);
            return url.toString();
        }
        return '';
    }

    return (
        <img className={cs + ' ' + s['image']}
            alt={label} src={getSrc()}
        />
    );
}
