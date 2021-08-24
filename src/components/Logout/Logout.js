import React from 'react'
import { logout } from '../../redux/userSlice'
import { useCookies} from "react-cookie";
import { useDispatch } from 'react-redux'
export default function Logout() {
    const dispatch = useDispatch();
    const [cookie, , removeCookie] = useCookies(["usertoken"]);

    const handleLogoutSubmit = (event) => {
        event.preventDefault();
        dispatch(logout());
        removeCookie("usertoken");
    }

    return (
            <button onClick={handleLogoutSubmit}>Đăng xuất</button>
    )
}
