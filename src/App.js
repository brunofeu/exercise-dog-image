import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      loading: true,
    };
  }

  componentDidMount() {
    return this.fetchDog().message
  }

  fetchDog = async () => {
    this.setState(
      { loading: true },
      async () => {

        const responseRaw = await fetch('https://dog.ceo/api/breeds/image/random');
        const responseJson = await responseRaw.json();
        this.setState({
          message: responseJson.message,
          loading: false,
        })
      })
  }

  handleClick = () => {
    this.fetchDog();
  }

  renderDog = () => {
    return (
      <div>
        <img src={this.state.message}></img>
      </div>
    )
  }

  render() {
    const loadingElement = <spam>Loading...</spam>
    return (
      <main className="App">
       <p> {this.state.loading ? loadingElement : this.renderDog()} </p>

        <button onClick={this.handleClick}>Próximo</button>
      </main>
    );
  }
}

export default App;
