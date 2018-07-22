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
import PhotoGallery from './components/photo-gallery/PhotoGallery'
import Tuition from './components/tuition/Tuition'
import FinancialAid from './components/financial-aid/FinancialAid'
import Forms from './components/registration/Registration'
import Description from './components/class-description/ClassDescription'
import Schedule from './components/class-schedule/ClassSchedule'
import ClassAttire from './components/class-attire/ClassAttire'

// Route paths
const contactPath = '/contact'
const philosophyPath = '/about/our-philosophy'
const instructorsPath = '/about/our-instructors'
const financialAidPath = '/registration/financial-aid'
const tuitionPath = '/registration/tuition'
const descriptionPath = '/classes/description'
const movementTherapyPath = '/classes/movement-therapy'
const classAttirePath = '/classes/class-attire'
const summerProgramPath = '/classes/summer-program'
const classSchedulePath = '/classes/schedule'
const performancesPath = '/performances'
const photosPath = '/photos'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path={contactPath} exact component={Contact} />
    <Route path={instructorsPath} exact component={Faculty} />
    <Route path={philosophyPath} exact component={Mission} />
    <Redirect from="/about/" to={instructorsPath} />
    <Route path="/registration" exact component={Forms} />
    <Route path={financialAidPath} exact component={FinancialAid} />
    <Route path={tuitionPath} exact component={Tuition} />
    <Redirect from="/registration/" to="/registration/forms" />
    <Route path={classSchedulePath} component={Schedule} />
    <Route path={descriptionPath} component={Description} />
    <Route path={movementTherapyPath} component={MovementTherapy} />
    <Route path={classAttirePath} component={ClassAttire} />
    <Route path={summerProgramPath} component={SummerProgram} />
    <Redirect from="/classes/" to={classSchedulePath} />
    <Route path={performancesPath} exact component={Performances} />
    <Route path={photosPath} exact component={PhotoGallery} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
