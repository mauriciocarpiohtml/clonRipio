import React from 'react'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Mensaje from './Mensaje'

const Solicitud = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width:768px) {
        margin-left: 35px
        }`


const Label = styled.label`
    margin-top: 18px;
    font-weight:bold;

    font-size:19px;
    color:#fff;
    font-family: 'Lato', sans-serif;
    `

const Select = styled.select`
    margin-top: 15px;
    width:80%;
    padding: 10px;

    font-family: 'Lato', sans-serif;
    text-align:center;
    font-size:16px;
    border:none;
    border-radius:11px;
    margin-bottom:28px;`

const Boton = styled.input`
    padding: 14px;
    width:80%;
    background-color: #336597;
    font-weight: 900;
    text-transform: uppercase;
    color:#fff;
    border-radius:11px;
    border:none;
    cursor:pointer;
    margin-left:-75px;
    
    `

function Formulario({setObjetoApi, setResultado, criptoSelect, setCriptoSelect}) {
    const [moneda, setMoneda] = useState('')
    const [criptomoneda, setCriptomoneda] = useState('')
    
    
    const [error, setError] = useState(false)

    useEffect(() => {
    async function consultarApi(){
    const enlace = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    const respuesta = await fetch(enlace)
    const resultado = await respuesta.json()
    const resultadoCripto = resultado.Data
    const arrayCriptos = resultadoCripto.map(resultado=>{
        
        const {FullName, Name} = resultado.CoinInfo
        const {CHANGE24HOUR, PRICE, HIGHDAY} = resultado.DISPLAY.USD

        const objetoCripto={
           nombre: FullName, 
           id: Name,
           variacion: CHANGE24HOUR, 
           precio: PRICE,
           precioAlto : HIGHDAY

        }
        return objetoCripto
        //le coloco el return porque si no me va a regresar undefined
        
    })
    setCriptoSelect(arrayCriptos)
    }
    consultarApi()
    }, [Formulario])

    const ArrayMonedas =[
        {id: 'ARS', nombre: 'Peso Argentino'},
        {id:'USD', nombre: 'Dolar Americano'},
        {id: 'EUR', nombre: 'Euro'}
    ]

    function validarFormulario(e){
        e.preventDefault()
        if([moneda, criptomoneda].includes('')){
            setError(true)
            return
        }

        setError(false)
        setObjetoApi({moneda, criptomoneda})
        setResultado(true)

    }

  return (
    <div>
        <Solicitud 
        onSubmit={validarFormulario}>
            {/* //si los campos estan vacios entonces muestra este mensaje */}
            {error && <Mensaje/>}
            <div>
                <Label htmlFor="moneda">Selecciona tu moneda</Label>
                <Select
                id='moneda'
                value={moneda}
                onChange={(e)=>setMoneda(e.target.value)}>
                    <option
                    value=''
                    disabled> Selecciona tu moneda </option>
                    {ArrayMonedas.map(moneda=>(
                        <option 
                        value={moneda.id}
                        key={moneda.id}>

                        {moneda.nombre}</option>
                    ))}
                
                </Select>
            </div>

            <div>
                <Label htmlFor="criptomoneda">Selecciona tu criptomoneda</Label>
                <Select
                id='criptomoneda'
                value={criptomoneda}
                onChange={(e)=>setCriptomoneda(e.target.value)}>
                    <option
                    value=''
                    disabled> Selecciona tu criptomoneda </option>
                    {criptoSelect.map(cripto=>(
                        <option 
                        value={cripto.id}
                        key={cripto.id}>

                        {cripto.nombre}</option>
                    ))}
                
                </Select>
            </div>
            
            <Boton
            type='submit'
            value='Cotizar'/>

        </Solicitud>
    </div>
  )
}

export default Formulario
