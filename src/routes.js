import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Filme from './pages/detailsMovie'
import Header from './components/Header'
import Saved from './pages/Movies'
import NotFound from './pages/NotFound'

export default function Routes() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/filme/:id' component={Filme}/>
                <Route exact path='/saved' component={Saved}/>
                <Route  path='*' component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
