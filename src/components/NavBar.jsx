import { Link } from "react-router-dom"
import '../styles/navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function NavBar(){
    return (
        <div>
        <div className="navbar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <ShoppingCartIcon />
                    </Link>
                </li>
            </ul>
        </div>
      </div>
    )
}