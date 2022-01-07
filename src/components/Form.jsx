import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Digite o nome da sua carta:
          <input id="name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Adicione uma descrição para a carta:
          <input id="description" type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Digite o primeiro atributo:
          <input id="attr1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Digite o segundo atributo:
          <input id="attr2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Digite o terceiro atributo:
          <input id="attr3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="img">
          Digite um link para a imagem:
          <input id="img" type="text" data-testid="image-input" />
        </label>
        <h3>Selecione a raridade da carta:</h3>
        <select data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label htmlFor="check-super">
          Super Trunfo
          <input id="check-super" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
