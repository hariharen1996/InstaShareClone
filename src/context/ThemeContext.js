import React from 'react'

const ThemeContext = React.createContext({
  isTheme: false,
  changeTheme: () => {},
  savedPosts: () => {},
  changeTabs: () => {},
  activeTabs: 'home',
})

export default ThemeContext
