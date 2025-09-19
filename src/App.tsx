
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Gallery } from "./screens/Gallery/Gallery";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
function App() {

    return(
        <>
        <Header/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>
    )

}
export default App;