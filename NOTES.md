#Context API


-a way to pass data through the component tree w/o having to pass props down manually at each level
-manages state that is required in multiple components (not necessarily a direct child component) w/o passing it all the way down.

-context object
-context provider
-context consumer

const Context = createContext();

all components that consume context go w/i the context provider

<Context.Provider value={value}>
  {/* Children */}
</Context.Provider>;

useContext hook and pass the Context object 

To subscribe to the Context object, we will use the useContext hook and pass the Context object created by createContext to it. It will read the current context value from the closest matching Provider above it in the tree.

const context = useContext(Context);

only use it for low-frequency updates like the theme and authentication. because whenever the context’s value changes, the descendant components of the Provider will be re-rendered.

#Reducer

-takes 2 arguments
-current state
-action

const reducer = (state, action) => {
  switch (action.type) {
    case "TYPE_1":
      return new_state;

    case "TYPE_2":
      return new_state;

    default:
      return state;
  }
};


The useReducer hooks take 2 arguments, the reducer function, and the initial state. It will return the current state value and a function called dispatch which should be used to manipulate the state.


const [state, dispatch] = useReducer(reducer, initialState);


If you pass this state and dispatch to the value prop of the Context Provider, you can consume the state and update it using the dispatch from any consumer.

heroku create -a nameOfApp

git remote -v



git push heroku main