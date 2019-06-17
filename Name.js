import React from 'react';

class Name extends React.Component {
  render() {
    return (
    	<span
    		onClick={() => alert('123')}
    		style={{color: 'red'}}
    	>
    		React!!
    	</span>
    )
  }
}

export default Name
