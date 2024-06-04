import { Link } from "react-router-dom";

function Header({login}){
    
    return(
        <div className=" flex gap-4  justify-center bg-teal-600 p-4">
          
            <Link to='/signup'>Signup</Link>
            
            <Link to='/'>Login</Link>
          

        </div>
    )
}
export default Header;