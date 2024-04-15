import { useState, MouseEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// 
import s from './auth-page.module.sass';
import { Input } from '../Common/Input/Input';
import { Form } from '../Common/Form/Form';
import { Button } from '../Common/Button/Button';
import { ButtonBox } from '../Common/Form/ButtonBox';
import { LoginData, accountLogin } from '../../api/accountsAPI';
import store from '../../stores/root.store';



// 
export const AuthenticationForm = (): JSX.Element => {

    const [email, setEmail] = useState('email@email');
    const [password, setPassword] = useState('password');

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (data: LoginData) => {
            const result = await accountLogin(data);
            store.authStore.setToken(result);
            if (result?.token) {
                navigate('../account');
            }
            return result;
        },
    })

    const isValidate = () => {
        if (!email || !password) return false;
        return true;
    }

    const onClickLogin = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isValidate()) {
            mutation.mutate({ email, password });
        }
    }

    return (
        <Form action='' title='authentication form'
            onSubmit={(e) => false}
        >
            <Input cs={s['input']} id='email' label='email: '
                type='text' required={true} value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input cs={s['input']} id='password' label='password: '
                type='password' required={true} value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <ButtonBox>
                <Button label='log in' onClick={onClickLogin} />
            </ButtonBox>
        </Form>
    );
}
