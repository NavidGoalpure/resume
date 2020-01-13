import React from 'react';

const ContactForm = () => (
  <>
    <header>
      <h2>Get in touch</h2>
    </header>
    <div className="content">
      <p>
        I'd rather to message me by <strong>Email </strong>or <strong>Telegram </strong>but if you have problem with them, you can use this form.
       </p>
      <form data-netlify="true" data-netlify-honeypot="bot-field">
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="7"
            />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input
              type="submit"
              value="Send Message"
              className="button primary"
            />
          </li>
        </ul>
      </form>
    </div>
  </>
)
export default ContactForm
