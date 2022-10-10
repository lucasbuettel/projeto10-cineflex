import { useState } from "react"
import styled from "styled-components"

export default function LocalAssento({ cadeiras, array }) {
    const [selecionaAssento, setSelecionaAssento] = useState(false);


    function selecionaCadeira() {
        if(cadeiras.isAvailable === false){
        setSelecionaAssento(!selecionaAssento);
        cadeiras.isAvailable = true;
        console.log(cadeiras);
        array.push(Number(cadeiras.id));
        console.log(array);
        }
    }

    
    return (
        <>
            <EstiloCadeira onClick={selecionaCadeira} cadeiras={cadeiras.isAvailable} selecionaAssento={selecionaAssento}><div >{cadeiras.name}</div></EstiloCadeira>
        </>
    )

}

const EstiloCadeira = styled.div`
    cursor: pointer;
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color: ${(prop) => !prop.cadeiras ? `#C3CFD9` : `#FBE192`};
    ${(prop) => prop.selecionaAssento ? `background-color: #1AAE9E;` : ``};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    border: 1px solid ${(prop) => !prop.cadeiras ? `#7B8B99` : `#F7C52B`};
    ${(prop) => prop.selecionaAssento ? `border: 1px solid #0E7D71` : ``};
    margin-right: 8px;
        
`