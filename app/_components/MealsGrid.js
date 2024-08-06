import MealItems from "./MealItems";
import styles from "./MealsGrid.module.css";
import { getMeals } from "../_service/meals";

export const revalidate = 0;

async function MealsGrid() {
  const meals = await getMeals();

  // console.log(meals);
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItems {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
