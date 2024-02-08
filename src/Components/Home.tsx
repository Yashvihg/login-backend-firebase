import "./Home.css";
import { useState } from "react";
import Image from "../assets/image.png";
import Frame from "../assets/Frame.png";
import AppStore from "../assets/App Store Black.png";
import PlayStore from "../assets/Google Play Black.png";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Do you have a mobile app?",
      answer:
        "Yes, please download the Kashi Darshan FROM Google Play Store OR Apple App Store TO CONTINUE USING the pass.",
    },
    {
      question: "How can I get the Kashi Darshan pass??",
      answer:
        "Simply visit the App Store or Google Play Store and search for our app.",
    },

    {
      question:
        "Will I receive expedited entry or any other privileges with Kashi Darshan?",
      answer:
        "No. Kashi Darshan offers you a single platform to book all your amenities. It doesn’t offer you expedited entries.",
    },

    {
      question: "How do I download the app?",
      answer:
        "Simply visit the App Store or Google Play Store and search for our app.",
    },

    {
      question: "How do I download the app?",
      answer:
        "Simply visit the App Store or Google Play Store and search for our app.",
    },

    {
      question: "How do I download the app?",
      answer:
        "Simply visit the App Store or Google Play Store and search for our app.",
    },
    // Add more FAQ items as needed
  ];

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/*One Component*/}

      <div className="containerFirst">
        <div className="text-div-1">
          <div className="content-container-1">
            <h3 className="pb-3">
              Explore the spiritual land of <br /> Lord Ram in Divine Ayodhya
            </h3>
            <p className="headingOne">
              Access over 30 popular Attractions, Live Events & Activities in
              Ayodhya City and so much more.
            </p>
            <div>
              <div>
                <img src={Frame} width={"120px"} alt="Logo" />
              </div>

              <div className="download-icons">
                <a>
                  <img src={AppStore} width={"150px"} alt="Logo" />
                </a>

                <a>
                  <img src={PlayStore} width={"150px"} alt="Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="colored-div-1">
          <div className="appImage mobileIcon">
            <img src={Image} className="imageOne" alt="Logo" />
          </div>
        </div>
      </div>

      {/*Second Component*/}
      <div className="containerSecond">
        <div className="text-div-2">
          <div className="content-container-2">
            <h3 className="pb-3">
              Exceptional Services, Exceptional Features: Elevating Your
              Experience with Our Premium Offerings
            </h3>
            <p className="headingOne">
              Access over 30 popular Attractions, Live Events & Activities in
              Ayodhya City and so much more.
            </p>
          </div>
        </div>
        <div className="colored-div-2">
          <div className="row">
            <div className="col-sm">
              {" "}
              <div className="row d-flex text-center ">
                <div className="col-sm">
                  <span className="material-symbols-outlined backIcon">
                    temple_hindu
                  </span>
                  <p>Darshan</p>
                </div>
                <div className="col-sm">
                  {" "}
                  <div className="col-sm">
                    <span className="material-symbols-outlined backIcon">
                      confirmation_number
                    </span>
                    <p>Tickets</p>
                  </div>
                </div>
                <div className="col-sm">
                  <span className="material-symbols-outlined backIcon">
                    local_parking
                  </span>
                  <p>Parking</p>{" "}
                </div>
                <div className="col-sm">
                  {" "}
                  <div className="col-sm">
                    <span className="material-symbols-outlined backIcon">
                      festival
                    </span>
                    <p>Events</p>{" "}
                  </div>
                </div>
              </div>
              <div className="row d-flex text-center ">
                <div className="col-sm">
                  <span className="material-symbols-outlined backIcon">
                    departure_board
                  </span>
                  <p>E-Bus</p>
                </div>
                <div className="col-sm">
                  <span className="material-symbols-outlined backIcon">
                    tour
                  </span>
                  <p>Tourists Places</p>{" "}
                </div>
                <div className="col-sm">
                  <span className="material-symbols-outlined backIcon">
                    hotel
                  </span>
                  <p>Hotels</p>{" "}
                </div>
                <div className="col-sm">
                  {" "}
                  <span className="material-symbols-outlined backIcon">
                    map
                  </span>
                  <p>Trips</p>{" "}
                </div>
              </div>
              <div className="row d-flex text-center ">
                <div className="col-sm">
                  <span className="material-symbols-outlined backIcon">
                    weekend
                  </span>
                  <p>Lounge Access</p>
                </div>
                <div className="col-sm">
                  <div className="col-sm">
                    <span className="material-symbols-outlined backIcon">
                      e911_emergency
                    </span>
                    <p>Emergency Helpline </p>{" "}
                  </div>
                </div>
                <div className="col-sm">
                  <span className="material-symbols-outlined backIcon">
                    accessible
                  </span>
                  <p>Wheel Chair </p>{" "}
                </div>
                <div className="col-sm">
                  <span className="material-symbols-outlined backIcon">
                    history
                  </span>
                  <p>History </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Third Component*/}

      <div className="containerThird">
        <div className="colored-div-3">
          {" "}
          <h3 className="pb-3">To book a tour guide fill out the form below</h3>
        </div>
        <div className="text-div-3">
          <div className="content-container-3">
            <form>
              <div className="form-group">
                <label className="form-label">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Booking Type:</label>
                <input
                  type="text"
                  id="bookingType"
                  name="bookingType"
                  placeholder="Booking Type"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Booking Date:</label>
                <input
                  type="date"
                  id="bookingDate"
                  name="bookingDate"
                  placeholder="Booking Date"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Start Point:</label>
                <input
                  type="text"
                  id="startPoint"
                  name="startPoint"
                  placeholder="Start Point"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Select Stop:</label>
                <input
                  type="text"
                  id="selectStop"
                  name="selectStop"
                  placeholder="Select Stop"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label className="form-label">Address:</label>
                <input type="text" id="address" name="address" required />
              </div>

              <button className="formOneButton" type="submit">
          Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/*Fourth Component*/}
      <div className="containerFourth">
        <div className="colored-div-4">
          <div className="appImage mobileIcon">
            <img src={Image} className="imageOne" alt="Logo" />
          </div>
        </div>
        <div className="text-div-4">
          <div className="content-container-4">
            <h3 className="pb-3">
              Ayodhya Municipal Corporation <br /> Download the App now.
            </h3>
            <p className="headingOne">
              Get access to over 12+ services on your fingertip and so much
              more.
            </p>
            <div>
              <div>
                <img src={Frame} width={"120px"} alt="Logo" />
              </div>

              <div className="download-icons">
                <a>
                  <img src={AppStore} width={"150px"} alt="Logo" />
                </a>

                <a>
                  <img src={PlayStore} width={"150px"} alt="Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Mini Component*/}
      <div className="containerMini">
        <div className="colored-div-mini">
          {" "}
          <div className="row">
            <div className="col-sm">
              <span className="material-symbols-outlined backIcon">
                pregnant_woman
              </span>
              <p>Birth Certificate </p>{" "}
            </div>
            <div className="col-sm">
              <span className="material-symbols-outlined backIcon">
                deceased
              </span>
              <p>Death Certificate </p>{" "}
            </div>
            <div className="col-sm">
              <span className="material-symbols-outlined backIcon">
                location_city
              </span>
              <p>Land Records </p>{" "}
            </div>
            <div className="col-sm">
              <span className="material-symbols-outlined backIcon">
                payments
              </span>
              <p>Bill Payments </p>{" "}
            </div>
            <div className="col-sm">
              <span className="material-symbols-outlined backIcon">
                accessible
              </span>
              <p>Wheel Chair </p>{" "}
            </div>
            <div className="col-sm">
              <span className="material-symbols-outlined backIcon">
                accessible
              </span>
              <p>Wheel Chair </p>{" "}
            </div>
            <div className="col-sm">
              <span className="material-symbols-outlined backIcon">
                accessible
              </span>
              <p>Wheel Chair </p>{" "}
            </div>
            <div className="col-sm">
              <span className="material-symbols-outlined backIcon">
                accessible
              </span>
              <p>Wheel Chair </p>{" "}
            </div>
          </div>
        </div>
      </div>

      {/*Five Component*/}

      <div className="containerFifth">
        <div className="text-div-5">
          <div className="content-container-5">
            <h3 className="pb-3">
              Please fillout the form to book tourist <br />
              guide
            </h3>
            <form>
              <div className="d-flex">
                <label></label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Fiest Name"
                  required
                />

                <label></label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  required
                />
              </div>

              <label></label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
              />

              <label>Email Address:</label>
              <input type="email" id="email" name="email" required />

              <label>Address:</label>
              <textarea id="address" name="address"></textarea>

              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </form>
          </div>
        </div>
        <div className="colored-div-5"></div>
      </div>

      {/*FAQ Component*/}

      <div className="faq-container">
        <h3 className="faq-heading">App FAQ Section</h3>

        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${openIndex === index ? "open" : ""}`}
              onClick={() => handleAccordionClick(index)}
            >
              {faq.question}
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
