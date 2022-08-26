import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from 'redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
