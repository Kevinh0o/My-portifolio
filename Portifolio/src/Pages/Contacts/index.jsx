import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

//Styles
import { LinkList, Wrap, Top, Middle, Bottom } from './styles'

//Translation
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation()

  return (
    <Wrap>

      <Top>

        <div>
        <LinkList>
          <li> <Link to='/Projects'> {t('navigation.projects')} </Link> </li>
          <li> <Link to='/'> {t('navigation.home')} </Link> </li>
        </LinkList>
        </div>

        <div></div>
        <div></div>
      </Top>

      <Middle>
        <motion.div
            initial={{ opacity: 0, y: -3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1> Kevin </h1>
          <h1> Henrique </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: -3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1> {t('contacts.web')} </h1>
          <h1> {t('contacts.developer')} </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: -3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.4 }}
        >
          <h1> & </h1>
          <h1> {t('contacts.designer')} </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: -3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.4 }}
        >
          <h1> {t('contacts.lastTitle')} </h1>
        </motion.div>

        <div className='about-contaier'>
          <motion.div className='left'
            initial={{ opacity: 0, y: -3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            <p> {t('contacts.description1')} </p>
          </motion.div>
          
          <motion.div className='right'
            initial={{ opacity: 0, y: -3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            <p> {t('contacts.description2')} </p>
          </motion.div>
          
          <motion.div className='left'
            initial={{ opacity: 0, y: -3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}         
          >
            <p> {t('contacts.description3')} </p>
          </motion.div>
        </div>

        <motion.div className='tech-stack'
            initial={{ opacity: 0, y: -3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.4 }}        
        >
            <h1> {t('contacts.getInTouch')}</h1>
        </motion.div>

      </Middle>

      <Bottom>
        <a href='https://www.linkedin.com/in/kevin-henrique-c/' target='_blank' > <p> LINKEDIN </p></a>
        <a href='https://github.com/Kevinh0o' target='_blank' > <p> GITHUB </p> </a>
      </Bottom>
      
    </Wrap>
  )
}

export default Contacts