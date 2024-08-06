"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMealAction(formData) {
  // const fd = Object.fromEntries(formData.entries());
  // console.log(fd);

  const meal = {
    creator: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    title: formData.get("title"),
    creator_email: formData.get("email"),
  };

  if (
    !meal.creator ||
    !meal.creator_email.includes("@") ||
    !meal.instructions ||
    !meal.summary ||
    !meal.title ||
    !meal.image
  ) {
    throw new Error("All Fields Required");
  }

  await saveMeal(meal);
  // revalidatePath(`/meals`);
  redirect("/meals");
}
