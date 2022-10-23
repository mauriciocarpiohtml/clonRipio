import styled from '@emotion/styled'

 const Contenedor = styled.div`
 margin-top: 35px;
  @media(min-width:768px) {
        margin-left: 35px
        }
 `

 const TextoSecundario = styled.p`
 font-size:20px;
 color:#fff;
 font-weight: normal;
 text-align:left;
 text-transform: uppercase;`

 const TextoPrimario = styled.span`
 font-weight:700;
 font-size:22px;
 color:#fff;`


function Respuesta({consulta}) {
  const {HIGHDAY, PRICE, LOWDAY,} = consulta
  return (
    <Contenedor>
      <TextoSecundario>Precio actual:<TextoPrimario> {PRICE}</TextoPrimario> </TextoSecundario>
      <TextoSecundario>Precio mas alto del dia :<TextoPrimario> {HIGHDAY}</TextoPrimario> </TextoSecundario>
      <TextoSecundario>Precio mas bajo del dia :<TextoPrimario> {LOWDAY}</TextoPrimario> </TextoSecundario>
    </Contenedor>
  )
}

export default Respuesta
