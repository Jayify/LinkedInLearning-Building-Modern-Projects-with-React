# Modern React

## React Ecosystem Tools
- Different tools to manage different aspects  
- Freedom of the developer to do what is best for them and their project  
- Separation of concern  

## React Fundamentals
- Loads a single HTML file (index.html, SPA)  
- React programmatically renders the application into the file  
- Webpack rewrites JSX into vanilla JS  
- Index.html is main file, index.js is main script – "entry point"  
- Can do `return React.createElement('h1', null, 'This is a React script.');` to render React components without a converter (most browsers can't handle without conversion)  

## Misc Learnings
- Can string installs like `npm install a b c`  
- To do a ternary with no else → do `check && {value}`  
- "Prop drilling" when a prop is passed straight through a component to a child component  

## Conversion
- Using Babel and Webpack to interpret JS and React into browser-friendly React (dev only)  
- Compiles into `dist/bundle.js` (bundles all files and components)
- Doesn't matter if files are called `.js` or `.jsx`, will be converted anyway  

## Redux
- State management tool  
- Reduces props drilling from components sharing/passing states  
- Redux offers global state with strict rules  
- State can ONLY be changed through triggering actions  
- Unidirectional data flow  
- Web tools  
- Parts:  
  - Store – centralised state  
  - Actions – triggers  
  - Reducers – defines how the store changes when a specific action happens  
- Alternatives:  
  - Recoil – lighter, less strict  
  - MobX – OOP  
## Redux Thunk
- Designed for data fetching, communication with servers, and other "side effects"  
- Has read-only access to the store, can dispatch actions  

## Selectors
- Redux store structure may change as the project evolves  
- Selectors isolate the store structure from how components get data  
- Defines how to get the data and is reused throughout the application  
- Single source of truth for where data can be found  
- Best to refer to previous selectors instead of duplicating access points where possible  
- `CreateSelector` uses memoization to cache the created selector, reducing computing for complex selectors (otherwise selector is recomputed each time it is referenced)  