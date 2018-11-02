import React from 'react';
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
const tags = [];
class AddAtricle extends React.Component{
constructor() {
        super();
        this.getCategoryUrl= 'http://localhost:4209/category/getcategory';
        this.getTagListUrl= 'http://localhost:4209/tag/gettag';
        this.state = {
              isPost: false,
              title : '',
              description:'',
              categoryId:'',
              tags: [],
              suggestions: []
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDesc = this.changeDesc.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
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
       const urlStr = 'http://localhost:4209/serverport/add';
    	 event.preventDefault();
    	 const user_id =localStorage.getItem('user_id');
       const token =localStorage.getItem('token');
       const formData = {
            user_id : user_id,
            token:localStorage.getItem('token'),
            title:event.target.title.value,
            description:event.target.description.value,
            categoryId:event.target.categoryId.value,
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
                          show:true,
                          alertTitle:'Success',
                          title:'',
                          message:data.data.message
                        });
                        this.myFormRef.reset();

                      }.bind(this),1000); 
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
      this.getTagList(); 
    }



     render(){
        const { accept, files, dropzoneActive } = this.state;
        const { isPost }= this.state; 
        const { title } = this.state; 
        const { description } = this.state; 
    	  const { categoryId } = this.state; 

        const { message } = this.state;
        const { alertTitle } = this.state;
        const { suggestions } = this.state;

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
	        <div className="card-header"><b>Add Article</b></div>
          <div className="card-body">
					<form onSubmit={this.handleSubmit} class="form" encType="multipart/form-data" ref={(el) => this.myFormRef = el}>
          <div class="form-group">
          <label>Choose Category</label>
          <CatListOptions/>
          
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
            tags={this.state.tags}
            suggestions={suggestions}
            handleDelete={this.handleDelete.bind(this)}
            handleAddition={this.handleAddition.bind(this)} 
            placeholder='Enter Tag Text (Minimum 2 char)'
            name='tagInput'
            inputAttributes={{name:'tagInput'}}

          />


          <label>Enter Meta Tag</label>       
          <input Type="text" name="metaTags" className="form-control"/>

          <label>Enter Meta Keywords</label>       
          <input Type="text" name="metaKeywords" className="form-control"/>

          <label>Enter Meta Description</label>       
          <input Type="text" name="metaDesc" className="form-control"/>
          <br/>

          <button type="submit" class=" form-control btn btn-success btn-sm">Add Now</button>
           </div>
					</form>
	            </div></div>
	            <div> 
               
              	{this.displayData}
	            </div>
            </div>
            </div>

			);

    }
}

export default AddAtricle;
