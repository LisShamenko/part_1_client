import s from './people-page.module.sass';
import { Header } from '../Common/Header/Header';
import { Card } from '../Common/Card/Card';



// 
interface IProps {
    cs?: string,
}

export const PeoplePage = (
    { cs = '' }: IProps
): JSX.Element => {

    return (<>
        <Header />
        <div className={cs + ' ' + s['people-page']}>

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
            <Card cs={s['card']}
                avatar='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                login='Other Account'
                email='other@mail.ru'
                birth='1290.34.12'
                gender='male/female'
            />
        </div >
    </>);
}
