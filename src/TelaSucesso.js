import { Link } from "react-router-dom"
import styled from "styled-components"

export default function TelaSucesso(props) {
    console.log(props)
    
    return (
        <CentralizaPag>
            <TituloPagina><p>{`Pedido feito com sucesso!`}</p></TituloPagina>
            <InfoFilme>
                <p>Filme e sessão</p>
                <h1>{`${props.filme.title}, ${props.diaSemana}, ${props.horario}`}</h1>
            </InfoFilme>
            <Ingressos>
                <p>Ingressos</p>
                <h1>Assento 15</h1>
            </Ingressos>
            <DadosComprador>
                <p>Comprador</p>
                <h1>{`Nome: ${props.nome}`}</h1>
                <h1> {`CPF:${props.cpf}`}</h1>
            </DadosComprador>
            <BotaoVoltaMenu><Link to={`/`}><p>Voltar pra Home</p></Link></BotaoVoltaMenu>
        </CentralizaPag>
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
    color: #247A6B;
    
}

`
const CentralizaPag = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InfoFilme = styled.div`
width:100%;
margin-left: 29px;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
    margin-bottom: 15px;
    

}

h1{
    
    
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;
    text-align: left;
   

}
`

const Ingressos = styled.div`
width:100%;
margin-left: 29px;

p{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
    margin-bottom: 15px;
    margin-top: 40px;

}

h1{
    
    
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;
    text-align: left;
   

}
`

const DadosComprador = styled.div`

width:100%;
margin-left: 29px;

p{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
    margin-bottom: 15px;
    margin-top: 40px;

}

h1{
    
    
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;
    text-align: left;
   

}
`

const BotaoVoltaMenu = styled.button`
height: 42px;
width: 225px;
background-color: #E8833A;
cursor: pointer;
border-radius: 3px;

p{
    font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0.04em;
text-align: center;
color: #FFFFFF;

}

margin-top: 80px;

`