import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Nav from './components/Navigation';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Data from './data/data'
import './css/App.css';

const selectedTagsArray = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "projectsData": Data.projects,
      "heroData": Data.projectsHero,
      "selectedTags": ""
    }
  }

  filterCards(tagName) {
    selectedTagsArray.indexOf(tagName) === -1 ? selectedTagsArray.push(tagName) : selectedTagsArray.pop(tagName);

    this.setState({
      "selectedTags": selectedTagsArray
    });
    
    let filteredProjects = this.state.projectsData.filter((project) => {
      return project.tags.find((tag) => {
        return tag === tagName;
      });
    });
    this.setState({
      "projectsData": filteredProjects
    });
  }
  render() {
    let { projectsData, heroData } = this.state;
    return (
      <div className="App">
        <Nav />
        <Hero
          title={heroData.title}
          description={heroData.description}
          heroctatext={heroData.ctaText} />
        <Grid>
          <Row>
            <div className="card-container">
              { /* TODO: change key to index */}
              {projectsData.map((project, index) =>
                <Cards
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  filterCards={this.filterCards.bind(this)} />)}
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
