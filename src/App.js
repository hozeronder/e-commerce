import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./pages/Cart";
import {Search} from "./pages/Search";
import Footer from "./components/footer/Footer";

function App() {
    return (<div>
            <PageContainer>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/products/search" element={<Search/>}/>
                    </Routes>
                </Router>
                <Footer/>
            </PageContainer>

        </div>);
}

export default App;
