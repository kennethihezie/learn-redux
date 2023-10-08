/* Components */
import { Counter } from './components/Counter/Counter'

export default function IndexPage() {
  return <Counter />
}

export const metadata = {
  title: 'Redux Toolkit',
}

/*
When to use redux state:

Global state that is needed across the app should go in the Redux store. 
State that's only needed in one place should be kept in component state.

If you're not sure where to put something, here are some common rules of thumb for determining 
what kind of data should be put into Redux:

Do other parts of the application care about this data?

Do you need to be able to create further derived data based on this original data?

Is the same data being used to drive multiple components?

Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?

Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?

Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?
*/
