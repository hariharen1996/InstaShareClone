import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute/index'
import HomeRoute from './components/HomeRoute'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import UsersProfileRoute from './components/UsersProfileRoute'
import MyProfileRoute from './components/MyProfileRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ThemeContext from './context/ThemeContext'

class App extends Component {
  state = {showTheme: false, activeTabs: 'home'}

  changeTabs = tabs => {
    this.setState({activeTabs: tabs})
  }

  themeChange = () => {
    this.setState(prevState => ({
      showTheme: !prevState.showTheme,
    }))
  }

  render() {
    const {showTheme, activeTabs} = this.state
    const bodyColor = showTheme ? 'bodyBg-dark' : 'bodyBg-light'
    return (
      <div className={bodyColor}>
        <ThemeContext.Provider
          value={{
            showTheme,
            themeChange: this.themeChange,
            activeTabs,
            changeTabs: this.changeTabs,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
            <ProtectedRoute
              exact
              path="/users/:usersId"
              component={UsersProfileRoute}
            />
            <ProtectedRoute
              exact
              path="/my-profile"
              component={MyProfileRoute}
            />
            <Route exact component={NotFoundRoute} />
          </Switch>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
