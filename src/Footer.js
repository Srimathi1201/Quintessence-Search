import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="Contact-area">
                <p>We are here to answer your questions 24/7, NEED A CONSULTATION?</p>
            </div><div className="Contact-details">
                <div className="det">
                    <h3>Our Address</h3>
                    <p>Chennai, India</p>
                </div>
                <div className="det">
                    <h3>Our Mailbox</h3>
                    <p>Email: Vikram@quintessencesearchlabs.co.in</p>
                </div>
                <div className="det">
                    <h3>Our Phone</h3>
                    <p>Phone: +91 9790384763</p>
                </div>
            </div><div className="Copyrights">
                <p>&#169; 2023 <a> Quintessence Search Labs</a></p>
            </div>
        </>
    );
}

export default Footer;