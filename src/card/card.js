import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Paper from '../shared/paper';

class Card extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(PropTypes.element).isRequired,
  };

  render() {
    const actionsWithKey = React.Children.map(this.props.actions,
      child => React.cloneElement(child, {
        key: _.uniqueId('card-action'),
      }),
    );

    return (
      <Paper>
        <div className="rmd-card">
          <div className="rmd-card__title-container">
            <div>
              <img
                src={this.props.img}
                className="rmd-card__title-background"
                alt="card img"
              />
            </div>
            <div className="rmd-card__title">
              {this.props.title}
            </div>
          </div>
          <div className="rmd-card__text">{this.props.text}</div>
          <div className="rmd-card__actions">{actionsWithKey}</div>
        </div>
      </Paper>
    );
  }
}

export default Card;
