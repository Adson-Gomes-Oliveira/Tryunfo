import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nameCard: '',
      description: '',
      img: '',
      attr1: '',
      attr2: '',
      attr3: '',
      rarity: 'normal',
      superTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleInput = (event) => {
    const { value, id, checked, type } = event.target;
    const typeOfValue = type === 'checkbox' ? checked : value;

    this.setState({ [id]: typeOfValue }, () => this.validation());
  }

  validateAttribute = (string) => {
    const maxAttr = 90;
    const minAttr = 0;
    string = parseInt(string, 10);
    string = string >= minAttr && string <= maxAttr;
    return string;
  }

  validateFullStrenght = (attribute1, attribute2, attribute3, rule) => {
    attribute1 = parseInt(attribute1, 10);
    attribute2 = parseInt(attribute2, 10);
    attribute3 = parseInt(attribute3, 10);
    const fullAttr = attribute1 + attribute2 + attribute3;
    console.log(fullAttr);
    const valid = fullAttr <= rule;
    return valid;
  }

  validation = () => {
    const totalAttr = 210;
    const { attr1, attr2, attr3 } = this.state;
    const stateList = Object.values(this.state);
    this.setState({ isSaveButtonDisabled: true });
    if (!stateList.includes('')
    && this.validateAttribute(attr1) === true
    && this.validateAttribute(attr2) === true
    && this.validateAttribute(attr3) === true
    && this.validateFullStrenght(attr1, attr2, attr3, totalAttr) === true) {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  onSaveButtonClick = () => {
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
