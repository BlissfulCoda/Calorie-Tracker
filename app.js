//Storage Controller

// Meal Controller
const MealCtrl = (function() {
  const Meal = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // State
  const state = {
    meals: [
      { id: 0, name: 'Steak', calories: 800 },
      { id: 1, name: 'Biscuits', calories: 50 },
      { id: 2, name: 'Wings', calories: 1200 }
    ],
    currentMeal: null,
    totalCalories: 0
  };

  // Public Methods
  return {
    getMeals: function() {
      return state.meals;
    },
    state: state
  };
})();



// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    mealList: '#meal-list'
  };
  return {
    populateMealList: function(meals) {
      let html = '';
      meals.forEach(meal => {
        html += `
            <li class="collection-item" id="${meal.id}"> 
              <strong>${meal.name}: </strong> <em>${meal.calories} Calories</em>
              <a href="#" class="secondary-content">
              <i class="edit-meal material-icons">edit</i>
              </a>
             </li>
            `;
      });
      document.querySelector(UISelectors.mealList).innerHTML = html;
    },
    getSelectors: function(){
        return UISelectors;
    }
  };
})();

// App Controller
const App = (function(MealCtrl, UICtrl) {
  const loadEventListeners = () => {
      const UISelectors = UICtrl.getSelectors();
      document.querySelector('.add-btn')
  };

  return {
    init: function() {
      // Collect meals from init state
      const meals = MealCtrl.getMeals();
      UICtrl.populateMealList(meals);
    }
  };
})(MealCtrl, UICtrl);

App.init();
