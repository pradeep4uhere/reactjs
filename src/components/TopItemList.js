import React from 'react';
import Img1 from '../bell/img/porf-1.jpg';
import $ from 'jquery';
import axios from 'axios'
import Loader from '../bullet-svg-animated.gif';
import FadeIn from 'react-fade-in';
import stripHtml from "string-strip-html";
import TextTruncate from 'react-text-truncate'; // recommend


class TopItemList extends React.Component {
  constructor(props) {
        super(props);
        this.getArticleUrl= 'http://localhost:4209/article/getpostforfront';
        this.state={
            loading:true,
            headline:this.props.type,
            postList:[]
        }
        this.getImage = this.getImage.bind(this);
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

  getImage(postList){
    if(postList!=undefined){

      var html = postList.description;
      console.log("html"+html);
      var re = /<img[^>]+src="https:\/\/([^">]+)/g
      var httpType = 'https';
      if(re==null){
          var re = /<img[^>]+src="http:\/\/([^">]+)/g 
          var httpType = 'http';
        }
        var results = re.exec(html);
        console.log(results);

        if(results!=null){
          var  imageUrl  = httpType+'://'+results[1];
        }else{
          imageUrl = Img1;
        }
      }
        return imageUrl; 
  }

  render() {
    const { loading } = this.state; 
    console.log("Post List==="+this.state.postList);
    let listArr = this.state.postList;
    let optionItems = this.state.postList.map((val,i) =><div><p><a href="#"><img alt="" src={this.getImage(val)} style={{'width':'100%','maxHeight':'250px'}}/></a></p>
               <div><p><a href="#"><b>{val.title}</b></a><br/><small>Nov 06, 2018, 03:29 PM IST</small></p><p>
               </p></div><hr/></div>);
    return (<div>
        {(loading==false)?(<div>{optionItems}</div>):(<div className="{col}"><center><img alt="" src={Loader}/></center></div>)}
    </div>)
  }
}
export default TopItemList;
