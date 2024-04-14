import s from './image.module.sass';



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

    return (
        <img className={cs + ' ' + s['image']}
            alt={label} src={src}
        />
    );
}
