import React from 'react';
import Img1 from '../bell/img/porf-1.jpg';
import $ from 'jquery';
import axios from 'axios'
import Loader from '../bullet-svg-animated.gif';
import FadeIn from 'react-fade-in';
import stripHtml from "string-strip-html";
import TextTruncate from 'react-text-truncate'; // recommend


class CategoryList extends React.Component {
  constructor(props) {
        super(props);
        this.getArticleUrl= 'http://localhost:4209/category/getcategory';
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
    let optionItems = this.state.postList.map((val,i) =><li class="list-group-item" title={val.title}><a href="#">{val.title}</a></li>);
    return (<div>
        {(loading==false)?(<ul class="list-group">{optionItems}</ul>):(<div className="{col}"><center><img alt="" src={Loader}/></center></div>)}
    </div>)
  }
}
export default CategoryList;
