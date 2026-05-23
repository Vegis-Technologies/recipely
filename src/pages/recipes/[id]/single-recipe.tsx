import { useParams } from "react-router";
import Navbar from "../../../components/shared/navbar";
import Footer from "../../../components/shared/footer";
import { cn } from "../../../lib/utils";
import { PiBookOpenText } from "react-icons/pi";
import { useEffect, useState } from "react";
import type { Recipe } from "../../../types";
import SingleRecipeDetail from "../../../components/shared/single-recipe-detail";
import { CgDanger, CgSpinner } from "react-icons/cg";

export default function SingleRecipePage() {
  const params = useParams();
  const [recipe, setRecipe] = useState<Recipe>(null);
  const [isRecipeLoading, setIsRecipeLoading] = useState(true);
  const [isRecipeError, setIsRecipeError] = useState(false);
  const [checkedIngredientsObjects, setCheckedIngredientsObjects] = useState(
    {}
  );

  useEffect(() => {
    const getSingleRecipeById = (id: string | number) => {
      setIsRecipeError(false);
      setIsRecipeLoading(true);
      fetch(`https://dummyjson.com/recipes/${id}`)
        .then((res) => {
          // If the request is successful
          if (res.status >= 200 && res.status <= 299) {
            setIsRecipeError(false);
            return res.json();
          }

          setIsRecipeError(true);
          return null;
        })
        .then((data) => {
          setRecipe(data);
          setIsRecipeLoading(false);
        });
    };

    getSingleRecipeById(params?.id);
  }, [params?.id]);

  return (
    <main>
      <Navbar />

      {isRecipeLoading && !isRecipeError && (
        <section className="w-screen h-[calc(100vh-80px)]">
          <div className="container mx-auto px-4 py-5 md:px-16 md:py-20 h-full">
            <div className="flex justify-center items-center h-full">
              <CgSpinner className="animate-spin text-6xl text-[#C8522A]" />
            </div>
          </div>
        </section>
      )}

      {!isRecipeLoading && isRecipeError && (
        <section className="w-screen h-[calc(100vh-80px)]">
          <div className="container mx-auto px-4 py-5 md:px-16 md:py-20 h-full">
            <div className="flex flex-col gap-4 justify-center items-center h-full">
              <CgDanger className="text-8xl text-[#4A7C59]" />
              <h1 className="text-4xl font-bold text-[#C8522A]">Opps</h1>
              <p className="text-lg">
                Recipe not found or does not exist. Try again
              </p>
            </div>
          </div>
        </section>
      )}

      {!isRecipeLoading && !isRecipeError && recipe && (
        <>
          <section>
            <div className="container mx-auto px-4 py-5 md:px-16 md:py-20">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-7">
                  <img
                    src={recipe?.image}
                    className="w-full h-auto object-cover object-center rounded-[8px] aspect-[1.1/1]"
                  />
                </div>
                <div className="col-span-5 space-y-6">
                  <div className="flex gap-2 items-center justify-start">
                    {recipe?.tags?.map((tag) => (
                      <span
                        className={cn(
                          "bg-[#F0EBE0] text-[#58423B] px-4 py-1 rounded-[12px]",
                          "text-sm font-medium leading-[16.8px] tracking-[0.7px]"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="font-bold text-[64px] leading-[70.4px] tracking-[-1.28px]">
                    {recipe?.name}
                  </h1>

                  <p className="text-[#58423B] text-lg italic leading-[30.6px]">
                    A meditative dish that celebrates the natural sweetness of
                    root vegetables, enhanced with wild honey and toasted cumin
                    seeds.
                  </p>

                  {/* Overivew */}
                  <div
                    className="bg-white p-10 rounded-[8px] grid grid-cols-2 gap-8"
                    style={{
                      boxShadow: "0px 10px 30px rgba(200, 82, 42, 0.05)",
                    }}
                  >
                    <SingleRecipeDetail
                      icon="clock"
                      label="Prep Time"
                      value={recipe?.prepTimeMinutes + " mins"}
                    />
                    <SingleRecipeDetail
                      icon="stopwatch"
                      label="Cook Time"
                      value={recipe?.cookTimeMinutes + " mins"}
                    />
                    <SingleRecipeDetail
                      icon="cutlery"
                      label="Servings"
                      value={recipe?.servings}
                    />
                    <SingleRecipeDetail
                      icon="burn"
                      label="Calories"
                      value={recipe?.caloriesPerServing + " kcal"}
                    />
                  </div>

                  {/* Button Container */}
                  <div className="">
                    <button
                      className={cn(
                        "bg-[#C8522A] py-5 px-0 flex justify-center items-center gap-2 w-full",
                        "text-white text-sm font-medium leading-[16.8px] tracking-[0.7px]",
                        "rounded-[4px]"
                      )}
                    >
                      <PiBookOpenText />
                      Save to My Collections
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto px-4 py-5 md:px-16 md:py-20">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-5 space-y-8">
                  <div className="">
                    <h1 className="text-[28px] font-semibold">Ingredients</h1>
                  </div>
                  <div className="flex flex-col gap-5">
                    {recipe?.ingredients?.map((ingredient, index) => (
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          className="w-5 h-5 border-[#8B716A] accent-[#C8522A]"
                          checked={checkedIngredientsObjects[index]}
                          onChange={(e) => {
                            const isChecked = e.target.checked;

                            setCheckedIngredientsObjects((prev) => ({
                              ...prev,
                              [index]: isChecked,
                            }));

                            // if (isChecked) {
                            //   setCheckedIngredients((prev) => [...prev, index]);
                            //   return;
                            // }

                            // setCheckedIngredients((prev) =>
                            //   prev.filter((checkedIndex) => checkedIndex !== index)
                            // );
                          }}
                        />
                        <p
                          className={cn(
                            "leading-[25.6px]",
                            // checkedIngredients.some(
                            //   (checkedIndex) => checkedIndex === index
                            // ) && "line-through italic"
                            checkedIngredientsObjects[index] &&
                              "line-through italic"
                          )}
                        >
                          {ingredient}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-7 space-y-8">
                  <div className="">
                    <h1 className="text-[28px] font-semibold">Preparation</h1>
                  </div>
                  <div className="flex flex-col gap-5">
                    {/* single prep */}
                    {recipe?.instructions?.map((instruction, index) => (
                      <div className="flex gap-8">
                        <div className="">
                          <h1 className="font-bold text-[#C8522A] text-[32px] leading-[12px]">
                            {(index + 1).toString().padStart(2, "0")}
                          </h1>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-[#4A7C59] leading-[16.8px] tracking-[1.4px] uppercase">
                            Step {index + 1}:
                          </p>
                          <p className="text-lg leading-[30.6px]">
                            {instruction}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
