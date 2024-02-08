import "./FAQ.css";
import { useState } from "react";
const FAQ = () => {
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
      <div className="containerFAQ">
        <div className="text-div-11">
          {/*FAQ Component*/}

          <div className="faq-container-2">
            <h3 className="faq-heading-2">App FAQ Section</h3>

            {faqData.map((faq, index) => (
              <div key={index} className="faq-item-2">
                <div
                  className={`faq-question-2 ${
                    openIndex === index ? "open" : ""
                  }`}
                  onClick={() => handleAccordionClick(index)}
                >
                  {faq.question}
                </div>
                {openIndex === index && (
                  <div className="faq-answer-2">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="colored-div-11">dsafsfsddfsd</div>
      </div>
    </div>
  );
};

export default FAQ;
