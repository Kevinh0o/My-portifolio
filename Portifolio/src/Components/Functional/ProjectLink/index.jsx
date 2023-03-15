import { useState } from "react"
import { motion } from "framer-motion"

//Components
import ProjectShowcase from "../ProjectShowcase"

//Styles
import { FlexContainer, Wrap } from "./styles"

//Localization
import { useTranslation } from "react-i18next"



const ProjectLink = ( props ) => {
    const [isMouseOver, setMouseOver] = useState(false)
    const { t } = useTranslation()

    function handleMouseOver(){
        setMouseOver(true)
    }

    function handleMouseOut(){
        setMouseOver(false)
    }

    function showImage(){
        return(
            <>
                <ProjectShowcase
                image={props.title}
                />
            </>
        )
    }

  return (

    <Wrap as={motion.li}
    initial={{ opacity: 0, y: -3 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay: props.delay }}
    >
        <FlexContainer>
        { isMouseOver ? showImage() : <> </> }
            <a href={props.link} target='_blank'>
                <h1 onMouseEnter={ handleMouseOver } onMouseOut={handleMouseOut}>
                    {props.title}
                </h1>
            </a>
        </FlexContainer>
        <p>
            {props.description}
        </p>
        <p className="tech">
            <span>
                {props.tech}
            </span>
        </p>
        <a href={props.src} target='_blank' className="src">
            {t( 'projects.sourceCode' )}
        </a>
    </Wrap>
  )
}

export default ProjectLink