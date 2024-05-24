import { useState, useEffect } from "react"
import '../styles/cart.css'
const BASE_URL = `http://localhost:8080/`

export function Cart(){
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
              items: [
                { id: 1, quantity: 5},
                { id: 2, quantity: 1}
              ]
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          if(res.ok) return  res.json()
          

          
        } catch (error) {
          
        }
        alert('Payment Submitted!')
    }
    return(
        <div className="checkout-form">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          {/* <h3>Shipping Information</h3>
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
          </label> */}
  
          <button type="submit" onClick={handleSubmit}>Purchase</button>
        </form>
      </div>
    );
  };

  