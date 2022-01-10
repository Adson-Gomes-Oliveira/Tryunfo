import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

class Card extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo, deleteButton: delBtn, onDeleteButtonClick: del } = this.props;

    return (
      <div className="card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <h3 data-testid="attr1-card">{cardAttr1}</h3>
        <h3 data-testid="attr2-card">{cardAttr2}</h3>
        <h3 data-testid="attr3-card">{cardAttr3}</h3>
        <h3 data-testid="rare-card">{cardRare}</h3>
        {cardTrunfo === true && <h3 data-testid="trunfo-card">Super Trunfo</h3>}
        {delBtn === true && <DeleteButton btnId={ cardName } clickFunc={ del } />}
      </div>
    );
  }
}

Card.propTypes = { cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteButton: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired };

export default Card;
