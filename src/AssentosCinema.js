import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import LocalAssento from "./LocalAssento";

export default function AssentosCinema(){
    const [assentos, setAssentos]= useState([]);
    const [filmeRodape, setFilmeRodape] = useState([]);
    const {idSessao} = useParams();
    
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promisse.then((res) => {
            console.log(res.data);
            setFilmeRodape(res.data);
            setAssentos(res.data.seats);   
            console.log(assentos);
            
        }
            
        );
        promisse.catch(() => console.log("Falha na requisição, tente novamente"));
    }, []);
    return(
        <>
            <TituloPagina><p>{`Selecione o(s) assento(s)`}</p></TituloPagina>
            {assentos.map((cadeiras) => <LocalAssento cadeiras = {cadeiras} />)}
            <FilmeRodape2><div><img/></div><p></p></FilmeRodape2>
                     
        </>
    )
}


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
    margin-top: 38px;
    margin-left: 14px;
    height: 40px;
    width: 200px;
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