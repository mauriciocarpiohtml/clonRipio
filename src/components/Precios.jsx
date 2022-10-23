import React from 'react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

//clon de ripio 
// contenedor que mida maximo un 80% de lapantalla aprox:listo
// 4 mini headings que son los titulos:listo
// un div con esquinas redondeadas color blanco que contiene:listo
//la criptomoneda, el precio , venta, variacion 24horas:listo
// primero lograr el diseño y posterior a eso sustituir datos con la api:listo

const ContenedorTitulos= styled.div`
width:100%;
display:flex;
justify-content: space-between;

`

const Titulos= styled.p`
font-size: 13px;
text-align: center;
color:#fff;
text-transform:uppercase;
font-weight: 700;
margin-left:14px;
@media(min-width: 768px) {
  font-size: 16px;
}`

const ContenedorContenido = styled.div`
padding:13px;
background-color: #fff;
border-radius: 8px;
margin-top: 25px;

display:flex;
justify-content: space-between;
margin: 0 auto;
margin-bottom: 30px;
transition-property: transform;
transition-duration: .3s;

:hover{
  transform: scale(1.1);
}
`

const ContenidoCripto = styled.p`
font-size: 16px;
color:#3f3f3f;
text-transform:uppercase;
font-weight: 700;
/* margin: 0 auto; */
text-align: center;
margin-right: 34px;

`
const ContenidoCriptoPrecio = styled.p`
font-size: 16px;
color:#0c4070;
text-transform:uppercase;
font-weight: 700;
/* margin: 0 auto; */
text-align: center;
margin-right: 34px;

`
function Precios({criptoSelect}) {

  return (
    <>
        <ContenedorTitulos>
          <Titulos>Cripto</Titulos>
          <Titulos>precio actual</Titulos>
          <Titulos>precio + alto</Titulos>
          <Titulos>Variacion 24h</Titulos>

        </ContenedorTitulos>

            {/* la key se tiene que generar en el ContenedorContenido porque se va a generar
            un contenedor por cada cripto que hay en el array */}
            {criptoSelect.map(cripto=>(
              <ContenedorContenido 
                key={cripto.id}> 
                  <ContenidoCripto>{cripto.nombre}</ContenidoCripto>
                  <ContenidoCriptoPrecio>{cripto.precio}</ContenidoCriptoPrecio>
                  <ContenidoCripto>{cripto.precioAlto}</ContenidoCripto>
                  <ContenidoCripto>{cripto.variacion}</ContenidoCripto>
              </ContenedorContenido>  
            ))}
             
        
    </>
  )
}

export default Precios
