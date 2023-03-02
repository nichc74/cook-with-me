import './RecipeDetailPage.css'

export default function RecipeDetailPage({togglePage}) {
  // Hard Coded test data
  const recipeDetail = {
    'name': 'Bolognese Sauce',
    'prep_time': 0,
    'total_time': 300,
    'source': 'Williams Sonoma Cooking at Home',
    'portions': 8,
    'img': "https://redhousespice.com/wp-content/uploads/2022/01/sliced-peking-duck-with-pancakes-scaled.jpg",
    'instructions': [
      `In a large frying pan over medium heat, warm the oil, butter,
       and pancetta, stirring occasionally, until the pancetta renders
       some of its fat, about 3 minutes.`,
      `Add the onion, carrot, and celery and sauté until softened, about 5 minutes.`,
      `Add the beef or turkey, reduce the meat to medium-low, and cook
      breaking up the meat with the back of a wooden spoon, just until the
      meat is no longer pink, 3-5 minutes. Do not allow to brown or harden.`,
      `Add the wine to the pan, raise the heat to medium, and simmer until
      the wine evaporates, 2-3 minutes.`,
      `Add 3/4 cup of the milk and the nutmeg and simmer until the milk is
      absorbed.`,
      `Add the tomatoes and season with salt. Bring to a simmer, cover
      partially, and adjust the heat to very low. Cook, stirring occasionally,
      until the sauce is thick, mellow, and tasty, about 4 hours, adding a little
      water if needed to keep the sauce from sticking.`,
      `During the final 45 minutes, stir in the remaining ¾ cup milk in 3
      additions, allowing the sauce to absorb the milk before adding more.`,
      `Taste and adjust the seasoning before serving.`
    ],
    'ingredients': [
      {
        name: 'olive oil',
        qty: 2,
        msmt: 'tbsp' 
      },{
        name: 'unsalted butter',
        qty: 2,
        msmt: 'tbsp'
      }, {
        name: 'pancetta',
        qty: 2,
        msmt: 'oz',
        prep_type: 'diced'
      }, {
        name: 'large yellow onion',
        qty: 1/2,
        msmt: '',
        prep_type: 'diced'
      }, {
        name: 'carrot',
        qty: 1,
        msmt: '',
        prep_type: 'peeled and diced'
      }
    ]
  }

  function toggleBackButton() {
    togglePage(0)
  }

  function listRecipes() {
    return (
      recipeDetail['instructions'].map((instruction, index) => {
        console.log(index)
        return (
          <div className="RecipeDetailPage-instruction" key={index}>
            {index}.{instruction}
          </div>
        )
      })
    )
  }

  const title = recipeDetail['name']
  const prep_time = recipeDetail['prep_time']
  const total_time = recipeDetail['total_time']
  const portions = recipeDetail['portions']
  const img = recipeDetail['img']

  return (
    <div className="RecipeDetailPage-main">
      <div className="RecipeDetailPage-header">
        <div className="RecipeDetailPage-img">
          <img
            className="RecipeDetailPage-image"
            alt="something alt"
            src={img}
          />
        </div>
        <div className="RecipeDetailPage-labels">
          <div className="RecipeDetailPage-title">
            {title}
          </div>
          <div className="RecipeDetailPage-prep-time">TIME: {prep_time}</div>
          <div className="RecipeDetailPage-total-time">PREP: {total_time}</div>
          <div className="RecipeDetailPage-portions">PORTIONS: {portions}</div>
        </div>
      </div>
      <div className="RecipeDetailPage-body">
        {listRecipes()}
        <button className="RecipeDetailPage-btn" onClick={toggleBackButton}>
          Lets go back!
        </button>
      </div>
    </div>
  )
}
