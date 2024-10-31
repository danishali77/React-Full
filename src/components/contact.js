function Contact() {
  return (
    <div>
      <section className="contact-us py-5">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-6 mb-4">
              <h2 className="mb-4">Contact Us</h2>
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            
            <div className="col-lg-6 mb-4">
              <h2 className="mb-4">Get in Touch</h2>
              <p>If you have any questions, feel free to reach out to us. We're here to help you.</p>
              <ul className="list-unstyled">
                <li><strong>Address:</strong> 123 Main Street, City, Country</li>
                <li><strong>Email:</strong> info@example.com</li>
                <li><strong>Phone:</strong> +123 456 7890</li>
                <li><strong>Business Hours:</strong> Monday - Friday, 9am - 6pm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;