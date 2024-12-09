import { Link } from 'react-router-dom';
import { CartContext } from '../Context';
import { useContext } from 'react';

function Checkout() {
    const { cartContext, setCartContext } = useContext(CartContext);

    // If the cart is empty, show a message
    if (cartContext.length === 0 || cartContext === null) {
        console.log('True');
        return (
            <h1 className='text-center'>Add Items to cart</h1>
        );
    }

    // Function to update quantity and recalculate total price
    const handleQuantityChange = (productId, newQuantity) => {
        // Ensure the newQuantity is a valid number
        if (isNaN(newQuantity) || newQuantity < 1) return;

        const updatedCart = cartContext.map(item => {
            if (item.product.product_id === productId) {
                item.product.product_quantity = newQuantity;
            }
            return item;
        });
        setCartContext(updatedCart); // Update context with the new cart
        updateLocalStorage(updatedCart); // Update localStorage to match context
    };

    // Helper function to update localStorage
    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Remove an item from the cart
    const removeCartHandler = (productId) => {
        const updatedCart = cartContext.filter(item => item.product.product_id !== productId);
        setCartContext(updatedCart); // Update context with the new cart
        updateLocalStorage(updatedCart); // Update localStorage to match context
    };

    // Calculate total quantity and total price based on current cart
    const calculateTotals = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cartContext.forEach(item => {
            totalQuantity += item.product.product_quantity;
            totalPrice += item.product.product_price * item.product.product_quantity;
        });
        return { totalQuantity, totalPrice };
    };

    const { totalQuantity, totalPrice } = calculateTotals();

    return (
        <section className="container mt-4">
            <h3>Shopping Cart <span>({totalQuantity})</span></h3>
            <div className="row mt-3">
                <div className="col-md-8 col-12">
                    <div className="table responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Item-Id</th>
                                    <th>Quantity</th>
                                    <th>Price(₹)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartContext.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <Link to={`/product/${item.product.product_name}/${item.product.product_id}`}>
                                                    {item.product.product_name}
                                                </Link>
                                            </td>
                                            <td>{item.product.product_id}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={item.product.product_quantity}
                                                    min="1"
                                                    step="1"
                                                    onChange={(e) => handleQuantityChange(item.product.product_id, parseInt(e.target.value))}
                                                    style={{ width: '60px' }}
                                                />
                                            </td>
                                            <td>₹ {(item.product.product_price * item.product.product_quantity).toLocaleString('en-US', {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })}</td>
                                            <td>
                                                <button
                                                    name="remove-cart"
                                                    title='Remove from cart'
                                                    onClick={() => removeCartHandler(item.product.product_id)}
                                                    className="btn btn-danger btn-block ms-2"
                                                >
                                                    <i className="fa-solid fa-trash-can"></i> Remove
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>Total</th>
                                    <th>₹ {totalPrice.toLocaleString('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td colSpan='6' align='right'>
                                        <Link to='/categories' className='btn btn-success'>
                                            <i className="fa-solid fa-cart-shopping" /> Continue Shopping
                                        </Link>
                                        <Link to='/order-confirmation' className='btn btn-primary ms-1'>
                                            <i className="fa-solid fa-credit-card" /> Proceed to Buy
                                        </Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
