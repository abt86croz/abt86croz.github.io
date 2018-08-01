import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
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

// <ScrollToTop /> wraps <Route />
const Routes = () => (
  <Switch>
    <ScrollToTop path="/" exact component={Home} />
    <ScrollToTop path={contactPath} exact component={Contact} />
    <ScrollToTop path={instructorsPath} exact component={Faculty} />
    <ScrollToTop path={philosophyPath} exact component={Mission} />
    <Redirect from="/about/" to={instructorsPath} />
    <ScrollToTop path={financialAidPath} exact component={FinancialAid} />
    <ScrollToTop path={tuitionPath} exact component={Tuition} />
    <Redirect from="/registration/" to={financialAidPath} />
    <ScrollToTop path={classSchedulePath} component={Schedule} />
    <ScrollToTop path={descriptionPath} component={Description} />
    <ScrollToTop path={movementTherapyPath} component={MovementTherapy} />
    <ScrollToTop path={classAttirePath} component={ClassAttire} />
    <ScrollToTop path={summerProgramPath} component={SummerProgram} />
    <Redirect from="/classes/" to={classSchedulePath} />
    <ScrollToTop path={performancesPath} exact component={Performances} />
    <ScrollToTop path={photosPath} exact component={PhotoGallery} />
    <ScrollToTop component={NotFound} />
  </Switch>
)

export default Routes
