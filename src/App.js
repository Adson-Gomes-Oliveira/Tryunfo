import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      nameCard: '',
      description: '',
      img: '',
      attr1: '',
      attr2: '',
      attr3: '',
      rarity: '',
      superTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleInput(event) {
    const { value, id, checked, type } = event.target;

    const typeOfValue = type === 'checkbox' ? checked : value;

    this.setState({ [id]: typeOfValue });
  }

  onSaveButtonClick() {
  }

  render() {
    const { nameCard, description,
      img, attr1,
      attr2, attr3,
      rarity, superTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameCard }
          cardDescription={ description }
          cardImage={ img }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ rarity }
          cardTrunfo={ superTrunfo }
          onInputChange={ this.handleInput }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ nameCard }
          cardDescription={ description }
          cardImage={ img }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ rarity }
          cardTrunfo={ superTrunfo }
        />
      </div>
    );
  }
}

export default App;
