import logo from '../../../logo.svg';

export const Home = () => {
    return (
        <>
            <h1>Home Page <i className="fa-solid fa-house"></i></h1>
            <div>
                Main All Information in the Web Application will be here!
            </div>
            <img src={logo} className="App-logo" alt="logo" />
        </>
    );
}