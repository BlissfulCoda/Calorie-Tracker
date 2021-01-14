//Storage Controller

// Meal Controller
const MealCtrl = (function(){
    const Meal = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // State 
    const state = {
        items: [
            {id: 0, name: 'Steak', ccalories: 800},
            {id: 1, name: 'Biscuits', ccalories: 50},
            {id: 2, name: 'Wings', ccalories: 1200}
        ],
        currentMeal: null,
        totalCalories: 0
    }

    // Public Methods
    return {
        state: state
    }
})()

// UI Controller
const UICtrl = (function(){
    
})()
// App Controller 
const App = (function(MealCtrl, UICtrl){
    
    return {
        init: function(){
            console.log(MealCtrl.state)
        }
    }
})(MealCtrl, UICtrl)

App.init();