import Image from "next/image";
import styles from "./page.module.css";
import { getMeal, getMeals } from "@/app/_service/meals";
import { notFound } from "next/navigation";

export const generateMetadata = ({ params }) => {
  return { title: `${params.mealSlug}` };
};

export async function generateStaticParams({ params }) {
  const meals = await getMeals();
  const ids = meals.map((meal) => ({ mealSlug: String(meal.id) }));
  return ids;
}

async function page({ params }) {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replaceAll("\n", "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt="image" fill />
        </div>

        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

export default page;
