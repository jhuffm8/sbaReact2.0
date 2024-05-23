import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import product1 from '../images/productImg1.jpg'
import product2 from '../images/bottomsImg.jpg'
import '../styles/product.css'

export function ProductSelection() {
    return (

        <div className="products-container">
            <div className='card'>
                <Link to='/tops'>
                    <img className='content' src={product1} alt='clothing' style={{width: "100%"}} />
                    <div className='hover-text'>
                        <p>Tops</p>
                    </div>
                </Link>
            </div>
            <div className='card'>
                <img src={product2} alt='clothing' style={{width: "100%"}} />
                <div className='hover-text'>
                    <p>Bottoms</p>
                </div>

            </div>
            <div className='card'>
                <img src={product1} alt='clothing' style={{width: "100%"}} />
                <div className='hover-text'>
                    <p>Accessories</p>
                </div>

            </div>


        </div>
    )
}