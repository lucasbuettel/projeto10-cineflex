import { BrowserRouter, Route, Routes } from "react-router-dom";
import EscolheFilme from "./EscolheFilme";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";
import SessaoFilme from "./SessaoFilme";
import AssentosCinema from "./AssentosCinema";
import TelaSucesso from "./TelaSucesso";
import { useState } from "react";



export default function App() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [filme, setFilme] = useState([]);
    const [horario, setHorario] = useState("");
    const [diaSemana, setDiaSemana] = useState("");

    return (
        <BrowserRouter>
        <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<EscolheFilme />}/>
                <Route path="/sessoes/:idFilme" element={<SessaoFilme />}/>
                <Route path="/assentos/:idSessao" element={<AssentosCinema nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} filme = {filme} setFilme = {setFilme} horario={horario} setHorario={setHorario} diaSemana={diaSemana} setDiaSemana={setDiaSemana}/>}/>
                <Route path="/sucesso" element={<TelaSucesso nome={nome} cpf={cpf} filme={filme} horario={horario} diaSemana={diaSemana}/>} />
                <Route/>
            </Routes>
        </BrowserRouter>
    )
}