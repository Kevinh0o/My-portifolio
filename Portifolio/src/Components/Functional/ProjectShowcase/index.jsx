import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

//Images
import CalculeTudoImage from '../../../../public/assets/images/calcule-tudo.png'
import NotesImage from '../../../../public/assets/images/notes.png'
import PrintCatImage from '../../../../public/assets/images/print-cat-images.png'
import PrintDogImage from '../../../../public/assets/images/print-dog-images.png'
import PortifolioImage from '../../../../public/assets/images/portifolio.png'



const ProjectShowcase = ( props ) => {
    const [image, setImage] = useState()


    function selectImage(){
        switch( props.image ){
            case 'Notes' : setImage(NotesImage)
            break;

            case 'Calcule Tudo' : setImage(CalculeTudoImage)
            break;

            case 'Print Cat Images' : setImage(PrintCatImage)
            break;

            case 'Print Dog Images' : setImage(PrintDogImage)
            break;

            case 'This Page' : setImage(PortifolioImage)
            break;

            case 'Essa página' : setImage(PortifolioImage)
            break;
        }
    }

    useEffect(()=>{
        selectImage()
    }, [])

  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.2 }}
    >
        <img src={image}>
        </img>
    </motion.div>
  )
}

export default ProjectShowcase