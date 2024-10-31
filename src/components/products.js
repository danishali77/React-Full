import { useState, useEffect } from "react";

function Products() {
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
        console.log(products);
    }); 

    return (
        <section className="products py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 mb-4">
                        <h2 className="section-title">Our Products</h2>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top h-100" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Price: ${product.price}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;
