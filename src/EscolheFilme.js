import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FilmesNaTela from "./FilmesNaTela";

export default function EscolheFilme() {
    const [poster, setPoster] = useState([]);

    useEffect(() => {

        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promisse.then((res) => {
            console.log(res.data)
            setPoster(res.data);

        }
        );
        promisse.catch(() => console.log("Falha na requisição, tente novamente"));
    }, []);

    return (
        <>
            <TituloPagina><p>Selecione o filme</p></TituloPagina>
            <ConainerFilmes>
                <ConteudoFilmes>
                    {poster.map((poster) => <Link to={`/sessoes/${poster.id}`} ><FilmesNaTela key={poster.id} poster={poster} /></Link>)}
                </ConteudoFilmes>
            </ConainerFilmes>

        </>);

}

const TituloPagina = styled.div`

    height: 110px;
    margin-top: 67px;
    display: flex;
    justify-content: center;
    align-items: center;

p{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-align: center;
}

`
const ConteudoFilmes = styled.div`
   
   display: flex;
   flex-wrap: wrap;

img{
    height: 193px;
    width: 129px;
}

`
const ConainerFilmes = styled.div`

display: flex;
justify-content: center;
align-items: center;
`