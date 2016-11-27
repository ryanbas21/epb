"use strict";
function CreateStore(reducer, preloadedState, enhancer) {
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    //Checks to see if preloadedstate was optionally ignored
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    //checks to see if enhancer was improperly passed in as
    //something other than a function
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function')
            throw new Error('Expected the enhancer to be a function.');
        return enhancer(CreateStore)(reducer, preloadedState);
    }
    //check to see if reducer is a function
    if (typeof reducer !== 'function')
        throw new Error('Expected the reducer to be a function.');
    //Making Deep Copy of Listeners
    //to avoid overwriting original, "one layer deep -thai"
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners)
            nextListeners = currentListeners.slice();
    }
    //function that returns the current state of your application tree
    var getState = function () { return currentState; };
    //Should we prevent them from accidentally subscribing twice?
    //check for subscription near the top of the function?
    //Is that listener already in the array?
    //any downside to using an object versus an array?
    function subscribe(listener) {
        if (typeof listener !== 'function')
            throw new Error('Expected listener to be a function');
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
        };
    }
    function dispatch(action) {
        //if (isPlainObject(action)) {
        //throw new Error (
        //'Actions must be plain objects. ' +
        //'Use custom middleware for async actions'.
        //)}
        if (typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property. ' +
                'Have you misspelled a constant?');
        }
        if (isDispatching)
            throw new Error('Reducers ma ynot dispatch actions');
        try { }
        finally { }
        (function (isDispatching) {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        });
        try { }
        finally {
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for (var i = 0; i < listeners.length; i += 1) {
            var listener = listeners[i];
            listener();
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateStore;
//# sourceMappingURL=createStore.js.map