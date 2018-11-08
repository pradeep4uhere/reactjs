import React from 'react';
import { Redirect,withRouter } from 'react-router-dom'
import $ from 'jquery';
import axios from 'axios'
import FadeIn from 'react-fade-in';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import 'react-trumbowyg/dist/trumbowyg.min.css'
import Trumbowyg from 'react-trumbowyg'
//Import Category Select Options List
import CatListOptions from '../CatListOptions.js';
const ReactTags = require('react-tag-autocomplete')
const defaultProps = {update: true};
class EditAtricle extends React.Component{
constructor(props) {
        super(props);
        this.getCategoryUrl= 'http://localhost:4209/category/getcategory';
        this.getTagListUrl= 'http://localhost:4209/tag/gettag';
        this.getArticlebyId= 'http://localhost:4209/article/getarticlebyid';
        this.props.post.tags = JSON.parse(this.props.post.tags);
        this.state = {
              isPost: false,
              heading:'Add New Article',
              id:this.props.post.id,
              tags:this.props.post.tags,
              title:this.props.post.title,
              description:this.props.post.description,
              category_id:this.props.post.category_id,
              categoryName:this.props.post.categoryName,             
              status:this.props.post.status,
              redirectToReferrer:false
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDesc = this.changeDesc.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.getArticleDetails = this.getArticleDetails.bind(this);
        this.updateList = this.updateList.bind(this);
        //this.getArticleDetails(this.props.post.id);
    }

    updateList(){
      this.props.onClick('44');
    }

    getArticleDetails(id){
      this.setState({ open: true });
      this.setState({ id: id });
      var id =id;
      const token =localStorage.getItem('token');
      const formData = {
                id : id,
                token:localStorage.getItem('token')
        }
        axios.post(this.getArticlebyId,formData)
        .then(data => {
                if(data.data.code==200){
                   var resultData = data.data.result[0];
                   this.setState({category_id:resultData.category_id });
                   this.setState({title:resultData.title });
                   this.setState({description:resultData.description });
                   this.setState({tags:resultData.tags});
                }
       }).catch(error => console.log(error));
    }

    handleDelete (i) {
      const tags = this.state.tags.slice(0)
      tags.splice(i, 1)
      this.setState({ tags })
    }
 
    handleAddition (tag) {
      const tags = [].concat(this.state.tags, tag)
      this.setState({ tags })
    }


    changeDesc(event){
      var description = event.target.value;
      this.setState({ description: description });
    }

     changeTitle(event){
      var title = event.target.value;
      this.setState({ title: title });
    }
  

    handleSubmit(event){
       let initialUsers = [];
       const urlStr = 'http://localhost:4209/article/update';
    	 event.preventDefault();
    	 const user_id =localStorage.getItem('user_id');
       const token =localStorage.getItem('token');
       const formData = {
            user_id : user_id,
            token:localStorage.getItem('token'),
            id:event.target.id.value,
            title:event.target.title.value,
            description:event.target.description.value,
            categoryId:event.target.categoryId.value,
            status:event.target.active.value,
            tagInput:this.state.tags
          }
       axios.post(urlStr,formData)
            .then(data => {
                    if(data.data.code==200){
                      setTimeout(function(){
                        this.setState({
                          isPost:true,
                          title : '',
                          description:'',
                          categoryId:''
                        });

                        this.setState({
                          show:false,
                          alertTitle:'Success',
                          title:'',
                          message:data.data.message
                        });
                        //this.myFormRef.reset();
                      }.bind(this),1000); 

                      setTimeout(function(){
                        this.setState({redirectToReferrer:true});
                      }.bind(this),2000);
                    }
            }).catch(error => console.log(error));
      }

    getTagList(){
      const user_id =localStorage.getItem('user_id');
      const token =localStorage.getItem('token');
      const formData = {
            user_id : user_id,
            token:localStorage.getItem('token'),
            type:'suggestions'
          }
      axios.post(this.getTagListUrl,formData)
      .then(data => {
              if(data.data.code==200){
                this.initialCatList = data.data.result.map((values) => {
                    return values
                });
                this.setState({suggestions:this.initialCatList});
              }
      }).catch(error => console.log(error));

    }




    componentDidMount(){
      //this.getTagList(); 
    }



     render(){
      console.log(this.props.isPost);
        const { isPost }= this.state; 

        const { title }= this.state; 
        const { id } = this.state;
        const { description } = this.state; 
    	  const { category_id } = this.state; 
        const { tags } =this.state; 
        const { status } =this.state; 

        const { message } = this.state;
        const { alertTitle } = this.state;
        const { suggestions } = this.state;
        const { heading } = this.state;
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
          return <Redirect from='/dashboard#'  to='/dashboard#allarticle'/>;
        }  
        return(
          <div className="row" style={{'font-size':'12px','marginTop':10}}>
          <div className="col-md-12">
          <SweetAlert
            show={this.state.show}
            title={alertTitle}
            text={message}
            onConfirm={() => this.setState({ show: false })}
          />
          <div className="card">
	        <div className="card-header"><b>{heading}</b></div>
          <div className="card-body">
					<form onSubmit={this.handleSubmit} class="form" encType="multipart/form-data" ref={(el) => this.myFormRef = el}>
          <div class="form-group">
          <label>Choose Category</label>
          <CatListOptions categoryId = {this.state}/>
          
					<label>Enter Title</label>
          <input Type="text" name="title" className="form-control" value={title} onChange={this.changeTitle.bind(this)}/>


          <label>Enter Description</label>    
          <Trumbowyg 
            id='description' 
            data={description}
            placeholder='Enter Your Description Here!!'
            onChange={this.changeDesc.bind(this)}
            ref="trumbowyg"
          />
		      
          <label>Enter Tags</label>       
          <ReactTags
            id='tagInput'
            tags={tags}
            suggestions={suggestions}
            handleDelete={this.handleDelete.bind(this)}
            handleAddition={this.handleAddition.bind(this)} 
            placeholder='Enter Tag Text (Minimum 2 char)'
            name='tagInput'
            inputAttributes={{name:'tagInput'}}

          />
          <label>Status</label>
          <select name="active" className="form-control">
            <option value={1} selected={1 == status}>Active</option>
            <option value={0} selected={0 == status}>InActive</option>
          </select>
          <br/>
          <input type="hidden" name="id"  value={id}/>
          <button type="submit" class=" form-control btn btn-success btn-sm">Save</button>
           </div>
					</form>
	        </div>
          </div>
          </div>
          </div>

			);

    }
}
export default EditAtricle;
