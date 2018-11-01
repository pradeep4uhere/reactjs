import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import FadeIn from 'react-fade-in';

import 'react-trumbowyg/dist/trumbowyg.min.css'
import Trumbowyg from 'react-trumbowyg'



class AddAtricle extends React.Component{
	constructor() {
        super();
        this.state = {
            isPost: false,
            title : '',
        };
        this.state = { pictures: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.prependData = this.prependData.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
        this.state = {selectedFile: null};

        
    }


    uploadHandler(){
      const formData = new FormData()
      formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
      const urlStr = 'http://localhost:4209/serverport/uploadimage';
      axios.post(urlStr, formData, {
        onUploadProgress: progressEvent => {
          console.log(progressEvent.loaded / progressEvent.total)
        }
      })
    }

    fileChangedHandler(event){
      const file = event.target.files
      console.log(process.files);
      this.setState({selectedFile: event.target.files[0]})
      console.log(file)
      setTimeout(function(){
        this.uploadHandler();
      }.bind(this),1000); 
    }
    
    prependData() {
      	   this.displayData.unshift(<FadeIn><div class=" alert alert-success"><p><h5><b>{this.state.title}</b></h5></p><p></p><p class="text-justify">{this.state.disc}</p><small>Post Date: {new Date().toDateString()}</small></div></FadeIn>);
		   this.setState({
		      showdata : this.displayData
		   });
		 }

    handleSubmit(event){
    	 let initialUsers = [];
       const urlStr = 'http://localhost:4209/serverport/add';
    	 event.preventDefault();
    	 const user_id =localStorage.getItem('user_id');
       const token =localStorage.getItem('token');
       const form = new FormData()
       form.append('token', '')
       form.append('user_id', user_id)
       form.append('description', event.target.description.value)
       const options = {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            // Do something with the progress details
          },
        };
        axios.post(urlStr,form,options)
            .then(data => {
                    console.log(data);
                    if(data.code==200){
                      setTimeout(function(){
                        this.setState({isPost:true});
                        this.setState({disc:form.description});
                        this.prependData();
                      }.bind(this),1000); 
                    }else{
                       //Error Not Post 
                    }
            }).catch(error => console.log(error));

    }

    render(){
      const { accept, files, dropzoneActive } = this.state;
     	const disc = this.state; 
    	const isPost = this.state; 
    	const  displayData = this.state;
      const  displayImgData = this.state;
      const imageUrls  =this.state;
        return(<div className="row" style={{'font-size':'12px','marginTop':10}}>
          <div className="col-md-12">
          <div className="card">
	        <div className="card-header"><b>Add Article</b></div>
          <div className="card-body">
					<form onSubmit={this.handleSubmit} class="form" encType="multipart/form-data">
          <div class="form-group">
          <label>Choose Category</label>
          <select className="form-control"><options>--Choose Category--</options></select>


					<label>Enter Title</label>
          <input Type="text" name="title" className="form-control"/>


          <label>Enter Description</label>    


          <Trumbowyg id='react-trumbowyg'/>
          <textarea id="postBox"  class="form-control" cols={70} rows={3} name="description" placeholder="Enter description Here" style={{marginBottom: "2" ,}} onClick={this.changeBox}/>
		      
          <label>Enter Tags</label>       
          <input Type="text" name="title" className="form-control"/>

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
