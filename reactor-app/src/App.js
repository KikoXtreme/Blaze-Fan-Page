import './App.css';
import logo from './logo.svg';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />

            <main id="main">
                <div>
                    Main All Information in the Web Application will be here!
                </div>
                <img src={logo} className="App-logo" alt="logo" />
            </main>

            <Footer />
        </div>
    );
}

export default App;
