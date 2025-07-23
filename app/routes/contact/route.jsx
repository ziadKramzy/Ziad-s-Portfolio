import { useForm, ValidationError } from '@formspree/react';
import styles from './contact.module.css';

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

export default function Contact() {
  const [state, handleSubmit] = useForm("xdkdedjn");

  if (state.succeeded) {
    return (
      <section className={styles.contact}>
        <div className={styles.complete} aria-live="polite">
          <h3 className={styles.completeTitle}>Message Sent</h3>
          <p className={styles.completeText}>
            I’ll get back to you within a couple days, sit tight
          </p>
          <a className={styles.completeButton} href="/">Back to homepage</a>
        </div>
        <footer className={styles.footer}>
          © 2025 Zeyad Ramzy. Crafted by yours truly
        </footer>
      </section>
    );
  }

  return (
    <section className={styles.contact}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <h1 className={styles.title}>Say hello</h1>
        <div className={styles.divider} />
        {/* Honeypot field */}
        <input
          className={styles.botkiller}
          type="text"
          name="name"
          tabIndex="-1"
          autoComplete="off"
          style={{ display: 'none' }}
        />
        <input
          required
          className={styles.input}
          data-status="entered"
          autoComplete="email"
          placeholder="Your email"
          type="email"
          name="email"
          maxLength={MAX_EMAIL_LENGTH}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          className={styles.input}
          data-status="entered"
          autoComplete="off"
          placeholder="Message"
          name="message"
          maxLength={MAX_MESSAGE_LENGTH}
          rows={6}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          className={styles.button}
          type="submit"
          disabled={state.submitting}
        >
          <span className={styles.buttonIcon}>▶</span>
          {state.submitting ? "Sending..." : "Send message"}
        </button>
      </form>
      <footer className={styles.footer}>
        © 2025 Zeyad Ramzy. Crafted by yours truly
      </footer>
    </section>
  );
}