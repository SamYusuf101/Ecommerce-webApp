import React from 'react'

const Home = () => {
  return (
    <>
    HeroBanner
    <div className="products-heading">
       <h2>Best selling products</h2>
       <p>Necklace of many variations</p>
    </div>
    <div className="products-container">
      {['Product 1', 'Product 2'].map (
        (product) => product
      )}
    </div>

    Footer
    
    </>
  )
}

export default Home