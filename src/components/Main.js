import React from 'react'
import { Switch, Route } from "react-router-dom";

import LandingPage from '../components/about/About'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Projects from '../components/project/Projects'
import Resume from '../components/resume/Resume'

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main
