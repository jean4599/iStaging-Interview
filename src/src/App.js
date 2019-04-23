import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";
import PanoramasList from "./components/PanoramasList";
import MainPanorama from "./components/MainPanorama";

const middleware = [reduxThunk]
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  )
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path={["/:id", "/"]} render={(props)=>
            <div className="App">
              <MainPanorama/>
              <PanoramasList/>
            </div>
          }/> 
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
