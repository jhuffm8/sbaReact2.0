import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import product1 from '../images/productImg1.jpg'
import '../styles/product.css'

export function ProductSelection() {
    return (

        <div className="products-container">
            <div className='card'>
                <img className='content' src={product1} alt='clothing' style={{width: "100%"}} />
                <div className='hover-text'>
                    <p>Clothing</p>
                </div>

            </div>
            <div className='card'>
                <img src={product1} alt='clothing' style={{width: "100%"}} />
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