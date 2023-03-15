import { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom'
import { useProgress } from "@react-three/drei"

//Routes
import Home from './Pages/Home'
import Contacts from './Pages/Contacts'
import Projects from './Pages/Projects'
import NoPage from './Pages/NoPage'

//Components
import CanvaBg from './ThreeJS/Canva'
import Loader from './Components/Functional/Loader'


//Styles
import './index.css'
import { 
  Wrap, 
  Content, 
  CanvasContainer, 
  Pages
} from './styles'


function App() {
  const [loading, setLoading] = useState(true)
  const { progress } = useProgress()

  useEffect(()=>{
    if(progress == 100){
      setLoading(false)
    }
  }, [progress])

  function ShowContent(){
    if (loading == true){
      return(
          <Loader
          animate={loading}
          />
      )
    }
  }

  return (
    <Wrap>
      <CanvasContainer>
        <CanvaBg />
      </CanvasContainer>

      <Content>
        <Pages>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/*' element={<NoPage />} />
          </Routes>
        </Pages>
      </Content>

      { ShowContent() }

    </Wrap>
  )
}

export default App
