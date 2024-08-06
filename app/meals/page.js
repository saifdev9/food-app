import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "../_components/MealsGrid";
import { Suspense } from "react";
import Loading from "../_components/loading";

export const metadata = {
  title: "Meals",
};

function page() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <MealsGrid />
        </Suspense>
      </main>
    </>
  );
}

export default page;
