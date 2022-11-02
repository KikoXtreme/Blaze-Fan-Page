import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { register } from "../../../services/authService";

export const Register = () => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();


    // const [error, setError] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        // const userData = Object.fromEntries(new FormData(e.target));
        const formData = new FormData(e.target);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('repass');
        const age = formData.get('age');

        if (password !== repass) {
            return;
        }

        register(username, email, password, age)
            .then(userData => {
                userLogin(userData);
                navigate('/');
            })
    }

    return (
        <section id="register-page">
            <form className="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <p className="field field-icon">
                        <label htmlFor="username"><span><i className="fas fa-user-astronaut"></i></span></label>
                        <input
                            // className={error.errorUserMsg ? "input-error" : null}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                        // onBlur={validateUsername}
                        />
                    </p>
                    {/* {error.errorUserMsg && <div className="errors">{error.errorUserMsg}</div>} */}

                    <p className="field field-icon">
                        <label htmlFor="email"><span><i className="fas fa-at"></i></span></label>
                        <input
                            // className={error.errorEmailMsg ? "input-error" : null}
                            type="email"
                            id="email"
                            name="email"
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

                    <p className="field field-icon">
                        <label htmlFor="repass"><span><i className="fas fa-lock"></i></span></label>
                        <input
                            // className={error.errorRepassMsg ? "input-error" : null}
                            type="password"
                            name="repass"
                            id="repass"
                            placeholder="*****"
                        // onBlur={validateRepass} 
                        />
                    </p>
                    {/* {error.errorRepassMsg && <div className="errors">{error.errorRepassMsg}</div>} */}

                    <p className="field field-icon">
                        <label htmlFor="age"><span><i class="fa-sharp fa-solid fa-list-ol"></i></span></label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            placeholder="Age (optional)" />
                    </p>
                    {/* <input className="btn submit" type="submit" defaultValue="Register" /> */}
                    <button type='submit'>Create Account</button>
                    <p className="text-center">
                        <span>Already registered? <Link to="/users/login">Log In</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}