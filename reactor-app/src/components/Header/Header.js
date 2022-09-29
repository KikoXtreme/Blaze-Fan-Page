import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <h1>Reactor - Blaze Fan Page</h1>
            <div className="header-lists">
                <ul className="header-lists-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>All Blze Frineds</li>
                    <li>New Blaze Friends</li>
                    <li>Contacts</li>
                </ul>
                <ul className="header-lists-list">
                    <li>Register</li>
                    <li>Login</li>
                    <li>Logout</li>
                    <li>Profile Info</li>
                </ul>
            </div>
        </header>
    );
}