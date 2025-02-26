import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePayment } from "./PaymentContext";

const Thankyou = () => {

    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(15);
    const { setIsPaymentSuccessful } = usePayment();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            setIsPaymentSuccessful(false)
            navigate('/');
        }, 15000);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, [navigate, setIsPaymentSuccessful]);



    return (
        <div className='h-screen w-screen overflow-y-scroll'>
            <nav className="nav">
                <div className="logo-container">
                    <img className="logo" src="assets/logo.png" alt="logo" />
                </div>
            </nav>
            <div className="container">
                <div className="container-left">
                    <h2 className="title">
                        Thank You<span className="title-s"> for trusting us!</span>
                    </h2>
                    <p className="text">
                        Your journey towards meaningful connections has begun. We appreciate your trust and are excited to help you find your perfect match.
                    </p>
                    <div>
                        <button className="expore-btn" onClick={() => {
                            navigate('/');
                        }}>
                            Explore More
                        </button>
                    </div>
                    <div className='font-normal text-lg text'> You will be redirected to the home page in <span className="text-black"> {countdown} </span> seconds. </div>
                    <img src="/assets/wave-left.png" className="wave-left" />
                </div>

                <div className="container-right">
                    <img
                        className="couples-img couples-img-desktop"
                        src="/assets/couples.png"
                        alt="Thank You"
                    />
                    <img
                        className="couples-img couples-img-mobile"
                        src="/assets/couples-mobile.png"
                        alt="Thank You"
                    />
                    <img src="/assets/details.png" className="details-img" />
                    <img src="/assets/wave-right.png" className="wave-right" />
                </div>
            </div>
        </div>

    )
}

export default Thankyou
