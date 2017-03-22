import React, { Component, PropTypes } from 'react';
import { Button, Snackbar } from 'rematerial';

class SnackbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackbar: false,
    };

    this.handleClickSnackbar = ::this.handleClickSnackbar;
  }

  handleClickSnackbar() {
    this.setState({ openSnackbar: true });
  }

  render() {
    return (
      <div>
        <Button type="raised" onClick={this.handleClickSnackbar}>Show Snackbar</Button>
        <Snackbar
          open={this.state.openSnackbar}
          duration="0.5"
          text="hello"
        />
      </div>
    )
  }
}

export default SnackbarPage;
