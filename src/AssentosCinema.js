import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import LocalAssento from "./LocalAssento";
import Formulario from "./Formulario";

export default function AssentosCinema() {
    const [assentos, setAssentos] = useState([]);
    const [filme, setFilme] = useState([]);
    const [horario, setHorario] = useState("");
    const[diaSemana, setDiaSemana]= useState("");
    const { idSessao } = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promisse.then((res) => {
            console.log(res.data)
            setFilme(res.data.movie);
            setAssentos(res.data.seats);
            setHorario(res.data.name);
            setDiaSemana(res.data.day.weekday)
        }

        );
        promisse.catch(() => console.log("Falha na requisição, tente novamente"));
    }, []);
    return (
        <CentralizaPag>
            <TituloPagina><p>{`Selecione o(s) assento(s)`}</p></TituloPagina>
            <DisposicaoSala>{assentos.map((cadeiras) => <LocalAssento cadeiras={cadeiras} />)}</DisposicaoSala>
            <Legendas>
                <div><Selecionado></Selecionado> <p>Selecionado</p></div>
                <div><Disponivel></Disponivel><p>Disponível</p></div>
                <div><Indisponivel></Indisponivel><p>Indisponível</p></div>
            </Legendas>
            <Formulario />
            <FilmeRodape2>
                <div><img src={filme.posterURL} /></div>
                <p>
                    <h1>{filme.title}</h1>
                    <h1>{diaSemana} - {horario}</h1>
                </p>

            </FilmeRodape2>

        </CentralizaPag>
    )
}

const Selecionado = styled.div`
        height: 26px;
        width: 26px;
        border-radius: 12px;
        background-color: #1AAE9E;
        margin-left: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0.04em;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        border: 1px solid #0E7D71;
        

`


const Disponivel = styled.div`height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color: #C3CFD9;
    margin-left: 28.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #7B8B99;
    
    `
const Indisponivel = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color: #FBE192;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #F7C52B;
`



const Legendas = styled.div`
    height: 53px;
    width: 360px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    p{
    height: 28px;
    width: 91px;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.013em;
    text-align: center;
    
    }

`
const TituloPagina = styled.div`
    height: 110px;
    margin-top: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

p{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-align: center;
    margin-top: -39px;
    
}

`

const FilmeRodape2 = styled.div`
    height: 117px;
    width: 100%;
    background-color: #DFE6ED;
    display: flex;
    flex-wrap: wrap;

img{
   
    width: 48px;
    border-radius: 0px;
}

p{
    margin-top: 15px;
    margin-left: 14px;
    height: 40px;
    width: 250px;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
}

div{
    height: 89px;
    width: 64px;
    border-radius: 2px;
    background-color: #FFFFFF;
    margin-left: 10px;
    margin-top: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}


`

const DisposicaoSala = styled.div`
    width: 360px;
    height: 220px;
    display: flex;
    flex-wrap: wrap;
`

const CentralizaPag = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`