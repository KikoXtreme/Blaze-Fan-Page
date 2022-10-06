import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { logout } from "../../../services/authService";

export const Logout = () => {
    const { user, userLogout } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            })
    })

    return null;
}