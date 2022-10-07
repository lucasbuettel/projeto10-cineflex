import styled from "styled-components"

export default function LocalAssento({cadeiras}){
    
    
    return(
        <>
            <EstiloCadeira cadeiras = {cadeiras}><div>{cadeiras.name}</div></EstiloCadeira>
        </>
    )

}

const EstiloCadeira = styled.div`

    div{
        height: 26px;
        width: 26px;
        border-radius: 12px;
        background-color: #C3CFD9;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0.04em;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }

`