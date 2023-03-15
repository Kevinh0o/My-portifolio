import { useState, Suspense } from 'react'
import { useLocation } from 'react-router-dom';


import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

//Meshes
import SculptureModel  from '../SculptureModel'
import CityModel from '../CityModel'

//Renderer
import AsciiRenderer from '../AsciiRenderer'
import { GridHelper } from 'three'

//Components
import LoaderModel from '../../Components/Functional/LoaderModel'



// <AsciiRenderer fgColor="white" bgColor="black" />}
// <AsciiRenderer fgColor={ modelColor } bgColor={ bgColor } resolution={ 0.15 } />
export default function CanvaBg( props ) {
    const [model, setModel] = useState()
    const location = useLocation()

    //função que seleciona o modelo e de acordo com ele, muda os parametros
    function SelectModel(){
      switch( location.pathname ){
        case '/Contacts' : 
          return(
            <>
            
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-1, 10, 10]} />
              <pointLight position={[-10, 10, -10]} />

              <SculptureModel 
                position={ [ 0, 0, 0 ] } 
                scale={[ 0.4, 0.4, 0.4 ]} 
                color={'red'} 
                rotation={[ 0 , -1 , 0 ]}
              />

              <AsciiRenderer 
                fgColor='grey'
                bgColor='#161616'
                resolution={ 0.15 }
              />

            </>
          )
        break;

        case '/' :
          return(
            <Suspense fallback={ <LoaderModel /> }>

              <spotLight position={[0, 0, 0]} />
              <spotLight position={[0, 100, 20]} />


              <CityModel
              position={[ 0, -2, -40 ]}
              rotation={[ 0.3, 0, 0 ]}
              />

              <AsciiRenderer 
                fgColor='grey'
                bgColor='#161616'
                resolution={ 0.2 }
              />

            </Suspense>
          )
        break;
        case '/Projects' :
          return(
            <Suspense fallback={ <LoaderModel /> }>

              <spotLight position={[0, 0, 0]} />
              <spotLight position={[0, 100, 20]} />


              <CityModel
              position={[ 0, -2, -40 ]}
              rotation={[ 0.3, 0, 0 ]}
              />

              <AsciiRenderer 
                fgColor='grey'
                bgColor='#161616'
                resolution={ 0.2 }
              />

            </Suspense>
          )
        break;
      }
    }

    return (
      <>
          <Canvas>
            <color attach="background" args={['black']} />
 
              { SelectModel() }

            <OrbitControls maxDistance={20} minDistance={6} />
          </Canvas>
      </>
    )
  }