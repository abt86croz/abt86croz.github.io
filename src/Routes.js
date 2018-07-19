import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/contact/Contact'
import NotFound from './components/NotFound'
import Mission from './components/Mission'
import Faculty from './components/Faculty'
import Performances from './components/Performances'
import MovementTherapy from './components/movement-therapy/MovementTherapy'
import SummerProgram from './components/SummerProgram'
import PhotoGallery from './components/PhotoGallery'
import { WeeklySchedule, Description } from './components/abt-classes/ABTClasses'
import { Forms, FinancialAid } from './components/registration/Registration'


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/about/faculty" exact component={Faculty} />
    <Route path="/about/what-we-do" exact component={Mission} />
    <Redirect from="/about/" to="/about/faculty" />
    <Route path="/registration" exact component={Forms} />
    <Route path="/registration/financial-aid" exact component={FinancialAid} />
    <Redirect from="/registration/" to="/registration/forms" />
    <Route path="/classes/schedule" component={WeeklySchedule} />
    <Route path="/classes/description" component={Description} />
    <Route path="/classes/movement-therapy" component={MovementTherapy} />
    <Route path="/classes/summer-program" component={SummerProgram} />
    <Redirect from="/classes/" to="/classes/schedule" />
    <Route path="/performances" exact component={Performances} />
    <Route path="/photos" exact component={PhotoGallery} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
