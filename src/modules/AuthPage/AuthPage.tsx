import { useState } from 'react';
// 
import s from './auth-page.module.sass';
import { Header } from '../Common/Header/Header';
import { Input } from '../Common/Input/Input';
import { InputFile } from '../Common/InputFile/InputFile';
import { Form } from '../Common/Form/Form';
import { Button } from '../Common/Button/Button';
import { ButtonBox } from '../Common/Form/ButtonBox';
import { Line } from '../Common/Line/Line';



// 
interface IProps {
    cs?: string,
}

export const AuthPage = (
    { cs = '' }: IProps
): JSX.Element => {

    const [login, setLogin] = useState('');

    return (<>
        <Header />
        <div className={cs + ' ' + s['auth-page']}>

            <div className={s['item']}>
                <Form name='form1' action=''
                    title='registration form'
                    onSubmit={(e) => false}
                >
                    <Input cs={s['input']} id='name' label='name: '
                        type='text' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input cs={s['input']} id='email' label='email: '
                        type='email' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input cs={s['input']} id='password' label='password: '
                        type='password' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input cs={s['input']} id='birth' label='birth: '
                        type='date' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input cs={s['input']} id='gender' label='gender: '
                        type='text' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />

                    <InputFile cs={s['input']} id='file' label='file: '
                        required={true}
                    />

                    <ButtonBox>
                        <Button label='register' />
                    </ButtonBox>
                </Form>
            </div>

            <div className={s['item']}>
                <Form name='form2' action=''
                    title='authentication form'
                    onSubmit={(e) => false}
                >
                    <Input cs={s['input']} id='name' label='name: '
                        type='text' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input cs={s['input']} id='password' label='password: '
                        type='password' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />

                    <ButtonBox>
                        <Button label='log in' />
                    </ButtonBox>
                </Form>
            </div>

        </div >
    </>);
}
