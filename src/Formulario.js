import { useState } from "react"
import styled from "styled-components"

export default function Formulario(){
    const [nome,SetNome] = useState("");
    const [cpf,setCpf] = useState("");
    return(

        <Form /* onSubmit={reservarLugar} */>

		  <div className="primeiro-input"><h1>Nome do Comprador:</h1><input type="name"  placeholder="Digite seu nome..." required /></div>
		  <div className="segundo-input"><h1>CPF do Comprador:</h1><input type="cpf"  placeholder="Digite seu CPF..." required/></div>
		  <div><button type="submit">{'Reservar Assento(s)'}</button></div>
		</Form>
        
    )

}

const Form = styled.form`
margin-top:42px;
margin-bottom: 30px;
h1{
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
}
.primeiro-input{
    margin-bottom: 7px;
}
.segundo-input{
    margin-bottom: 57px;
}

input{
    height: 51px;
width: 327px;
border: 1px solid #D4D4D4;
border-radius: 3px;

}
button{
    background: #E8833A;
    height: 42px;
    width: 225px;
    border-radius: 3px;
    border: none;
    color: #FFFFFF;
    margin-left: 51px;

}
`