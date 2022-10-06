import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Main/Home/Home';
import { NotFound } from './components/Main/NotFound/NotFound';
import { Register } from './components/Auth/Register/Register';
import { Login } from './components/Auth/Login/Login';
import { Logout } from './components/Auth/Logout/Logout';
import { About } from './components/Main/About/About';
import { Profile } from './components/Auth/Profile/Profile';
import { Blaze } from './components/Main/Blaze/Blaze';
import { Create } from './components/Main/Create/Create';
import { Contacts } from './components/Main/Contacts/Contacts';

function App() {
    return (
        <div className="App">
            <Header />

            <main id="main">
                <Routes >
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/blaze' element={<Blaze />}></Route>
                    <Route path='/create' element={<Create />}></Route>
                    <Route path='/contacts' element={<Contacts />}></Route>

                    <Route path='/users/register' element={<Register />}></Route>
                    <Route path='/users/login' element={<Login />}></Route>
                    <Route path='/users/logout' element={<Logout />}></Route>
                    <Route path='/users/profile' element={<Profile />}></Route>

                    <Route path='/*' element={<NotFound />}></Route>
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
