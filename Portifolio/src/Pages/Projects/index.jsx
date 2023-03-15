import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

//Components
import ProjectLink from '../../Components/Functional/ProjectLink'

//Styles
import { Wrap, Top, Middle, Bottom, LinkList, ProjectList } from './styles'

//Localization
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <Wrap>

      <Top>
        <div>
          <LinkList>
            <li> <Link to='/'> {t('navigation.home')} </Link> </li>
            <li> <Link to='/Contacts'> {t('navigation.me')} </Link> </li>
          </LinkList>
        </div>

        <div> <h1> {t('navigation.projects')} </h1> </div>
        
        <div className='mobile'> </div>
      </Top>

      <Middle>
        <ProjectList>

          <ProjectLink
          title={ t('projects.notes') }
          description={ t('projects.description1') }
          delay={0.1}
          tech={'ReactJS, Firebase, Styled-Components'}
          link={'https://notes-with-firebase.vercel.app'}
          src={'https://github.com/Kevinh0o/Notes'}
          />

          <ProjectLink
          title={ t('projects.calcule') }
          description={ t('projects.description2') }
          delay={0.2}
          tech={'ReactJS'}
          link={'https://calcule-tudo.vercel.app/'}
          src={'https://github.com/Kevinh0o/calcule-tudo'}
          />

          <ProjectLink
          title={ t('projects.cat') }
          description={ t('projects.description3') }
          delay={0.3}
          tech={'ReactJS'}
          link={'https://print-cat-images.vercel.app/'}
          src={'https://github.com/Kevinh0o/print-cat-images'}
          />

          <ProjectLink
          title={ t('projects.dog') }
          description={ t('projects.description4') }
          delay={0.4}
          tech={'ReactJS'}
          link={'https://print-dog-images.vercel.app/'}
          src={'https://github.com/Kevinh0o/print-dog-images'}
          />

          <ProjectLink
          title={ t('projects.thisPage') }
          description={ t('projects.description5') }
          delay={0.5}
          tech={'ReactJS, ThreeJS, Styled-Components, Framer Motion'}
          link={''}
          src={''}
          />

        </ProjectList>
      </Middle>   

      <Bottom>
      </Bottom>

    </Wrap>
  )
}

export default Projects