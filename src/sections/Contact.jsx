import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import { socialLinks } from '../data/portfolio.js';

const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();

export default function Contact() {
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();

    if (!contactEndpoint) {
      setStatus({
        type: 'error',
        message:
          'Le formulaire n’est pas encore relié à un service d’envoi. Vos informations n’ont pas été transmises.',
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus({ type: 'loading', message: 'Envoi du message en cours…' });

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Le service de contact a répondu avec le statut ${response.status}.`);
      }

      form.reset();
      setStatus({ type: 'success', message: 'Message envoyé. Merci pour votre prise de contact !' });
    } catch (error) {
      console.error('Échec de l’envoi du formulaire de contact.', error);
      setStatus({
        type: 'error',
        message:
          'Le message n’a pas pu être envoyé. Réessayez plus tard ou contactez-moi par un autre moyen.',
      });
    }
  }

  return (
    <section className="section-wrap contact-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Construisons la suite ensemble."
        description="Une idée, une proposition de stage ou une envie de collaborer ? Laissez-moi un message."
      />
      <div className="contact-layout">
        <div className="contact-aside">
          <p>
            Vous préférez un échange direct ? Écrivez-moi sur WhatsApp. Le formulaire
            ci-contre reste disponible, mais son envoi par e-mail nécessite une configuration.
          </p>
          <div className="contact-location">
            <span className="location-indicator" aria-hidden="true" />
            <span>Cotonou, Bénin</span>
          </div>
          {socialLinks.whatsapp && (
            <a
              className="contact-whatsapp"
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <span className="whatsapp-icon" aria-hidden="true">
                ↗
              </span>
              <span>
                <strong>WhatsApp</strong>
                <small>+229 015 120 106</small>
              </span>
              <span className="whatsapp-arrow" aria-hidden="true">
                →
              </span>
            </a>
          )}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="contact-name">Votre nom</label>
            <input
              autoComplete="name"
              id="contact-name"
              maxLength="100"
              name="name"
              placeholder="Nom et prénom"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="contact-email">Votre adresse e-mail</label>
            <input
              autoComplete="email"
              id="contact-email"
              maxLength="254"
              name="email"
              placeholder="vous@exemple.com"
              required
              type="email"
            />
          </div>
          <div className="form-row">
            <label htmlFor="contact-message">Votre message</label>
            <textarea
              id="contact-message"
              maxLength="5000"
              name="message"
              placeholder="Dites-moi quelques mots sur votre demande…"
              required
              rows="5"
            />
          </div>
          <button
            className="button button-primary submit-button"
            disabled={status.type === 'loading'}
            type="submit"
          >
            {status.type === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
            {status.type !== 'loading' && <span aria-hidden="true">↗</span>}
          </button>
          <p
            aria-live="polite"
            className={`form-status${status.type === 'error' ? ' is-error' : ''}${status.type === 'success' ? ' is-success' : ''}`}
            role={status.type === 'error' ? 'alert' : 'status'}
          >
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}
