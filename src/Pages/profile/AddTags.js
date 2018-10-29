import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import FadeIn from 'react-fade-in';
class AddTags extends React.Component{
	constructor() {
        super();
        this.state = {};
    }
    render(){
        return(<div>
            <div className="alert alert-success" style={{border: 'solid 1px #ccc'}}>Add AddTags Compomnent</div></div>);
    }
}
export default AddTags;
