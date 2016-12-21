import 'babel-polyfill'

import React from 'react'
import { AppRegistry } from 'react-native-universal'
import { WebStyles } from 'carbon-ui'

import App from './src/index'

const AppWithStyles = () => <App><WebStyles /></App>

AppRegistry.registerComponent('BottomNavWithStacks', () => AppWithStyles)
AppRegistry.runApplication('BottomNavWithStacks', { rootTag: document.getElementById('root') })
