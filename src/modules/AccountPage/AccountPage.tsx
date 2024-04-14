import { useState } from 'react';
// 
import s from './account-page.module.sass';
import { Header } from '../Common/Header/Header';
import { Input } from '../Common/Input/Input';
import { Form } from '../Common/Form/Form';
import { Button } from '../Common/Button/Button';
import { ButtonBox } from '../Common/Form/ButtonBox';



// 
interface IProps {
    cs?: string,
}

export const AccountPage = (
    { cs = '' }: IProps
): JSX.Element => {

    const [login, setLogin] = useState('');

    return (<>
        <Header />
        <div className={cs + ' ' + s['people-page']}>
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
                        type='password' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input cs={s['input']} id='new_password' label='new password: '
                        type='password' required={true} value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <ButtonBox>
                        <Button label='update' />
                        <Button label='exit' />
                        <Button label='delete' type='red' />
                    </ButtonBox>
                </Form>
            </div>
        </div>
    </>);
}
