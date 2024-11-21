import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="text-center">
                        <p>&copy; 2024 <a href="https://github.com/mchmddiazz">mchmddiazz</a>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
