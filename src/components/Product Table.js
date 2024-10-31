import { useState, useEffect } from "react";

function ProductsTable() {
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const response = await fetch("https://671fe962e7a5792f052ff4d2.mockapi.io/ProductsTable");
        const data = await response.json();
        setProducts(data);
    }

    async function deleteProduct(e) {
        const id = e.target.value;
        const url = `https://671fe962e7a5792f052ff4d2.mockapi.io/ProductsTable/${id}`;
        
        const response = await fetch(url, {
            method: "DELETE"
        });
        
        if (response.ok) {
            setProducts(products => products.filter(product => product.id !== id)); // Update products list
        } else {
            console.error("Failed to delete product");
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []); // Dependency array added to only fetch once on mount

    return (
        <section className="products py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 mb-4">
                        <h2 className="section-title">Our Products Table</h2>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {Array.isArray(products) && products.map((product) => (
                            <tbody key={product.id}>
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className="btn btn-outline-success mx-3">Edit</button>
                                        <button className="btn btn-danger" value={product.id} onClick={deleteProduct}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </section>
    );
}

export default ProductsTable;
