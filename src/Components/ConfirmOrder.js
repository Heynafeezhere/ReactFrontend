import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import UserContext, { CartContext } from '../Context';
import { Link } from 'react-router-dom';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

function ConfirmOrder() {
    const baseUrl = "http://127.0.0.1:8000/api/";  // Use a constant base URL
    const userContext = useContext(UserContext);
    const { cartContext, setCartContext } = useContext(CartContext);
    const [isOrderProcessed, setIsOrderProcessed] = useState(false); // Flag to prevent duplicate API calls
    const [orderIdValue, setOrderIdValue] = useState(0);
    const [payMethod, setPayMethod] = useState('');

    // If user is not logged in, redirect to login page
    useEffect(() => {
        if (userContext.customerLogin === false || userContext.customerLogin === null) {
            window.location.href = '/customer/login';
        }
    });  // Run only when userLogin changes

    // Calculate the total price
    const calculateTotals = () => {
        let totalPrice = 0;
        cartContext.forEach(item => {
            totalPrice += item.product.product_price * item.product.product_quantity;
        });
        return totalPrice;
    };

    const totalAmount = calculateTotals(); // Calculate total amount

    useEffect(() => {
        if (cartContext && cartContext.length > 0 && !isOrderProcessed) {
            addOrderInTable();
        }
    }); // Trigger effect when cartContext or isOrderProcessed changes

    // Function to add order in the table
    function addOrderInTable() {
        const customer_id = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer', customer_id);
        formData.append('status', 'pending');
        formData.append('total_amount', totalAmount);

        // Send the order data to the API
        axios.post(`${baseUrl}order/`, formData)
            .then(function (response) {
                orderItem(response.data.orderId);  // Call the next function with the returned orderId
                setOrderIdValue(response.data.orderId);
                setIsOrderProcessed(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Function to add order items to the order
    function orderItem(orderId) {
        const orderItemArray = [];

        cartContext.forEach((cartItem) => {
            const item = {
                orderId: orderId,
                productId: cartItem.product.product_id,
                quantity: cartItem.product.product_quantity,
                unit_price: cartItem.product.product_price
            };
            orderItemArray.push(item);
        });

        // Send the order items data to the API
        axios.post(`${baseUrl}order/order-item/`, { order: orderItemArray })
            .then(function (response) {
                console.log(totalAmount);
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Function to clear the cart
    function clearCart() {
        setCartContext([]); // Clear cart context
        localStorage.setItem('cart', JSON.stringify([])); // Clear the cart in localStorage
    }

    function updateOrderStatus(orderStatus, transactionId) {
        axios.post(`${baseUrl}order/update-order-status/`, { orderId: orderIdValue, orderStatus: orderStatus, transactionId: transactionId, paymentMethod : payMethod })
        .then(function (response) {
            clearCart()
            window.location.href = '/order/success';
            
        })
        .catch(function (error) {
            window.location.href = '/order/failure';
            console.log(error);
        });
    }

    function changePaymentMethod(payMethod) {
        setPayMethod(payMethod)
    }

    function payNowButton() {
        if (payMethod != '') alert(`Payment processing using ${payMethod}`)
        else alert('Select payment Method')
    }

    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className="col-md-8 offset-2 mb-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fa fa-spinner fa-spin text-dark fa-3x" />
                            <h3 className="mt-3">Complete the payment to confirm your order</h3>
                            <h6 className=" text-muted mt-1">Order Id : {orderIdValue}</h6>
                            <p>Once payment is completed! You will receive an email with the order details.</p>
                        </div>
                    </div>
                    <div className='card p-4 mt-4'>
                        <form>
                            <div className='form-group'>
                                <label>
                                    <input type='radio' onChange={() => changePaymentMethod('upi')} name='payMethod' /> UPI
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <input type='radio' onChange={() => changePaymentMethod('paytm')} name='payMethod' /> paytm
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <input type='radio' onChange={() => changePaymentMethod('razorpay')} name='payMethod' /> RazorPay
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <input type='radio' onChange={() => changePaymentMethod('paypal')} name='payMethod' /> PayPal
                                </label>
                            </div>
                            <button type='button' onClick={payNowButton} className='btn btn-sm btn-success mt-2'>Next</button>
                            {
                                payMethod == 'paypal' &&
                                <PayPalScriptProvider options={{ "client-id": "Aey8Ohgm3wA42ETEs99yTzQXOtvgdpuOFzyJvpRWtwxD4dzxW4s6YuJX-knnAl7Bl5pQ9_UrKVcj_11p" }}>
                                    <PayPalButtons className='mt-3'
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            currency_code: "USD",
                                                            value: totalAmount,
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then(function (details) {
                                                updateOrderStatus('processed',details.id);
                                                alert('Transaction completed by ' + details.payer.name.given_name);
                                            });
                                        }}
                                    />
                                </PayPalScriptProvider>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default ConfirmOrder;
