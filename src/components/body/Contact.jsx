import React from 'react'
import '../body/contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contactez-nous</h2>
      <p>N'hésitez pas à nous envoyer un message si vous avez des questions ou des commentaires.</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default Contact
