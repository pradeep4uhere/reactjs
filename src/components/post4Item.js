import React from 'react';
import Img1 from '../bell/img/porf-1.jpg';
class Post4Item extends React.Component {
  constructor(props) {
        super(props);
        this.state={
            col:this.props.coloum,
        }
  }
  render() {
    const {col} =  this.state
    return (<div>
      <div>
           <a href="#"><img alt="" src={Img1} style={{width:'100%'}}/></a>
        </div>
        <div>
        <p>
        <a href="#">
          <b>Title Goes Here reat way to ensure that your viewers are interested in your website is to attract</b>
          </a>
        <br/><small>Nov 06, 2018, 03:29 PM IST</small>
        </p>
          <p>A great way to ensure that your viewers are interested in your website is to attract their attention right from the get-go. Amazing and unique website designs, impressive user interface…
          A great way to ensure that your viewers are interested in your website is to attract their attention right from the get-go. Amazing and unique website designs, impressive user interface…
          A great way to ensure that your viewers are interested in your website is to attract their attention right from the get-go. Amazing and unique website designs, impressive user interface…
          A great way to ensure that your viewers are interested in your website is to attract their attention right from the get-go. Amazing and unique website designs, impressive user interface…
          </p>
        </div>
        </div>
      
    )
  }
}
export default Post4Item;
