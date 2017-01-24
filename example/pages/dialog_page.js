import React, { Component, PropTypes } from 'react';
import { Button, Dialog } from '../../';

class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.openDialog = ::this.openDialog;
    this.closeDialog = ::this.closeDialog;
  }

  openDialog() {
    this.setState({ open: true });
  }

  closeDialog() {
    this.setState({ open: false });
  }


  render() {
    const dialogActions = [
      <Button onClick={this.closeDialog}>Cancel</Button>,
      <Button>Submit</Button>
    ];

    return (
      <div>
        <Button type="raised" onClick={this.openDialog}>Dialog</Button>
        <Dialog
          open={this.state.open}
          actions={dialogActions}
        >
          hello world
        </Dialog>
      </div>
    )
  }
}

export default DialogPage;
