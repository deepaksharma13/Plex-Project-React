import React,{useState, useEffect} from 'react'
import {product_API} from '../utilis/api'

function TyreSold() {
    const [products, setProducts] = useState([]); 
    const [page, setPage] = useState(1); 
    const [loading, setLoading] = useState(false); 
  
    // Function to fetch products from the API
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${product_API}${page}`
        );
        const data = await response.json();
        setProducts((prevProducts) => [...prevProducts, ...data]); 
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  

    useEffect(() => {
      fetchProducts();
    }, [page]);
  
    // Function to handle the "View More" button click
    const handleViewMore = () => {
      setPage((prevPage) => prevPage + 1); 
    };
  return (
    <section className='soldWrap'>
      <p className="para">Tyres sold by this Dealer
      </p>
      <div className='productMain'>
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: "20px" }} className='productInner'>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width={100} />
          </div>
        ))}
      </div>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <button className='viewMoreBtn' onClick={handleViewMore}>View More</button>
      )}
    </section>
  )
}

export default TyreSold
