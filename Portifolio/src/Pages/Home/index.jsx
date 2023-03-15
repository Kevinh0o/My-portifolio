import { Link } from 'react-router-dom'

//Styles
import { Wrap, Left, Right, Middle, LinkList } from './styles'

//Localization
import { useTranslation } from 'react-i18next';

//Componnets
import LanguageChanger from '../../Components/Functional/LanguageChanger';

const Home = () => {
  const  { t }  = useTranslation()

  return (
    <Wrap>

      <Left>
        <LinkList>
          <li> <Link to='/Projects'> {t('navigation.projects')} </Link> </li>
          <li> <Link to='/Contacts'>  {t('navigation.me')} </Link> </li>
        </LinkList>
      </Left>

      <Middle>
        <div>
          <h1>
            Kevin Henrique
          </h1>
          <p>
            {t('home.subtitle')}
          </p>
        </div>

        <div>
          <p>
            {t('home.text')}
          </p>
        </div>

      </Middle>

      <Right>
          <LanguageChanger />

        <div>
        </div>
      </Right>

    </Wrap>
  )
}

export default Home