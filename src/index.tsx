import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './store'
import reportWebVitals from './reportWebVitals';


let renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root')
  );
}

renderApp();

store.observerApp(renderApp);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
