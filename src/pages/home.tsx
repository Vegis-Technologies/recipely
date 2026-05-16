import { useEffect, useState } from "react";
import Navbar from "../components/shared/navbar";
import { RECIPE_CATEGORIES } from "../constants";
import { cn } from "../lib/utils";
import RecipeCard from "../components/shared/recipe-card";
import type { Recipe } from "../types";

function Home() {
  const [selectedRecipeCategory, setSelectedRecipeCategory] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const filteredRecipes = recipes.filter(
    (recipe) =>
      selectedRecipeCategory === "" ||
      recipe.mealType.includes(selectedRecipeCategory)
  );

  useEffect(() => {
    const getRecipes = () => {
      fetch("https://dummyjson.com/recipes?limit=100")
        .then((res) => res.json()) // convert from JSON to Javascript data type
        .then((data) => setRecipes(data?.recipes));
    };

    getRecipes();
  }, []);

  //   console.log("Receipes state:", recipes);

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="">
        <div className="container mx-auto px-4 py-5 md:px-16 md:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[64px] font-bold text-[#1C1C19]">
              Discover Your Next Favourite Meal
            </h1>
            <p className="text-lg text-[#9A9080]">
              Explore curated collections of recipes designed for the rhythm of
              slow living and mindful cooking.
            </p>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="">
        <div className="container mx-auto px-4 py-5 md:px-16 md:py-20">
          <div className="flex flex-col gap-12">
            <div className="flex justify-center gap-4 flex-wrap">
              {RECIPE_CATEGORIES.map((category) => (
                <button
                  key={category.value}
                  className={cn(
                    "rounded-[12px] px-8 py-3 text-sm text-[#58423B] font-medium bg-[#fff2dc]",
                    "cursor-pointer",
                    selectedRecipeCategory === category.value &&
                      "bg-[#C8522A] text-white"
                  )}
                  onClick={() => setSelectedRecipeCategory(category.value)}
                >
                  {category?.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  src={recipe.image}
                  type={recipe.cuisine}
                  rating={recipe.rating}
                  duration={
                    recipe.cookTimeMinutes + recipe.prepTimeMinutes + " mins"
                  }
                  name={recipe.name}
                  difficulty={recipe.difficulty}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </main>
  );
}

export default Home;
