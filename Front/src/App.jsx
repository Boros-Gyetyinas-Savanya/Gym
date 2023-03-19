import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Logout from './pages/logout/Logout';
import History from './pages/history/History';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/login" element={<Login />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/history" element={<History />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
