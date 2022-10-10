import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Formulario({ array }) {
    const [nome, SetNome] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function reservarLugar(e) {
        e.preventDefault()
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"

        const body = {
            ids: array,
            nome: nome,
            cpf: cpf
        }

        const promisse = axios.post(URL, body)

        promisse.then(() => {
            
            navigate("/sucesso");
        })

        promisse.catch((err) => {
            alert(err.response.data.message)
        })
    }
    return (

        <Form onSubmit={reservarLugar} >

            <div className="primeiro-input"><label forhtml="nome">Nome do Comprador:</label>
                <input
                    id="nome"
                    type="nome"
                    value={nome}
                    onChange={(e) => SetNome(e.target.value)}
                    placeholder="Digite seu nome..."
                    required />
            </div>
            <div className="segundo-input"><label forhtml="cpf">CPF do Comprador:</label>
                <input
                    id="cpf"
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="Digite seu CPF..."
                    required
                />
            </div>
            <div><button type="submit">{'Reservar Assento(s)'}</button></div>
        </Form>

    )

}

const Form = styled.form`
margin-top:42px;
margin-bottom: 30px;
label{
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 40px;
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
margin-left:40px

}
button{
    background: #E8833A;
    height: 42px;
    width: 225px;
    border-radius: 3px;
    border: none;
    color: #FFFFFF;
    margin-left: 51px;
    cursor: pointer;
}
`