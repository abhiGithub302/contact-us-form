// src/components/ContactUsForm.jsx
import React, { useState } from "react";
import "./ContactUsForm.css";
import FileDownload from "js-file-download";

import axios from "axios";

const ContactUsForm = () => {
  // State Initialization
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  

  // Input Change Handlers
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);


  const download = (e) => {
    e.preventDefault();
    axios
      .post("https://send-mail-2vrn.onrender.com/api/download", null, {
        responseType: 'blob'
      })
      .then((res) => {
        FileDownload(res.data, "Setup_connectApp.exe");
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };
  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      firstName,
      email,
      companyName,
      mobileNumber,
      message,
    });
    const data = {
      firstName,
      email,
      companyName,
      mobileNumber,
      message,
    };
    axios
      .post("https://send-mail-2vrn.onrender.com/api/formEndpoint", data)
      .then((response) => {
        setSent(true);
        alert("Form submitted successfully!");
        // console.log("Server response:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    // Reset the form after submission
    resetForm();
  };

  // Form Reset Handler
  const resetForm = () => {
    setFirstName("");
    setEmail("");
    setCompanyName("");
    setMobileNumber("");
    setMessage("");
    setTimeout(() => {
      setSent(false);
    }, 30000);
  };

  return (
    <div>
  <button onClick={(e) =>download(e)}>Downloads</button>
      <div className="contactus_container" id="contactUsId">
        <div class="contactus_box ">
          <div class="time_line_iconss">
            <i class="fas fa-headphones"></i>
          </div>
          <h2>Sales Team</h2>

          <address class="contact-us-content_bottom-info-details">
            <a href="mailto:sales@itinfrasolutions.co.in">
              <div class="contact-info-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> sales@itinfrasolutions.co.in</span>
              </div>
            </a>
            <a href="tel:+919868304432">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9868304432 </span>
              </div>
            </a>
            <div class="working-hours">
              <div class="contact-info-text">
                <strong class="text-color-neutral-2">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <span>Working Hours:</span>
                </strong>
                10:00 am to 6:00 pm (Monday ~ Saturday) <br />
              </div>
            </div>
          </address>
        </div>
        {/* technical support box */}
        <div class="contactus_box">
          <div class="time_line_iconss">
            <i class="fa-solid fa-headset"></i>
          </div>
          <h2>Technical Support Team</h2>

          <address class="contact-us-content_bottom-info-details">
            <a href="mailto:support@itinfrasolutions.co.in">
              <div class="contact-info-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> support@itinfrasolutions.co.in</span>
              </div>
            </a>
            <a href="tel:+919868304432">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9868304432 </span>
              </div>
            </a>
            <div class="working-hours">
              <div class="contact-info-text">
                <strong class="text-color-neutral-2">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <span>Working Hours:</span>
                </strong>
                10:00 am to 6:00 pm (Monday ~ Saturday) <br />
              </div>
            </div>
          </address>
        </div>
      </div>
      <div className="contactus_container">
        <div class="contactus_box ">
          <div class="time_line_iconss">
            <i class="fas fa-coins"></i>
          </div>
          <h2>Finance Team</h2>

          <address class="contact-us-content_bottom-info-details">
            <a href="mailto:accounts@itinfrasolutions.co.in">
              <div class="contact-info-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> accounts@itinfrasolutions.co.in</span>
              </div>
            </a>
            <a href="tel:+919868304432">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9868304432 </span>
              </div>
            </a>
            <div class="working-hours">
              <div class="contact-info-text">
                <strong class="text-color-neutral-2">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <span>Working Hours:</span>
                </strong>
                10:00 am to 6:00 pm (Monday ~ Saturday) <br />
              </div>
            </div>
          </address>
        </div>
        {/* hr team box */}
        <div class="contactus_box">
          <div class="time_line_iconss">
            <i class="fa-solid fa-user-tie"></i>
          </div>
          <h2>HR Team</h2>

          <address class="contact-us-content_bottom-info-details">
            <a href="mailto:hr@itinfrasolutions.co.in">
              <div class="contact-info-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> hr@itinfrasolutions.co.in</span>
              </div>
            </a>
            <a href="tel:+919868304432">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9868304432 </span>
              </div>
            </a>
            <div class="working-hours">
              <div class="contact-info-text">
                <strong class="text-color-neutral-2">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <span>Working Hours:</span>
                </strong>
                10:00 am to 6:00 pm (Monday ~ Saturday) <br />
              </div>
            </div>
          </address>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="contactHead">
                <h1>Contact Us Form:</h1>
                <p>
                  (Tell us a bit about yourself, and we'll get in touch as soon
                  as we can.)
                </p>
              </div>
              <label htmlFor="firstName">Full Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                placeholder="Write Your Full Name"
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter Your Email Address"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="CompanyName"
                value={companyName}
                placeholder="Your Company Name"
                onChange={handleCompanyNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="tel"
                id="mobileNumber"
                value={mobileNumber}
                placeholder="Your Mobile Number"
                onChange={handleMobileNumberChange}
                maxLength={15}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                rows={12}
                placeholder="Write Your Message Here"
                onChange={handleMessageChange}
                required
              />
            </div>
            <div className={sent ? "msg msgAppear" : "msg"}>
              Thanks for Your Message !
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="map-and-contact">
          <div className="contact-info">
            <h1>Contact Us:</h1>
            <br />
            <h2>It Infra Solutions</h2>

            <div class="contact-info-text">
              <i class="fa-solid fa-location-dot"></i>
              <span id="span">
                A- 48/2, Mahavir Enclave, Near Dwarka puri bus stand
                NewDelhi-110059{" "}
              </span>
            </div>

            <a href="tel:+919015739026">
              <div class="contact-info-text">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <span>+91 9015739026 </span>
              </div>
            </a>
            <a href="mailto:sk@itinfrasolutions.co.in">
              <div class="contact-info-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> sk@itinfrasolutions.co.in</span>
              </div>
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9591933233382!2d77.07798787620673!3d28.601000975681977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b82c54a2bab%3A0xf07e443bc86e4a52!2sIT%20Infra%20Solutions!5e0!3m2!1sen!2sin!4v1707210514583!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );

};

export default ContactUsForm;
