//Styles
import { Wrap } from './styles'

//Animations
import { animate, motion } from 'framer-motion'

const Loader = ( props ) => {


  return (
    <Wrap as={motion.div}
    >
        <span className='grey'>
            Kevin
        </span>
        <span className='white'>
            Portifolio
        </span>
    </Wrap>
  )
}

export default Loader