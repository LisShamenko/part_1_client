import { PropsWithChildren } from "react";
import { observer } from "mobx-react-lite";
// 
import s from './header.module.sass';
import { Text } from '../Text/Text';
import { AuthCard } from '../AuthCard/AuthCard';
import store from '../../../stores/root.store';



// 
interface IProps {
    cs?: string,
}

export const Header = observer(
    (
        { children, cs = '' }: PropsWithChildren<IProps>
    ): JSX.Element => {

        return (
            <div className={cs + ' ' + s['header']}>
                <div className={s['left']}>
                    <Text cs={s['label']} label='Application' />
                </div>

                {children}

                <div className={s['right']}>
                    {store.authStore.token && (
                        <AuthCard />
                    )}
                </div>
            </div>
        );
    }
)
