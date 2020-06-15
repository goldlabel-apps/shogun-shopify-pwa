import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import firebase from '@firebase/app'
import '@firebase/firestore'
import {
  BrowserRouter as Router
} from 'react-router-dom'
// import { PushToTalk } from './plugins/PushToTalk'
import { 
  MuiThemeProvider, 
  createMuiTheme 
} from '@material-ui/core/styles'
import { themePublic } from './utils/mui.js'
import { Provider } from 'react-redux'
import reduxStore from './redux'
import { createBrowserHistory } from 'history'
import { 
  SimpleSnackbar,
  Public,
} from './components'
import * as serviceWorker from './serviceWorker'

console.log(`${pJSON.name} ${pJSON.version} (${process.env.REACT_APP_ENV})`)
document.title = `Shogun PWA`

const fireConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
}

const fBase = firebase.initializeApp(fireConfig)
const getFBase = () => { return fBase }
export { getFBase }

const getHistory = () => { return createBrowserHistory() }
export { getHistory }

const fStore = firebase.firestore()
const getFStore = () => { return fStore }
export { getFStore }

const store = reduxStore()
const getStore = () => {
  return store
}
export { getStore }

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      store.dispatch({ type: `APP/USER`, user: true })
    }
})

ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme(themePublic)}>
      <Router>
        { store.getState().app.snackbar ? null : <SimpleSnackbar /> }
        
        <Public />
      </Router>
    </MuiThemeProvider>
  </Provider>
), document.getElementById('listingslab'))

serviceWorker.register()

/* 
  <PushToTalk /> 
*/
