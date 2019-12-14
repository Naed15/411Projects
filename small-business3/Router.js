import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import cookie from 'cookie'
import Nav from './components/Nav'
import Login from './components/Login'
import CompanyPage from './src/Components/CompanyPage'
import LoggedIn from './src/Components/LoggedIn'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["LoggedIn"] ? true : false;
}

const ProtectedRoute = ({component: Component,...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
        ? <Component {...props} />
        : <Redirect to="/Login" />}
        />
    )
}



const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={LoggedIn} />
        </Switch>
    );
};

export default Router;