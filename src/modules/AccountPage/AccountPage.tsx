import { useState, MouseEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
// 
import s from './account-page.module.sass';
import { Header } from '../Common/Header/Header';
import { Input } from '../Common/Input/Input';
import { InputFile } from '../Common/InputFile/InputFile';
import { Form } from '../Common/Form/Form';
import { Button } from '../Common/Button/Button';
import { ButtonBox } from '../Common/Form/ButtonBox';
import { ButtonExit } from '../Common/Button/ButtonExit';
import { Link } from '../Common/Link/Link';
import { UpdateData, accountUpdate } from '../../api/accountsAPI';
import { useLogout } from '../../stores/auth.store';
import store from '../../stores/root.store';



// 
export const AccountPage = observer((): JSX.Element => {

    const [login, setLogin] = useState(store.authStore.login);
    const [oldPassword, setOldPassword] = useState('password');
    const [newPassword, setNewPassword] = useState('password');
    const [filename, setFilename] = useState(store.authStore.avatar);
    const [file, setFile] = useState(null);

    const logout = useLogout();

    const mutation = useMutation({
        mutationFn: async (data: UpdateData) => {
            if (store.authStore.token) {
                try {
                    const result = await accountUpdate(store.authStore.token, data);
                    store.authStore.setAccount(result);
                    return result;
                }
                catch (err: any) {
                    if (err?.response?.status === 401) logout();
                }
            }
        },
    })

    const isValidate = () => {
        if (!login || !oldPassword || !newPassword) return false;
        if (!file) return false;
        return true;
    }

    const onClickUpdate = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isValidate()) {
            mutation.mutate({
                login, oldPassword, newPassword, filename, file,
            });
        }
    }

    return (<>
        <Header>
            <Link label="auth" to=".." />
            <Link label="people" to="../people" />
        </Header>

        <div className={s['people-page']}>
            <div className={s['item']}>
                <Form cs={s['right-form']} name='form2' action=''
                    title='editing form'
                    onSubmit={(e) => false}
                >
                    <Input cs={s['input']} id='name' label='name: '
                        type='text' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input cs={s['input']} id='old_password' label='old password: '
                        type='password' required={true} value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <Input cs={s['input']} id='new_password' label='new password: '
                        type='password' required={true} value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <InputFile cs={s['input']} id='file' label='file: '
                        required={true} onSetFile={(f) => setFile(f)}
                        onSetFilename={(fn) => setFilename(fn)}
                    />

                    <ButtonBox>
                        <Button label='update' onClick={onClickUpdate} />
                        <ButtonExit />
                        <ButtonExit isDelete={true} />
                    </ButtonBox>
                </Form>
            </div>
        </div>
    </>);
});