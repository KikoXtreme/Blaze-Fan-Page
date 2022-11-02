import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { login } from "../../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    // const [error, setError] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            username,
            email,
            password,
            age
        } = Object.fromEntries(new FormData(e.target));

        login(username, email, password, age)
            .then(userData => {
                userLogin(userData);
                navigate('/');
                console.log(userData);
            })
            .catch(() => {
                navigate('/NotFound');
            })
    }

    return (
        <section id="login-page" className="auth">
            <form className="login" onSubmit={onSubmit}>
                <div className="container">
                    <h2>Login</h2>
                    <p className="field field-icon">
                        <label htmlFor="email"><span><i className="fas fa-at"></i></span></label>
                        <input
                            // className={error.errorEmailMsg ? "input-error" : null}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="kiril.valkov@yahoo.com"
                        // onBlur={validateEmail}
                        />
                    </p>
                    {/* {error.errorEmailMsg && <div className="errors">{error.errorEmailMsg}</div>} */}

                    <p className="field field-icon">
                        <label htmlFor="password"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            // className={error.errorPassMsg ? "input-error" : null}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                        // onBlur={validatePassword}
                        />
                    </p>
                    {/* {error.errorPassMsg && <div className="errors">{error.errorPassMsg}</div>} */}

                    {/* <input type="submit" className="btn submit" value="Login" /> */}
                    <button type='submit'>Login</button>
                    <p className="text-center">
                        <span>Have an account? <Link to="/users/register">Register</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}