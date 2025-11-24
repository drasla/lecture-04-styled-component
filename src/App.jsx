import {Reset} from "styled-reset";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./routes/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <Reset />
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
