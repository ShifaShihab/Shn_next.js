import React, { useState, useEffect } from 'react';
import { ChefHat, Plus, X, Search, Clock, Users, Sparkles, Heart, Star, ExternalLink } from 'lucide-react';

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  youtubeUrl: string;
}

const pantryRecipes: Recipe[] = [
  {
    id: 1,
    title: "Simple Garlic Butter Pasta",
    description: "Classic comfort food using just pasta, garlic, butter, and basic seasonings from your pantry.",
    ingredients: ["pasta", "garlic", "butter", "olive oil", "salt", "black pepper"],
    instructions: [
      "Boil pasta in salted water according to package directions",
      "Heat butter and olive oil in a large pan",
      "Add minced garlic and sauté until fragrant (30 seconds)",
      "Toss cooked pasta with garlic butter, season with salt and pepper"
    ],
    cookTime: "12 mins",
    servings: 2,
    difficulty: "Easy",
    tags: ["Quick", "Comfort Food", "Pantry Staples"],
    youtubeUrl: "https://www.youtube.com/watch?v=bJUiWdM__Qw"
  },
  {
    id: 2,
    title: "Basic Scrambled Eggs",
    description: "Perfect fluffy scrambled eggs using just eggs, butter, salt, and pepper - a student essential!",
    ingredients: ["eggs", "butter", "salt", "black pepper", "milk"],
    instructions: [
      "Crack eggs into a bowl and whisk with a splash of milk",
      "Heat butter in a non-stick pan over low heat",
      "Pour in eggs and gently stir continuously",
      "Season with salt and pepper, serve immediately"
    ],
    cookTime: "5 mins",
    servings: 1,
    difficulty: "Easy",
    tags: ["Breakfast", "Protein", "Quick"],
    youtubeUrl: "https://www.youtube.com/watch?v=PUP7U5vTMM0"
  },
  {
    id: 3,
    title: "Fried Rice with Pantry Basics",
    description: "Transform leftover rice with soy sauce, garlic, and whatever you have on hand.",
    ingredients: ["rice", "soy sauce", "garlic", "oil", "salt", "eggs"],
    instructions: [
      "Heat oil in a large pan or wok over high heat",
      "Add cold cooked rice and break up any clumps",
      "Push rice to one side, scramble eggs on the other",
      "Mix everything together, add garlic and soy sauce to taste"
    ],
    cookTime: "10 mins",
    servings: 2,
    difficulty: "Easy",
    tags: ["Leftover Magic", "Asian-Inspired", "One Pan"],
    youtubeUrl: "https://www.youtube.com/watch?v=qH__o17xHls"
  },
  {
    id: 4,
    title: "Simple Pancakes",
    description: "Fluffy pancakes made with basic baking ingredients you probably already have.",
    ingredients: ["flour", "milk", "eggs", "sugar", "baking powder", "salt", "butter"],
    instructions: [
      "Mix dry ingredients in a large bowl",
      "Whisk together milk, eggs, and melted butter",
      "Combine wet and dry ingredients until just mixed",
      "Cook on a hot griddle until bubbles form, then flip"
    ],
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    tags: ["Breakfast", "Sweet", "Weekend"],
    youtubeUrl: "https://www.youtube.com/watch?v=mAHLHuoMKlI"
  },
  {
    id: 5,
    title: "Garlic Bread",
    description: "Crispy, buttery garlic bread using bread, butter, garlic, and basic seasonings.",
    ingredients: ["bread", "butter", "garlic", "salt", "parsley"],
    instructions: [
      "Preheat oven to 400°F (200°C)",
      "Mix softened butter with minced garlic and salt",
      "Spread mixture on sliced bread",
      "Bake for 10-12 minutes until golden and crispy"
    ],
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    tags: ["Side Dish", "Comfort Food", "Crispy"],
    youtubeUrl: "https://www.youtube.com/watch?v=gVPpjSJP2dE"
  },
  {
    id: 6,
    title: "Basic Tomato Pasta",
    description: "Simple pasta with canned tomatoes, garlic, and herbs - a pantry hero recipe.",
    ingredients: ["pasta", "canned tomatoes", "garlic", "olive oil", "salt", "sugar", "basil"],
    instructions: [
      "Cook pasta according to package directions",
      "Heat olive oil and sauté minced garlic",
      "Add canned tomatoes, salt, and a pinch of sugar",
      "Simmer 10 minutes, toss with pasta and fresh basil"
    ],
    cookTime: "20 mins",
    servings: 3,
    difficulty: "Easy",
    tags: ["Italian", "Vegetarian", "Comfort Food"],
    youtubeUrl: "https://www.youtube.com/watch?v=--WPCdUMcgs"
  },
  {
    id: 7,
    title: "Instant Ramen Upgrade",
    description: "Transform basic instant ramen with an egg and simple pantry additions.",
    ingredients: ["instant ramen", "eggs", "soy sauce", "garlic", "green onions", "sesame oil"],
    instructions: [
      "Cook ramen noodles according to package directions",
      "In the last minute, crack an egg into the pot",
      "Add minced garlic and a splash of soy sauce",
      "Garnish with chopped green onions and a drizzle of sesame oil"
    ],
    cookTime: "8 mins",
    servings: 1,
    difficulty: "Easy",
    tags: ["Quick", "Student Life", "Comfort Food"],
    youtubeUrl: "https://www.youtube.com/watch?v=YQ3SCMJBUgE"
  },
  {
    id: 8,
    title: "Basic Grilled Cheese",
    description: "Perfect grilled cheese sandwich with just bread, butter, and cheese.",
    ingredients: ["bread", "butter", "cheese", "salt"],
    instructions: [
      "Butter one side of each bread slice",
      "Place cheese between unbuttered sides",
      "Cook in a pan over medium heat until golden",
      "Flip carefully and cook until other side is golden"
    ],
    cookTime: "8 mins",
    servings: 1,
    difficulty: "Easy",
    tags: ["Comfort Food", "Quick", "Classic"],
    youtubeUrl: "https://www.youtube.com/watch?v=BlTCkNkfmRY"
  },
  {
    id: 9,
    title: "Simple Oatmeal",
    description: "Creamy, satisfying oatmeal with basic toppings you likely have on hand.",
    ingredients: ["oats", "milk", "salt", "sugar", "cinnamon", "butter"],
    instructions: [
      "Bring milk to a simmer in a saucepan",
      "Add oats and a pinch of salt",
      "Cook stirring occasionally for 5 minutes",
      "Stir in sugar, cinnamon, and a pat of butter"
    ],
    cookTime: "10 mins",
    servings: 1,
    difficulty: "Easy",
    tags: ["Breakfast", "Healthy", "Warm"],
    youtubeUrl: "https://www.youtube.com/watch?v=gXhANy6eGnA"
  },
  {
    id: 10,
    title: "Baked Potato",
    description: "Perfectly fluffy baked potato with simple toppings from your pantry.",
    ingredients: ["potatoes", "butter", "salt", "black pepper", "cheese"],
    instructions: [
      "Preheat oven to 425°F (220°C)",
      "Pierce potatoes with a fork and rub with salt",
      "Bake for 45-60 minutes until tender",
      "Cut open and fluff with a fork, add butter, salt, pepper, and cheese"
    ],
    cookTime: "60 mins",
    servings: 1,
    difficulty: "Easy",
    tags: ["Comfort Food", "Filling", "Vegetarian"],
    youtubeUrl: "https://www.youtube.com/watch?v=0gW9EnfWzDw"
  },
  {
  id: 11,
  title: "Veggie Stir-Fry Noodles",
  description: "Quick veggies and noodles in savory soy sauce.",
  ingredients: ["noodles", "bell pepper", "carrot", "soy sauce", "garlic", "oil"],
  instructions: [
    "Cook noodles and drain",
    "Stir-fry garlic + veggies until tender",
    "Add noodles and soy sauce; toss and serve"
  ],
  cookTime: "15 mins",
  servings: 2,
  difficulty: "Easy",
  tags: ["Quick", "Vegetarian", "Asian"],
  youtubeUrl: ""
},
{
  id: 12,
  title: "Chickpea Salad",
  description: "Bright, fresh salad with protein-rich chickpeas.",
  ingredients: ["canned chickpeas", "tomato", "cucumber", "olive oil", "lemon", "salt", "pepper"],
  instructions: [
    "Drain chickpeas",
    "Chop tomato and cucumber",
    "Toss everything with olive oil, lemon, salt, and pepper"
  ],
  cookTime: "10 mins",
  servings: 2,
  difficulty: "Easy",
  tags: ["Quick", "Salad", "Vegan"],
  youtubeUrl: ""
},
{
  id: 13,
  title: "Banana Oat Pancakes",
  description: "Healthy two-ingredient pancakes using banana and oats.",
  ingredients: ["banana", "oats", "egg", "cinnamon"],
  instructions: [
    "Blend banana, oats, and egg to batter",
    "Cook spoonfuls on griddle until bubbles, then flip"
  ],
  cookTime: "10 mins",
  servings: 2,
  difficulty: "Easy",
  tags: ["Breakfast", "Healthy", "Gluten-Free"],
  youtubeUrl: ""
},
{
  id: 14,
  title: "Bean & Cheese Quesadilla",
  description: "Simple quesadilla with beans and cheese.",
  ingredients: ["tortilla", "cheddar cheese", "canned beans", "butter"],
  instructions: [
    "Spread cheese & beans on tortilla",
    "Fold, cook with butter in pan until golden"
  ],
  cookTime: "8 mins",
  servings: 1,
  difficulty: "Easy",
  tags: ["Quick", "Snack", "Mexican"],
  youtubeUrl: ""
},
{
  id: 15,
  title: "Spicy Peanut Noodles",
  description: "Creamy, spicy noodles with peanut butter and sriracha.",
  ingredients: ["noodles", "peanut butter", "soy sauce", "sriracha", "garlic"],
  instructions: [
    "Cook noodles and set aside",
    "Mix PB, soy, sriracha, garlic into sauce",
    "Toss noodles in sauce; serve warm"
  ],
  cookTime: "12 mins",
  servings: 2,
  difficulty: "Easy",
  tags: ["Asian", "Spicy", "Vegetarian"],
  youtubeUrl: ""
}

];

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const addIngredient = () => {
    if (currentIngredient.trim() && !ingredients.includes(currentIngredient.trim().toLowerCase())) {
      setIngredients([...ingredients, currentIngredient.trim().toLowerCase()]);
      setCurrentIngredient('');
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(i => i !== ingredient));
  };

  const generateRecipes = async () => {
    if (ingredients.length === 0) return;
    
    setIsGenerating(true);
    setShowWelcome(false);
    
    // Simulate API call with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Filter recipes based on available ingredients - prioritize recipes with more matching ingredients
    const matchingRecipes = pantryRecipes
      .map(recipe => ({
        ...recipe,
        matchCount: recipe.ingredients.filter(ingredient => 
          ingredients.includes(ingredient.toLowerCase())
        ).length
      }))
      .filter(recipe => recipe.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 6); // Show top 6 matches
    
    // If no matches, show some easy pantry recipes
    const recipesToShow = matchingRecipes.length > 0 
      ? matchingRecipes 
      : pantryRecipes.slice(0, 6);
    
    setRecipes(recipesToShow);
    setIsGenerating(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addIngredient();
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center relative">
            <div className="absolute top-0 left-1/4 text-2xl">
              <Heart className="doodle-heart" />
            </div>
            <div className="absolute top-4 right-1/4 text-2xl">
              <Star className="doodle-star" />
            </div>
            
            <div className="flex items-center justify-center space-x-3 mb-4">
              <ChefHat className="w-12 h-12 text-orange-500" />
              <h1 className="text-5xl font-bold handwritten text-gray-800">
                HungryHun
              </h1>
            </div>
            
            <p className="text-xl handwritten-light text-gray-600 max-w-2xl mx-auto">
              Turn your pantry staples into amazing recipes! Perfect for students, 
              late-night cooks, and creative kitchen adventures ✨
            </p>
            
            
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Ingredient Input Section */}
        <section className="mb-12">
          <div className="sketch-card max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold handwritten text-gray-800 mb-6 text-center">
              What's in your pantry? 🥘
            </h2>
            
            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                value={currentIngredient}
                onChange={(e) => setCurrentIngredient(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a pantry staple (e.g., pasta, eggs, rice, flour...)"
                className="sketch-input flex-1"
              />
              <button
                onClick={addIngredient}
                className="sketch-button-secondary"
                disabled={!currentIngredient.trim()}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Ingredients Display */}
            {ingredients.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg handwritten text-gray-700 mb-3">Your pantry ingredients:</h3>
                <div className="flex flex-wrap gap-2">
                  {ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag group">
                      {ingredient}
                      <button
                        onClick={() => removeIngredient(ingredient)}
                        className="ml-2 text-current opacity-60 hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={generateRecipes}
              disabled={ingredients.length === 0 || isGenerating}
              className="sketch-button-primary w-full text-lg"
            >
              {isGenerating ? (
                <div className="flex items-center justify-center space-x-2">
                  <span>Cooking up recipes</span>
                  <div className="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Recipes!</span>
                </div>
              )}
            </button>
          </div>
        </section>

        {/* Welcome Message */}
        {showWelcome && ingredients.length === 0 && (
          <section className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-6">🍳</div>
              <h3 className="text-2xl handwritten text-gray-700 mb-4">
                Ready to create something delicious?
              </h3>
              <p className="handwritten-light text-gray-600">
                Start by adding the basic ingredients and pantry staples you have available. 
                I'll help you discover amazing recipes you can make right now!
              </p>
            </div>
          </section>
        )}

        {/* Recipe Results */}
        {recipes.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold handwritten text-gray-800 text-center mb-8">
              Your Pantry Recipe Suggestions ✨
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold handwritten text-gray-800 mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-gray-600 handwritten-light text-sm">
                      {recipe.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="handwritten-light">{recipe.cookTime}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="handwritten-light">{recipe.servings}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                      {recipe.difficulty}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold handwritten text-gray-700 mb-2">Ingredients:</h4>
                    <div className="flex flex-wrap gap-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded-full text-xs ${
                            ingredients.includes(ingredient.toLowerCase())
                              ? 'bg-green-100 text-green-800 border border-green-300'
                              : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold handwritten text-gray-700 mb-2">Instructions:</h4>
                    <ol className="text-sm space-y-1">
                      {recipe.instructions.map((step, index) => (
                        <li key={index} className="handwritten-light text-gray-600">
                          {index + 1}. {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mb-4">
                    <a
                      href={recipe.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="handwritten-light text-sm">Watch on YouTube</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {recipe.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs handwritten-light"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t-2 border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="w-6 h-6 text-orange-500" />
            <span className="handwritten text-xl text-gray-700">HungryHun</span>
          </div>
          <p className="handwritten-light text-gray-600">
            Built for hungry minds and curious cooks! 🍽️
          </p>
          
        </div>
      </footer>
    </div>
  );
}

export default App;