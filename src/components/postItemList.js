import React from 'react';
import Img1 from '../bell/img/porf-1.jpg';
import $ from 'jquery';
import axios from 'axios'
import Loader from '../bullet-svg-animated.gif';
import FadeIn from 'react-fade-in';
import stripHtml from "string-strip-html";


class PostItemList extends React.Component {
  constructor(props) {
        super(props);
        this.getArticleUrl= 'http://localhost:4209/article/getpostforfront';
        this.state={
            loading:true,
            headline:this.props.type,
            postList:[]
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
            this.setState({postList:data.data.result});
            this.setState({loading:false});
      }).catch(error => console.log(error));
  }

  componentDidMount(){
      var type = this.state.headline
      this.getList(type);
  }

  render() {
    const { loading } = this.state; 
    console.log("Post List==="+this.state.postList);
    let listArr = this.state.postList;
    let optionItems = this.state.postList.map((val,i) =><div><div className="col-md-12"><a href="#"><img alt="" src={Img1} style={{width:'100%'}}/></a></div>
               <div><p><a href="#"><b>{val.title}</b></a><br/><small>Nov 06, 2018, 03:29 PM IST</small></p><p>{stripHtml(val.description)}</p></div></div>);
    return (<div>
        {(loading==false)?(<div>{optionItems}</div>):(<div className="{col}"><center><img alt="" src={Loader}/></center></div>)}
    </div>)
  }
}
export default PostItemList;
