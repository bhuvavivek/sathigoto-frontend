import { useRazorpay } from "react-razorpay";
import { usePayment } from "./PaymentContext";


const PaymentButton = () => {

    const { setIsPaymentSuccessful } = usePayment();
    const APiURL = import.meta.env.VITE_API_URL

    const { isLoading, Razorpay } = useRazorpay();

    const handlePayment = async () => {
        const response = await fetch(`${APiURL}/create-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()

        const options = {
            key: import.meta.env.VITE_API_KEY,
            amount: data.amount, // Amount in paise
            currency: "INR",
            name: "SathiGoto",
            description: "Test Transaction",
            // image:'',
            order_id: data.order_id, // Generate order_id on server
            handler: (response) => {
                fetch(`${APiURL}/verify-payment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature
                    })
                }).then(res => res.json())
                    .then(data => {
                        if (data.status === 'ok') {
                            setIsPaymentSuccessful(true)
                            window.location.href = '/payment-success';
                        } else {
                            setIsPaymentSuccessful(false)
                            alert('Payment verification failed');
                        }
                    }).catch(error => {
                        console.error('Error:', error);
                        alert('Error verifying payment');
                    });
            },

            theme: {
                color: "#F37254",
            },
        }

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    };

    return (
        <div>
            <button className="payment-btn" onClick={handlePayment} disabled={isLoading} >
                Book Your Slot
            </button>
        </div>
    );
};

export default PaymentButton;
