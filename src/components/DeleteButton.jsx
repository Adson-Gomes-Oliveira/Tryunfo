import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteButton extends Component {
  render() {
    const { btnId, clickFunc } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-button"
        id={ btnId }
        onClick={ clickFunc }
      >
        Excluir
      </button>
    );
  }
}

DeleteButton.propTypes = {
  btnId: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default DeleteButton;
