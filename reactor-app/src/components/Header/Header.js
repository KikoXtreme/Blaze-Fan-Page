import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <h1>Reactor Web App</h1>
            <ul>
                <li>Register</li>
                <li>Login</li>
                <li>Logout</li>
                <li>Profile Info</li>
            </ul>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Main Elements</li>
                <li>New Elements</li>
                <li>Contacts</li>
            </ul>
        </header>
    );
}