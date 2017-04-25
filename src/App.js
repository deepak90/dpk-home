import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Nav from './components/Navigation';
import Hero from './components/Hero';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Data from './data/data'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/App.css';

let selectedTagsArray = [];
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
    if (selectedTagsArray.indexOf(tagName) === -1) {
      selectedTagsArray.push(tagName);
    }
    
    this.setState({
      selectedTags: selectedTagsArray
    });

    let filteredProjects = this.state.projectsData.filter((project) => {
      return project.tags.find((tag) => {
        return tag === tagName;
      });
    });
    this.setState({
      projectsData: filteredProjects
    });
  }

  resetCards() {
    selectedTagsArray = [];
    this.setState({
      projectsData: Data.projects,
      selectedTags: ""
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

            <div className="filter-container">
              <ReactCSSTransitionGroup
                transitionName="card-anim"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}>
                {this.state.selectedTags.length ?
                  <Filter
                    filter={this.state.selectedTags}
                    resetCards={this.resetCards.bind(this)} />
                  :
                  ''
                }
              </ReactCSSTransitionGroup>
            </div>
          </Row>
          <Row>
            <div className="card-container">
              <ReactCSSTransitionGroup
                transitionName="card-anim"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={300}>
                {projectsData.map((project, index) =>
                  <Cards
                    key={index}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    filterCards={this.filterCards.bind(this)}
                  />)}
              </ReactCSSTransitionGroup>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
