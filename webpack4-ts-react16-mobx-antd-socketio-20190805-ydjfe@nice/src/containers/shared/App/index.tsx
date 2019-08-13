import * as React from 'react'
import { hot } from 'react-hot-loader'
import Loadable from 'react-loadable'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import * as styles from './index.scss'
import PageLoading from 'components/PageLoading'
import Error from 'components/Error'
import IntlWrapper from './IntlWrapper'

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ 'containers/views/Home'),
    loading: PageLoading
})
const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ 'containers/views/Login'),
    loading: PageLoading
})

const AppWrapper = ({ children }: { children?: React.ReactNode }) => <div className={styles.appWrapper}>{children}</div>

function AppRouter() {
    return (
        <IntlWrapper>
            <AppWrapper>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route path="/" component={Home} />
                        <Route component={Error} />
                    </Switch>
                </Router>
            </AppWrapper>
        </IntlWrapper>
    )
}

export default hot(module)(AppRouter)
