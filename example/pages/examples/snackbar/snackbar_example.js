import React, { Component } from 'react';
import { Button, Snackbar } from 'rematerial';

class SnackbarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackbar: false,
    };
  }

  onRequestClose = () => {
    console.log('close');
  };

  handleActionTouchTap = () => {
    alert('Are you sure you want to undo this?');
  };

  handleClickSnackbar = () => {
    this.setState({ openSnackbar: true });
  };

  render() {
    return (
      <div>
        <Button type="raised" onClick={this.handleClickSnackbar}>Show Snackbar</Button>
        <Snackbar
          onActionClick={this.handleActionTouchTap}
          onRequestClose={this.onRequestClose}
          isOpen={this.state.openSnackbar}
          actionLabel="UNDO"
          autoHideDuration={3500}
          body="Some Snackbar message"
        />
      </div>
    );
  }
}

export default SnackbarExample;
