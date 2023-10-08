/* Instruments */
import { counterSlice } from './slices'

/*
Our application might be made up of many different features, and each of those features 
might have its own reducer function. When we call configureStore, we can pass in all of
the different reducers in an object. The key names in the object will define the keys 
in our final state value.
*/
/*
When we pass in an object like {counter: counterSlice.reducer}, that says that we want to have a 
state.counter section of our Redux state object, and that we want the counterReducer function 
to be in charge of deciding if and how to update the state.counter section whenever an action 
is dispatched.
*/
export const reducer = {
  counter: counterSlice.reducer,
}
