import React from 'react';
import store from './store/index'
import { Provider } from 'react-redux'


import './cssReset.css'
import './assert/iconfont/iconfont.css'

import MyRouter from './router'
// import NotFound from './page/notFound'
// import NotFound from './page/notFound'


import './cesium'


function App() {
  return (
    <Provider store={store}>
      <MyRouter></MyRouter>
    </Provider>
  )
}



export default App;
