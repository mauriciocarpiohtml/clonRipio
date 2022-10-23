import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import imagenCripto from './img/imagen-criptos.png'
import Respuesta from './components/Respuesta'
import Precios from './components/Precios'


//FALTA CREAR:
// contenedor para almacenar imagen y formulario  : listo
// darle estilos a la imagen y al formulario  : listo, ojo con resetar el index.css
//crear el array de monedas y luego mostrarlo: listo
// crear el state de la moneda seleccionada: listo
// consultar a la api para crear el array y luego mostrar el select de cripto: listo

// crear los states de monedas y criptomonedas: listo
// validar el formulario : listo
//crear el state de respuesta: listo
// necesito un useEffect que se ejecute cuando objetoApi este listo:listo
// mostrar un icono de loading cuando se este realizando la consulta

// https://www.ripio.com/ar/criptomonedas/cotizacion/



const Contenedor = styled.div`
    max-width:900px;
    margin: 0 auto;
    
    
    width: 80%;
    @media(min-width:768px) {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 4rem;
      
      
    }`

  const Imagen = styled.img`
    max-width: 450px;
    width: 70%;
    display: flex;
     margin: 35px auto 0 auto; 
    @media(min-width:768px) {
      margin-left: 100px;
      margin-top:100px;
    }
    `

    /* @media(min-width:768px){
      margin-left: 200px;
    } */

    const Heading= styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 700px;
    font-size: 29px;
    
    display: block;
    margin-top: 25px;
    
    color: #fff;
    margin-bottom: 26px;
    @media(min-width:768px) {
      margin-left: 35px;
      margin-top: 90px;
    }`

    const ContenedorPrecios = styled.div`
      max-width:900px;
      margin: 0 auto;
      width: 80%;
      margin-top: 80px;
    `
    

function App() {

  
  //este es el state que va a tener los datos para enviarle la consulta a la api
  const [objetoApi, setObjetoApi] = useState({})
  // STATE con la respuesta de la api, ya con esto tengo todo lo necesario para mostrar la consulta en otro
  //componente 
  const [consulta, setConsulta] = useState([]) 
  const [resultado, setResultado] = useState(false)
  const [criptoSelect, setCriptoSelect] = useState([])
  
  useEffect(()=>{
    // se me esta ejecutando dos veces sin razon asi que pondre un condicional de cuando el objeto 
    //tenga al menos una llave
    if( Object.keys(objetoApi).length > 0){

      async function respuestaApi(){
        const {moneda, criptomoneda} = objetoApi
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setConsulta(resultado.DISPLAY[criptomoneda][moneda])
      }
      respuestaApi()
    }
  },[objetoApi])

   return (
    <>
      <Contenedor>
          {/* //las imagenes solo tienen etiqueta de apertura */}
          <Imagen src={imagenCripto} alt='Imagenes cripto'/>
          <div>
            <Heading>Cotiza tus criptomonedas al instante</Heading>
            <Formulario
            setObjetoApi= {setObjetoApi} 
            criptoSelect ={criptoSelect}
            setCriptoSelect={setCriptoSelect} 
            setResultado ={setResultado}
            />
            {resultado && <Respuesta
                            consulta={consulta}/>}
          </div>

        </Contenedor>

         <ContenedorPrecios>
            <Precios 
             criptoSelect={criptoSelect}/>
         </ContenedorPrecios> 

    </>

   
  )
}

export default App
