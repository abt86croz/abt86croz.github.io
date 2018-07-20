import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import NotFound from './components/not-found/NotFound'
import Mission from './components/mission/Mission'
import Faculty from './components/faculty/Faculty'
import Performances from './components/performances/Performances'
import MovementTherapy from './components/movement-therapy/MovementTherapy'
import SummerProgram from './components/summer-program/SummerProgram'
import PhotoGallery from './components/PhotoGallery'
import Tuition from './components/tuition/Tuition'
import { WeeklySchedule, Description } from './components/abt-classes/ABTClasses'
import { Forms, FinancialAid } from './components/registration/Registration'
// import HandbookDoc from './pdf/2018-2019-handbook-policies.pdf'

// Route paths
const aboutPhilosophy = '/about/our-philosophy'
const aboutInstructors = '/about/our-instructors'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
    <Route path={`${aboutInstructors}`} exact component={Faculty} />
    <Route path={`${aboutPhilosophy}`} exact component={Mission} />
    <Redirect from="/about/" to={`${aboutInstructors}`} />
    <Route path="/registration" exact component={Forms} />
    <Route path="/registration/financial-aid" exact component={FinancialAid} />
    <Route path="/registration/tuition" exact component={Tuition} />
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
