
import './Footer.css'
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div><div className="container-fluid pt-5 pb-5 mainContainer">
    <div className="container">
        <div className="row">
            <div className="col-sm">
            <img src={logo} width={"175px"} alt="Logo" />
            </div>
            <div className="col-sm">
                <h4 className="footer_heading">Mandir</h4>
                <ul className="footer_list">
                    <li>Visit Ram Mandir</li>
                    <li>Aarti Pass</li>
                    <li>Donation to Ram Mandir</li>
                    <li>Events</li>
                    <li>Tourists Places</li>
                </ul>
            </div>
            <div className="col-sm">
                <h4 className="footer_heading">Services</h4>
                <ul className="footer_list">
                    <li>Parking Servies</li>
                    <li>Home Stay Bookings</li>
                    <li>E-Bus Seva</li>
                    <li>Wheelchair Services</li>
                    <li>Utilities</li>
                </ul>
            </div>
            <div className="col-sm">
                <h4 className="footer_heading"> About Us</h4>
                <ul className="footer_list">
                    <li>Term of Use</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Refund Policy</li>
                    <li>Advertise</li>
                </ul>
            </div>

            <div className="col-sm">
                <h4 className="footer_heading"> Contact Us</h4>
                <p className="footer_para"> <b>Address:</b> Civil Lines, Kosi Parikrama Rd, Marg, Ayodhya, Uttar Pradesh 224001</p>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Footer