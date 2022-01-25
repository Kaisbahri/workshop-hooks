import React, { Component } from 'react';

export default class desc extends Component {
    componentWillUnmount() {
        console.log("our component will unmount");
      }
  render() {
    return <div> descreption</div>;
  }
}
