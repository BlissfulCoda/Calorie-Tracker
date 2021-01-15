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
    addItem: function(names, calories){
      let ID;
      if(state.meals.length > 0){
        ID = state.meals[state.meals.length - 1].id + 1;
      } else {
        ID = 0;
      }

      calories = parseInt(calories)
      newMeal = new Meal(ID, name, calories)
      state.meals.push(newMeal);

      return newMeal;
    },
    logState: function(){
      return state;
    }
  };
})();



// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    mealList: '#meal-list',
    addBtn: '.add-btn',
    mealNameInput: '#meal-name',
    mealCaloriesInput: '#meal-calories'
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
    getMealInput: function(){
        return {
            name: document.querySelector(UISelectors.mealNameInput).value,
            calories: document.querySelector(UISelectors.mealCaloriesInput).value
        }
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
      document.querySelector(UISelectors.addBtn).addEventListener('click', mealSubmit)
  };

  const mealSubmit = function(e){
      const input = UICtrl.getMealInput();
      if(input.name !== '' && input.calories !== ''){
       const newItem = MealCtrl.addItem(input.name, input.calories);
      }

    e.preventDefault();
  }

  return {
    init: function() {
      // Collect meals from init state
      const meals = MealCtrl.getMeals();
      UICtrl.populateMealList(meals);
      loadEventListeners()
    }
  };
})(MealCtrl, UICtrl);

App.init();
