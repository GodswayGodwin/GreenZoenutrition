
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");

  const products = [
    { name: "Smoothie Blend", price: 10, description: "Mixed berry organic smoothie." },
    { name: "Protein Powder", price: 25, description: "Plant-based protein supplement." },
    { name: "Moringa Powder", price: 15, description: "Nutrient-rich superfood powder." }
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const handleCheckout = () => alert("Redirecting to secure payment...");
  const handleSubscribe = () => {
    alert(`Thank you for subscribing with ${email}`);
    setEmail("");
  };

  return (
    <div>
      <Head>
        <title>GreenZoe Nutrition</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>GreenZoe Nutrition</h1>
        <p>Nourishing Lives with Nature’s Goodness</p>

        <h2>Products</h2>
        {products.map((product, idx) => (
          <div key={idx}>
            <h3>{product.name}</h3>
            <p>{product.description} - ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}

        <h2>Cart</h2>
        {cart.length === 0 ? <p>Cart is empty.</p> : cart.map((item, idx) => <p key={idx}>{item.name}</p>)}
        {cart.length > 0 && <button onClick={handleCheckout}>Checkout</button>}

        <h2>Newsletter</h2>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
        <button onClick={handleSubscribe}>Subscribe</button>
      </main>
    </div>
  );
}
