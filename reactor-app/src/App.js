import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Main/Home/Home';
import { NotFound } from './components/Main/NotFound/NotFound';

function App() {
    return (
        <div className="App">

            <Header />
            
            <main id="main">
                <Routes >
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/*' element={<NotFound />}></Route>
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
