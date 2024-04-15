import s from './auth-page.module.sass';
import { Header } from '../Common/Header/Header';
import { RegistrationForm } from './RegistrationForm';
import { AuthenticationForm } from './AuthenticationForm';
import { Link } from '../Common/Link/Link';



// 
export const AuthPage = (): JSX.Element => {
    return (<>
        <Header>
            <Link label="account" to="../account" />
            <Link label="people" to="../people" />
        </Header>

        <div className={s['auth-page']}>
            <div className={s['item']}>
                <RegistrationForm />
            </div>
            <div className={s['item']}>
                <AuthenticationForm />
            </div>
        </div >
    </>);
}
