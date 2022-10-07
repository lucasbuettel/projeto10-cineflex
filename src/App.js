import { BrowserRouter, Route, Routes } from "react-router-dom";
import EscolheFilme from "./EscolheFilme";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";
import SessaoFilme from "./SessaoFilme";
import AssentosCinema from "./AssentosCinema";



export default function App() {
    return (
        <BrowserRouter>
        <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<EscolheFilme />}/>
                <Route path="/sessoes/:idFilme" element={<SessaoFilme />}/>
                <Route path="/assentos/:idSessao" element={<AssentosCinema />}/>
                <Route/>
            </Routes>
        </BrowserRouter>
    )
}