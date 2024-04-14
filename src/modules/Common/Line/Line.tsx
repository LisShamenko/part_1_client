import s from './line.module.sass';



// 
type InputType = "hard" | "soft";

interface IProps {
    cs?: string,
    type?: InputType,
}

export const Line = (
    { cs = '', type = 'soft' }: IProps
): JSX.Element => {

    return (
        <div className={cs + ' ' + s[`line-${type}`]}></div>
    );
}
