import React, { Fragment} from 'react'
import { connect } from 'react-redux'

import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Header from './component/header'
import Content from './component/content'
import Login from './component/login'

// import Map from './page/map'
// import ChartOne from './page/chartOne'
// import ChartTwo from './page/chartTwo'
// import ChartThree from './page/chartThree'
// import Climate from './page/climate'
// import RadarMap from './page/radarMap'
// import Relationship from './page/relationship'
// const ChartOne = React.lazy(() => import('./page/chartOne'));
// const ChartTwo = React.lazy(() => import('./page/chartTwo'));
// const ChartThree = React.lazy(() => import('./page/chartThree'));
// const Climate = React.lazy(() => import('./page/climate'));
// const RadarMap = React.lazy(() => import('./page/radarMap'));
// const Relationship= React.lazy(() => import('./page/relationship'));



function MyRouter(props) {
    const loginFlag = localStorage.getItem('login')
    return (
        <BrowserRouter basename="/admin">
            {
                props.login || loginFlag ?
                
                    <div className="admin-container">
                        <Header></Header>
                        <Content></Content>
                    </div> :
                    <Fragment>
                        <Route path="/login" component={Login}></Route>
                        <Redirect from="/*" to="/login"></Redirect>
                    </Fragment>

            }

        </BrowserRouter>
    )
}

const mapState = (state) => ({
    login: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(MyRouter)