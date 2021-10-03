import React from "react";
import '../App.css';
import './contact.css';
function Contact() {
    const backG={background: 'url(img/testimonials_bg.jpg)'};
  
  return (
    <div class="contact">
        <h2>Get in tough</h2>
        <p>Suspendisse vestibulum malesuada lacus dignissim</p><br/><br/><br/>
        <div class="row">
            <div class="col col-lg-5 col-12">
                <div class="c-img" style={backG}>
                    <h5>Address</h5>
                    <p>661 Lefferts, NY 11203, USA</p>
                    <h5>Email</h5>
                    <p>example@example.com</p>
                    <h5>Telephone</h5>
                    <p>+00 123 456 789</p>
                </div>
            </div>
            <div class="col col-lg-7 col-12">
                <form>
                    <input type="text" placeholder="name" required/>
                    <input type="email" placeholder="Email" required/><br/>
                    <input type="text" class="subject" required placeholder="Subject"/><br/>
                    <textarea placeholder="message" required></textarea>
                    <br/><br/><br/>
                    <button>send message</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Contact;
