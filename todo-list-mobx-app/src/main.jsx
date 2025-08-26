import { StrictMode, createContext } from 'react';
import todosStore from './mobxTodos';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const todosStoreContext = createContext(todosStore);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <todosStoreContext.Provider value={todosStore}>
      <App />
    </todosStoreContext.Provider>
  </StrictMode>,
)
