"use client";
import ImagePicker from "@/app/_components/ImagePicker";
import styles from "./page.module.css";
import { shareMealAction } from "../../_service/actions";
import { useFormStatus } from "react-dom";

export default function ShareMealPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMealAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker name="image" label="Your image" />
          <Button />
        </form>
      </main>
    </>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <p className={styles.actions}>
      <button disabled={pending} type="submit">
        {pending ? "Submitting..." : "Share Meal"}
      </button>
    </p>
  );
}
