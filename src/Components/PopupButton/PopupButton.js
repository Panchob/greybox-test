import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Popover from  '@material-ui/core/Popover';


export class PopupButton extends Component {
  state = {
    anchorEl: null
  }

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
  }

  handleClose = () => {
    this.setState({anchorEl: null})
  }

  render() {
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
      <div>
        <Button variant="outlined" color={this.props.color} onClick={this.handleClick}>
          {this.props.btnText ? this.props.btnText : "Click Me"}
        </Button>
        <Popover
        id={id}
        open={open}
        anchorEl={this.state.anchorEl}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            marginTop:'5px',
            borderRadius: '5px'
          }}}
        onClose={this.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
          {this.props.popup}
        </Popover>
      </div>

    )
  }
}