import styled from "styled-components"
import Hora from "./Hora";

export default function InformacoesSessao({info, horarios}){
    
    return(
        <ContainerInfo>
            <Dia><p>{info.weekday}-{info.date}</p></Dia><Horario>{horarios.map((h) => <Hora hora={h.name} h={h}/>)}</Horario>
            
        </ContainerInfo>
    )
}

const ContainerInfo = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 23px;

`

const Dia = styled.div`
margin-left: 24px;
margin-bottom: 20px;
height: 35px;
width: 300px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0.02em;
text-align: left;


`
const Horario = styled.div`
margin-left: 24px;
height: 43px;
width: 90%;

display: flex;



`