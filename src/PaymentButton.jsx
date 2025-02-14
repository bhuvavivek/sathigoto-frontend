import axios from "axios";
import { useState } from "react";

const PaymentButton = () => {
    const [loading, setLoading] = useState(false);
    const [paymentLink, setPaymentLink] = useState("");

    const handlePayment = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/initiate-payment", {
                amount: 1, // Amount in your currency
                user: "9876543210", // User's phone number
            });

            if (response.data.success) {
                setPaymentLink(response.data.payment_link);
                window.location.href = response.data.payment_link; // Redirect user to QuickPay
            } else {
                alert("Payment request failed!");
            }
        } catch (error) {
            console.error("Payment Error:", error);
            alert("An error occurred while processing payment.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button className="payment-btn" onClick={handlePayment} disabled={loading}>
                {loading ? "Processing..." : "Book Your Slot"}
            </button>
        </div>
    );
};

export default PaymentButton;
