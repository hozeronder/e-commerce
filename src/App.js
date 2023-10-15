import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./components/home/Cart";
import Footer from "./components/footer/Footer";
import MiddleComp from "./components/home/MiddleComp";

function App() {
    return (<Router>
            <PageContainer>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<MiddleComp/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
                <Footer/>
            </PageContainer>
        </Router>
    );
}

export default App;
