import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
// 
import s from './people-page.module.sass';
import { Header } from '../Common/Header/Header';
import { Card } from '../Common/Card/Card';
import { getAccounts } from '../../api/accountsAPI';
import { useLogout } from '../../stores/auth.store';
import { Link } from '../Common/Link/Link';
import store from '../../stores/root.store';



// 
export const PeoplePage = observer(
    (): JSX.Element => {

        const logout = useLogout();

        const { refetch } = useQuery({
            queryKey: ['accounts'],
            queryFn: async () => {
                if (store.authStore.token) {
                    try {
                        const result = await getAccounts(store.authStore.token);
                        store.authStore.setAccounts(result);
                        return result;
                    }
                    catch (err: any) {
                        console.log('--- ERROR: getAccounts --- ', err);
                    }
                }
                return logout();
            },
        });

        useEffect(() => {
            refetch();
        }, []);

        return (<>
            <Header>
                <Link label="auth" to=".." />
                <Link label="account" to="../account" />
            </Header>

            <div className={s['people-page']}>
                {store.authStore.accounts && (
                    store.authStore.accounts.map((c, i) => (
                        <Card key={i} cs={s['card']}
                            avatar={c.avatar}
                            login={c.name}
                            email={c.email}
                            birth={c.birth}
                            gender={c.gender}
                        />
                    ))
                )}
                {/* 
                <Card cs={s['card']}
                    avatar='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                    login='Other Account'
                    email='other@mail.ru'
                    birth='1290.34.12'
                    gender='male/female'
                />
                <Card cs={s['card']}
                    avatar='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                    login='Other Account'
                    email='other@mail.ru'
                    birth='1290.34.12'
                    gender='male/female'
                />
                <Card cs={s['card']}
                    avatar='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                    login='Other Account'
                    email='other@mail.ru'
                    birth='1290.34.12'
                    gender='male/female'
                /> 
                */}
            </div >
        </>);
    }
);