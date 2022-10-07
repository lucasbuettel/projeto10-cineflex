import styled from "styled-components"

export default function Header() {
    return (
        <HeaderContainer><p>CINEFLEX</p></HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    top:0px;
    left: 0px;
    margin-bottom: 67px;
    height: 67px;
    width: 100%;
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;

p{
    z-index: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    font-weight: 400;
    text-align: center;
    color: #E8833A;
}

`
