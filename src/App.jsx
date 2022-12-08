import { useRef } from 'react'
import AccImage from './styles/ui/AccImage'
import AccInput from './styles/ui/AccInput'
import StyledDiv from './styles/ui/StyledDiv'
import StyledTitle from './styles/ui/StyledTitle'

function App() {

  const nameInputRef = useRef(null)
  return (
    <>
      <StyledTitle>Vite + React + Emotion + Vitest + Cypress</StyledTitle>
      <AccImage height={"300px"} src={"/images/thunder.png"}>
        <h1 style={{ top: '50%', left: '50%', background: 'red' }} >Pepe</h1>
      </AccImage>

      <div>
        <AccInput
          name="name"
          label="Nombre"
          ref={nameInputRef}
          onChange={() => console.log('change')}
          error={"pepe"}
          helperText={"Escribe bien tu nombre"
          }
        />
      </div>

    </>
  )
}

export default App
