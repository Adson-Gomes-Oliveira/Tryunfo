import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      nameCard: '',
    };
  }

  handleInput(event) {
    const input = event.target.value;
    console.log(input);
    this.setState = ({ nameCard: input });
  }

  render() {
    const { nameCard } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.handleInput } />
        <Card cardName={ nameCard } />
      </div>
    );
  }
}

export default App;
