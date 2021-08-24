import React from 'react'
import { logout } from '../../redux/userSlice'
import { useCookies} from "react-cookie";
import { useDispatch } from 'react-redux'
export default function Logout() {
    const dispatch = useDispatch();
    const [cookie, , removeCookie] = useCookies(["user"]);

    const handleLogoutSubmit = (event) => {
        event.preventDefault();
        dispatch(logout());
        removeCookie("user");
    }

    return (
            <button onClick={handleLogoutSubmit}>Đăng xuất</button>
    )
}
