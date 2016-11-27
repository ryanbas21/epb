




export default function CreateStore(reducer:any, preloadedState:any, enhancer:any) {
let currentReducer = reducer;
let currentState = preloadedState;
let currentListeners = [];
let nextListeners = currentListeners;
let isDispatching = false;
  //Checks to see if preloadedstate was optionally ignored
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  //checks to see if enhancer was improperly passed in as
  //something other than a function
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') throw new Error('Expected the enhancer to be a function.')
  return enhancer(CreateStore)(reducer, preloadedState)
}
  //check to see if reducer is a function
  if (typeof reducer !== 'function') throw new Error('Expected the reducer to be a function.')

  //Making Deep Copy of Listeners
  //to avoid overwriting original, "one layer deep -thai"
  function ensureCanMutateNextListeners() : void {
   if (nextListeners === currentListeners) nextListeners = currentListeners.slice()
  }

  //function that returns the current state of your application tree
  const getState:any =  () => currentState


//Should we prevent them from accidentally subscribing twice?
//check for subscription near the top of the function?
//Is that listener already in the array?
//any downside to using an object versus an array?
  function subscribe (listener) {
    if (typeof listener !== 'function') throw new Error ('Expected listener to be a function');

    let isSubscribed: boolean = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);

      return function unsubscribe () {
        if (!isSubscribed) return

        isSubscribed = false;
        ensureCanMutateNextListeners();
        let index = nextListeners.indexOf(listener)
        nextListeners.splice(index,1);
      }
  }

  function dispatch (action) {
    //if (isPlainObject(action)) {
    //throw new Error (
    //'Actions must be plain objects. ' +
    //'Use custom middleware for async actions'.
    //)}
    if (typeof action.type === 'undefined') {
      throw new Error(
        'Actions may not have an undefined "type" property. ' +
        'Have you misspelled a constant?'
      )
    }

    if (isDispatching) throw new Error('Reducers ma ynot dispatch actions')

    try (isDispatching) {
        isDispatching = true;
        currentState = currentReducer(currentState, action)
      } finally {
        isDispatching = false;
      }

      var listeners = currentListeners = nextListeners
      for (let i = 0; i < listeners.length; i += 1) {
        let listener = listeners[i];
        listener();
      }
  }




}
