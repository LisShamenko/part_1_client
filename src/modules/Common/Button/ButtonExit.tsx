import { useMutation } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import { MouseEvent } from 'react';
// 
import { Button } from '../Button/Button';
import { accountDeleteOrExit } from '../../../api/accountsAPI';
import { useLogout } from '../../../stores/auth.store';
import store from '../../../stores/root.store';



// 
interface IProps {
    cs?: string,
    isDelete?: boolean,
}

export const ButtonExit = observer(
    ({ cs = '', isDelete = false }: IProps): JSX.Element => {

        const logout = useLogout();

        const mutation = useMutation({
            mutationFn: async () => {
                if (store.authStore.token) {
                    try {
                        const result = await accountDeleteOrExit(
                            isDelete, store.authStore.token
                        );
                        if (result === 'OK') logout();
                    }
                    catch (err: any) {
                        logout();
                    }
                }
                return null;
            },
        })

        const onClick = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            mutation.mutate();
        }

        return (isDelete
            ? <Button cs={cs} label='delete' type='red' onClick={onClick} />
            : <Button cs={cs} label='exit' onClick={onClick} />
        );
    }
);