import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

//styles
import { Button } from "./styles"


const LanguageChanger = () => {
    const [ active, setActive ] = useState(true)
    const { i18n } = useTranslation()

    function handleClickPt(){
        i18n.changeLanguage('pt')
    }

    function handleClickEn(){
        i18n.changeLanguage('en')
    }

    useEffect(()=>{
        switch ( i18n.language ){
            case 'pt' : setActive(true)
            break;

            case 'en' : setActive(false)
            break;
        }
    }, [i18n.language])

  return (
    <div>
        <Button active={active} onClick={ handleClickPt }>
            <p>
                pt-BR
            </p>
        </Button>
        <Button active={!active} onClick={ handleClickEn }>
            <p>
                en-US
            </p>
        </Button>
    </div>
  )
}

export default LanguageChanger