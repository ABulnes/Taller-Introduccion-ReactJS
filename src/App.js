import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import { urlCategories, setUrlEvents } from './constants/url';
import axios from 'axios';
import EventList from './components/EventList';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      events: [],
      categories: [],
    }
  }

  getEvents = async (searchData) => {
    const url = setUrlEvents(searchData.name, searchData.category)
    const events = await axios.get(url);
    this.setState({ ...this.state, events: events.data.events })
  }

  getCategories = async () => {
    const categories = await axios.get(urlCategories)
    this.setState({ ...this.state, categories: categories.data.categories })
  }
  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <Header title='Introduccion a ReactJS' />
        <div className='container-fluid bg-gray'>
          <Form categories={this.state.categories} handleEvents={this.getEvents} />
          {this.state.events.length !== 0 ?
            <EventList events={this.state.events} /> :
            null}
        </div>
      </div>
    );
  }
}

export default App;
