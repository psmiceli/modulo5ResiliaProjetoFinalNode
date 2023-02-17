import './App.css';
import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/produto')
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(error => console.error(error));
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <p>Loading data from API...</p>;
    }

    return (
      <div>
        <h1>Data from API:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
