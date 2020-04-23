import React from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

const App = () => (
  <WebView
    source={{ uri: 'http://www.test.fr' }}
    startInLoadingState
    style={{ flex: 1 }}
    useWebKit
    bounces={false}
    domStorageEnabled
    geolocationEnabled
    userAgent={
      'react-native/android/0.0.1/23373299b0245bc046f2165705865ea4596bc084fed375be9cf771368e9ec971'
    }
  />
)

export default App
