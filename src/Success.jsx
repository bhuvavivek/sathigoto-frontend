import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="message-box _success">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                        <h2> Your payment was successful </h2>
                        <p> Thank you for your payment. We will <br />
                            be in contact with more details shortly. </p>
                        <div className='mt-1 text-black font-normal text-lg'> You will be redirected to the home page in {countdown} seconds. </div>
                        <Link to={'/'} className="mt-2 underline font-black text-lg">Go To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
