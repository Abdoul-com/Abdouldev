import SectionHeading from '../components/SectionHeading.jsx';
import { profile, socialLinks } from '../data/portfolio.js';

const questions = [
  {
    question: 'Quels domaines vous intéressent ?',
    answer: `Je m’intéresse à ${profile.domains.join(', ').toLowerCase()}. Je poursuis mon apprentissage et ne présente pas ces domaines comme des expertises confirmées.`,
  },
  {
    question: 'Quels projets sont présentés sur le portfolio ?',
    answer:
      'Les projets prévus sont EduBenin, une application de gestion scolaire, ce portfolio personnel et des créations numériques. Les technologies, visuels et liens sont ajoutés uniquement lorsqu’ils sont confirmés.',
  },
  {
    question: 'Comment vous contacter ?',
    answer: `Je suis basé à ${profile.location}. Vous pouvez me joindre directement sur WhatsApp.`,
    link: socialLinks.whatsapp,
  },
  {
    question: 'Comment envoyer un message depuis le formulaire ?',
    answer:
      'Renseignez vos coordonnées et votre message, puis choisissez WhatsApp ou e-mail. Cliquez ensuite sur le lien qui apparaît : votre message sera prérempli et vous pourrez le vérifier avant de confirmer son envoi.',
  },
];

export default function FAQ() {
  return (
    <section className="section-wrap faq-section" id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Quelques réponses utiles."
        description="Mon parcours, mes projets et les moyens de me contacter."
      />
      <div className="faq-list">
        {questions.map(({ question, answer, link }, index) => (
          <details className="faq-item" key={question}>
            <summary>
              <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="faq-question">{question}</span>
              <span className="faq-toggle" aria-hidden="true" />
            </summary>
            <div className="faq-answer">
              <p>{answer}</p>
              {link && (
                <a href={link} target="_blank" rel="noreferrer">
                  Écrire sur WhatsApp <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
