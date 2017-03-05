import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

class Select extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    selected: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    selected: '',
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      isOpen: false,
    };
    this.handleSelect = ::this.handleSelect;
    this.handleClick = ::this.handleClick;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleSelect(e) {
    const selected = e.target.getAttribute('value');
    this.setState({ selected, isOpen: false });
    this.props.onChange(selected);
  }

  handleClick(e) {
    this.setState({ isOpen: this.node.contains(e.target) });
  }

  render() {
    const options = _.map(this.props.options, (option) => {
      const key = _.uniqueId('select-option');
      return (
        <span key={key} className="rmd-select-option">
          <button onClick={this.handleSelect} value={option.value}>
            {option.name}
          </button>
        </span>
      );
    });

    const selected = _.find(this.props.options, { value: this.state.selected });

    const optionsClasses = classNames({
      'rmd-select-options': true,
      'is-open': this.state.isOpen,
    });

    return (
      <div>
        <span ref={(node) => { this.node = node; }} className="rmd-select-value">{selected.name}</span>
        <div className={optionsClasses}>
          {options}
        </div>
      </div>
    );
  }
}

export default Select;
