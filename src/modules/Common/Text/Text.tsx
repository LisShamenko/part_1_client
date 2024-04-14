import s from './text.module.sass';



// 
interface IProps {
    cs?: string,
    label?: string,
}

export const Text = (
    {
        cs = '', label = '',
    }: IProps
): JSX.Element => {

    return (
        <div className={cs + ' ' + s['text']}>
            {label}
        </div>
    );
}
