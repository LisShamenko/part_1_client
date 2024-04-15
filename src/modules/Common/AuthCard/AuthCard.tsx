import { useQuery } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
// 
import s from './auth-card.module.sass';
import { Text } from '../Text/Text';
import { Image } from '../Image/Image';
import { getAccount } from '../../../api/accountsAPI';
import { useLogout } from '../../../stores/auth.store';
import { ButtonExit } from '../Button/ButtonExit';
import store from '../../../stores/root.store';



// 
interface IProps {
    cs?: string,
}

export const AuthCard = observer(
    ({ cs = '' }: IProps): JSX.Element => {

        const logout = useLogout();

        const { refetch } = useQuery({
            queryKey: ['account'],
            queryFn: async () => {
                if (store.authStore.token) {
                    try {
                        const result = await getAccount(store.authStore.token);
                        store.authStore.setAccount(result);
                        return result;
                    }
                    catch (err: any) {
                        if (err?.response?.status === 401) logout();
                    }
                }
                return null;
            },
        });

        if (!store.authStore.avatar) {
            refetch();
        }

        // 
        return (
            <div className={cs + ' ' + s['auth-card']}>
                <Image cs={s['image']} src={store.authStore.avatar} />

                <div className={s['auth-box']}>

                    <div className={s['login-box']}>
                        <Text cs={s['login']} label={store.authStore.login} />
                    </div>

                    <div className={s['buttons-box']}>
                        <ButtonExit />
                    </div>
                </div>
            </div>
        );
    }
);