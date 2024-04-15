import { useState, MouseEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
// 
import s from './auth-page.module.sass';
import { Input } from '../Common/Input/Input';
import { InputFile } from '../Common/InputFile/InputFile';
import { Form } from '../Common/Form/Form';
import { Button } from '../Common/Button/Button';
import { ButtonBox } from '../Common/Form/ButtonBox';
import { RegisterData, accountRegister } from '../../api/accountsAPI';



// 
export const RegistrationForm = (): JSX.Element => {

    const [isLock, setLock] = useState(false);

    const [login, setLogin] = useState('login');
    const [password, setPassword] = useState('password');
    const [email, setEmail] = useState('email@email');
    const [birth, setBirth] = useState('2000-01-01');
    const [gender, setGender] = useState('male');
    const [filename, setFilename] = useState('');
    const [file, setFile] = useState<any>(null);

    const mutation = useMutation({
        mutationFn: async (data: RegisterData) => {
            const result = await accountRegister(data);
            //store.authStore.setAccount(result);

            setLock(true);
            setTimeout(() => setLock(false), 2000);
            return result;
        },
    })

    const isValidate = () => {
        if (!login || !email || !password || !birth || !gender) return false;
        if (!file) return false;
        return true;
    }

    const onClickRegister = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isValidate()) {
            mutation.mutate({
                login, email, password, birth, gender, filename, file,
            });
        }
    }

    return (
        <Form action='' title='registration form'
            onSubmit={(e) => false}
        >
            <Input cs={s['input']} id='name' label='name: '
                type='text' required={true} value={login}
                onChange={(e) => setLogin(e.target.value)}
            />
            <Input cs={s['input']} id='password' label='password: '
                type='password' required={true} value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input cs={s['input']} id='email' label='email: '
                type='email' required={true} value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input cs={s['input']} id='birth' label='birth: '
                type='date' required={true} value={birth}
                onChange={(e) => setBirth(e.target.value)}
            />
            <Input cs={s['input']} id='gender' label='gender: '
                type='text' required={true} value={gender}
                onChange={(e) => setGender(e.target.value)}
            />

            <InputFile cs={s['input']} id='file' label='file: '
                required={true} onSetFile={(f) => setFile(f)}
                onSetFilename={(fn) => setFilename(fn)}
            />

            <ButtonBox>
                <Button label={isLock ? 'ok' : 'register'}
                    disabled={isLock} onClick={onClickRegister}
                />
            </ButtonBox>
        </Form>
    );
}
