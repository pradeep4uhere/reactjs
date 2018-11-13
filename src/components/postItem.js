import React from 'react';
import Img1 from '../bell/img/porf-1.jpg';
import $ from 'jquery';
import axios from 'axios'
import Loader from '../bullet-svg-animated.gif';
import FadeIn from 'react-fade-in';
import stripHtml from "string-strip-html";
const nl2br = require('react-nl2br');
var HTML = require('html-parse-stringify')




class PostItem extends React.Component {
  constructor(props) {
        super(props);
        this.getArticleUrl= 'http://localhost:4209/article/getpostforfront';
        this.state={
            loading:true,
            headline:this.props.type
        }

  }

  getList(type){
    const typeStr =type;
    const user_id =localStorage.getItem('user_id');
    const token =localStorage.getItem('token');
    const formData = {
                user_id : user_id,
                category_id: typeStr,
                token:localStorage.getItem('token')
          }
     axios.post(this.getArticleUrl,formData)
      .then(data => {
            this.setState({postList:data.data.result[0]});
            this.setState({loading:false});
            console.log(data.data.result[0]);
      }).catch(error => console.log(error));
  }

  componentDidMount(){
      var type = this.state.headline
      this.getList(type);
  }

  render() {
    const { postList }= this.state;
    const { headline }= this.state;
    const { loading } = this.state;
    return (<div>
        {(loading==false)?(<div>
              <div className="col-md-12">
                <a href="#"><img alt="" src={Img1} style={{width:'100%'}}/></a>
              </div>
              <div><p><a href="#"><b>{postList.title}</b></a><br/><small>Nov 06, 2018, 03:29 PM IST</small></p><p>{stripHtml(postList.description)}</p>
              </div>
          </div>):(<div className="{col}"><center><img alt="" src={Loader}/></center></div>)}
    </div>)
  }
}
export default PostItem;
