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
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rarity: 'normal',
      superTrunfo: false,
      alreadyTrunfo: false,
      isSaveButtonDisabled: true,
      cardsSaved: [],
    };
  }

  handleInput = (event) => {
    const { value, id, checked, type } = event.target;
    let typeOfValue = type === 'checkbox' ? checked : value;
    if (type === 'checkbox') {
      const trunfoExists = this.checkTrunfo();
      if (trunfoExists === true) {
        typeOfValue = false;
      }
    }

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
    const valid = fullAttr <= rule;
    return valid;
  }

  validation = () => {
    const totalAttr = 210;
    const { attr1, attr2, attr3 } = this.state;
    const stateList = Object.values(this.state);

    if (!stateList.includes('')
    && this.validateAttribute(attr1) === true
    && this.validateAttribute(attr2) === true
    && this.validateAttribute(attr3) === true
    && this.validateFullStrenght(attr1, attr2, attr3, totalAttr) === true) {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { nameCard, description: desc, img,
      attr1, attr2, attr3, rarity: rare, superTrunfo, cardsSaved } = this.state;

    const cardObject = {
      name: nameCard,
      image: img,
      description: desc,
      attribute_01: attr1,
      attribute_02: attr2,
      attribute_03: attr3,
      rarity: rare,
      trunfo: superTrunfo,
    };

    this.setState(() => ({
      cardsSaved: [...cardsSaved, cardObject],
      nameCard: '',
      description: '',
      img: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rarity: 'normal',
      superTrunfo: false,
      isSaveButtonDisabled: true,
    }), () => this.checkTrunfo());
  }

  checkTrunfo = () => {
    const { cardsSaved } = this.state;
    const verifyTrunfo = cardsSaved.some((card) => card.trunfo === true);

    if (verifyTrunfo === true) {
      this.setState({ alreadyTrunfo: verifyTrunfo });
      return verifyTrunfo;
    }
  }

  render() {
    const { nameCard, description, img, attr1, attr2, attr3,
      rarity, superTrunfo, isSaveButtonDisabled, alreadyTrunfo, cardsSaved } = this.state;
    const cardList = cardsSaved.map((card) => (
      <li key={ card.name }>
        <Card
          cardName={ card.name }
          cardDescription={ card.description }
          cardImage={ card.image }
          cardAttr1={ card.attribute_01 }
          cardAttr2={ card.attribute_02 }
          cardAttr3={ card.attribute_03 }
          cardRare={ card.rarity }
          cardTrunfo={ card.trunfo }
        />
      </li>));
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
          hasTrunfo={ alreadyTrunfo }
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
        <ul>
          {cardList}
        </ul>
      </div>
    );
  }
}

export default App;
