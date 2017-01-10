import React, { Component, PropTypes } from 'react';
import RadioButton from './radio_button';

class RadioButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    onCheck: PropTypes.func,
    className: PropTypes.string,
    selected: PropTypes.string,
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
    this.handleChange = ::this.handleChange;
  }

  handleChange(e) {
    this.setState({ selected: e.target.value });
    this.props.onCheck(e, e.target.value);
  }

  render() {
    const radios = React.Children.map(this.props.children, (option) => {
      const {
        value,
        label,
        } = option.props;
      return (
        <RadioButton
          ref={value}
          label={label}
          value={value}
          name={this.props.name}
          checked={value === this.state.selected}
        />
      );
    }, this);
    return (
      <div
        className={this.props.className}
        onChange={this.handleChange}
      >
        {radios}
      </div>
    );
  }
}

export default RadioButtonGroup;
