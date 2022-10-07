import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import styled from "styled-components";
import InformacoesSessao from "./InformacoesSessao";

export default function SessaoFilme(){
    const[date, setDate] = useState([]);
    const[infosFilme, setInfosFilme] = useState([]);
    const {idFilme} = useParams();
    
    

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promisse.then((res) => {
            console.log(res.data)
           setDate(res.data.days);     
           setInfosFilme(res.data);
            
        }
          
        );
        promisse.catch(() => console.log("Falha na requisição, tente novamente"));
    }, []);
    
    return(
        <>
            <TituloPagina><p>Selecione o horário</p></TituloPagina>
            {date.map((info) => <InformacoesSessao key = {info.id} info = {info} horarios ={info.showtimes}/>)}
            <FilmeRodape><div><img src={infosFilme.posterURL}/></div><p>{infosFilme.title}</p></FilmeRodape>
                     
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
const FilmeRodape = styled.div`
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

