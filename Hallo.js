import React from 'react';
import loadable from '@loadable/component'
import Name from './Name'

class Hallo extends React.Component {
  render() {
    return (
    	<div>Hello, <Name /></div>
    )
  }
}

export default Hallo
