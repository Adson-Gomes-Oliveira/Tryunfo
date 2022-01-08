import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/form.css';

class Form extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="name">
            Digite o nome da sua carta:
            <input
              id="nameCard"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              autoComplete="off"
            />
          </label>
          <label htmlFor="description">
            Adicione uma descrição para a carta:
            <input
              id="description"
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1">
            Digite o primeiro atributo:
            <input
              id="attr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2">
            Digite o segundo atributo:
            <input
              id="attr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3">
            Digite o terceiro atributo:
            <input
              id="attr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="img">
            Digite um link para a imagem:
            <input
              id="img"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <h3>Selecione a raridade da carta:</h3>
          <select
            id="rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          <label htmlFor="superTrunfo">
            Super Trunfo:
            <input
              id="superTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = { cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired };

export default Form;
