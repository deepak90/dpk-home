import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Nav from './components/Navigation';
import Hero from './components/Hero';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Data from './data/data'
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsData: Data.projects,
      heroData: Data.projectsHero,
      selectedTags: ""
    }
  }

  filterCards(tagName) {
    this.setState({
      selectedTags: tagName
    });

    let filteredProjects = Data.projects.filter((project) => {
      return project.tags.find((tag) => {
        return tag === tagName;
      });
    });
    this.setState({
      projectsData: filteredProjects
    });
  }

  resetCards() {
    this.setState({
      projectsData: Data.projects,
      selectedTags:""
    })
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
            {this.state.selectedTags.length ?
              <div className="filter-container">
                <Filter
                  filter={this.state.selectedTags}
                  resetCards={this.resetCards.bind(this)} />
              </div>
              :
              ''
            }
          </Row>
          <Row>
            <div className="card-container">
              {projectsData.map((project, index) =>
                <Cards
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  filterCards={this.filterCards.bind(this)}
                />)}

            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
