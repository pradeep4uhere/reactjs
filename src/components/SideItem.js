import React from 'react';
import Img1 from '../bell/img/porf-1.jpg';
class SideItem extends React.Component {
  constructor(props) {
        super(props);
        this.state={
            col:this.props.coloum,
        }
  }
  render() {
    const {col} =  this.state
    return (<div><div><a href="#"><img alt="" src={Img1} style={{width:'100%'}}/></a></div>
            <div><a href="#"><b>Title Goes Here reat way to ensure that your viewers are interested in your website is to attract</b></a></div>
            </div>)
  }
}
export default SideItem;
