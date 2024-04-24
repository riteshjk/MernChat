import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {signOutSuccess} from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = async() => {
		try{
			const res = await fetch("/api/auth/logout", {

				method: "POST",
			}) 
			const data = await res.json();
			if (!res.ok) {
				console.log(data.message);
			  } else {
				dispatch(signOutSuccess());
				navigate("/login");
			  }
		}
		catch(error){

			console.log(error);
		}
	}

	return (
		<div className='mt-auto'>	
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={handleLogout}/>
		</div>
	);
};
export default LogoutButton;