import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import { profile, socialLinks } from '../data/portfolio.js';

export default function Contact() {
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [preparedMessage, setPreparedMessage] = useState(null);

  function handleChange() {
    setPreparedMessage(null);
    setStatus({ type: 'idle', message: '' });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setPreparedMessage(null);
    const form = event.currentTarget;
    const submitter = event.nativeEvent.submitter;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const channel = submitter?.value;

    if (!name || !email || !message) {
      setStatus({
        type: 'error',
        message: 'Veuillez renseigner votre nom, une adresse e-mail valide et votre message.',
      });
      return;
    }

    const messageBody = `Bonjour ${profile.givenName},\n\n${message}\n\nCordialement,\n${name}\n${email}`;
    let destination;

    if (channel === 'email' && socialLinks.email) {
      const subject = `Message depuis le portfolio - ${name}`;
      destination = `mailto:${socialLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
    } else if (channel === 'whatsapp' && socialLinks.whatsapp) {
      const whatsappUrl = new URL(socialLinks.whatsapp);
      whatsappUrl.searchParams.set('text', messageBody);
      destination = whatsappUrl.toString();
    } else {
      setStatus({
        type: 'error',
        message: 'Le moyen de contact choisi n’est pas disponible.',
      });
      return;
    }

    setPreparedMessage({ channel, destination });
    setStatus({
      type: 'success',
      message: 'Votre message est prêt. Cliquez sur le lien ci-dessous, puis confirmez son envoi dans l’application.',
    });
  }

  return (
    <section className="section-wrap contact-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Construisons la suite ensemble."
        description="Une idée, une proposition de stage ou une envie de collaborer ? Envoyez-moi un message par WhatsApp ou par e-mail."
      />
      <div className="contact-layout">
        <div className="contact-aside">
          <p>
            Choisissez votre moyen de contact : le message sera préparé avec vos coordonnées,
            puis vous pourrez le vérifier et confirmer son envoi dans WhatsApp ou votre messagerie.
          </p>
          <div className="contact-location">
            <span className="location-indicator" aria-hidden="true" />
            <span>Cotonou, Bénin</span>
          </div>
          {socialLinks.whatsapp && (
            <a
              className="contact-channel"
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
          {socialLinks.email && (
            <a className="contact-channel" href={`mailto:${socialLinks.email}`}>
              <span className="whatsapp-icon" aria-hidden="true">
                @
              </span>
              <span>
                <strong>E-mail</strong>
                <small>{socialLinks.email}</small>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Dites-moi quelques mots sur votre demande…"
              required
              rows="5"
            />
          </div>
          <div className="contact-actions">
            {socialLinks.whatsapp && (
              <button
                className="button button-primary submit-button"
                name="channel"
                type="submit"
                value="whatsapp"
              >
                Préparer sur WhatsApp <span aria-hidden="true">↗</span>
              </button>
            )}
            {socialLinks.email && (
              <button
                className="button button-secondary submit-button"
                name="channel"
                type="submit"
                value="email"
              >
                Préparer un e-mail <span aria-hidden="true">↗</span>
              </button>
            )}
          </div>
          {preparedMessage && (
            <a
              className={`button ${preparedMessage.channel === 'whatsapp' ? 'button-primary' : 'button-secondary'} submit-button prepared-contact-link`}
              href={preparedMessage.destination}
              rel="noreferrer"
              target="_blank"
            >
              {preparedMessage.channel === 'whatsapp'
                ? 'Ouvrir WhatsApp avec le message'
                : 'Ouvrir le brouillon d’e-mail'}
              <span aria-hidden="true">↗</span>
            </a>
          )}
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
