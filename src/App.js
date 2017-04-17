import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Nav from './components/Navigation';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Data from './data/data'
import './css/App.css';

const projects = Data.projects; 
const hero = Data.projectsHero;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero 
          title={hero.title}
          description={hero.description} 
          heroctatext={hero.ctaText} />
          <Grid>
            <Row>
              <div className="card-container">
                {projects.map(project => <Cards 
                                            key={project.id} 
                                            title={project.title} 
                                            description={project.description} 
                                            tags={project.tags}/>)}
              </div>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
