import styled from "@emotion/styled"

const Texto = styled.div`
background-color: #ec1d1d;
color: #fff;
padding:14px;
margin-bottom: 14px;
text-align: center;
text-transform: uppercase;
font-weight: bold;
`
function Mensaje() {
  return (
    <Texto>
      Hay campos por validar maestro
    </Texto>
  )
}

export default Mensaje
