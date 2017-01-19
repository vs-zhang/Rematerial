import React, { Component, PropTypes } from 'react';
import Paper from '../shared/paper';

class Card extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    actions: PropTypes.element,
  };

  render() {
    return (
      <Paper>
        <div className="rmd-card">
          <div className="rmd-card__title-container">
            <div>
              <img
                src={this.props.img}
                className="rmd-card__title-background"
              />
            </div>
            <div className="rmd-card__title">
              {this.props.title}
            </div>
          </div>
          <div className="rmd-card__text">{this.props.text}</div>
          <div className="rmd-card__actions">{this.props.actions}</div>
        </div>
      </Paper>
    );
  }
}

export default Card;
