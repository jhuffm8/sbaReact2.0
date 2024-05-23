import { useState } from "react"
import '../styles/cart.css'


export function Cart(){
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        carNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment Submitted!')
    }
    return(
        <div className="checkout-form">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </label>
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </label>
          <label>
            State:
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
          </label>
          <label>
            ZIP Code:
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
          </label>
  
          <h3>Payment Information</h3>
          <label>
            Card Number:
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
          </label>
          <label>
            Expiration Date:
            <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
          </label>
          <label>
            CVV:
            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
          </label>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
