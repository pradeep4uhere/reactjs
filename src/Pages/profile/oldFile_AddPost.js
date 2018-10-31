import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import FadeIn from 'react-fade-in';
import Dropzone from 'react-dropzone';
import Image from 'react-render-image';
import {canvasToBlob as blob}  from 'blob-util'
import request from "superagent";
class AddPost extends React.Component{
	constructor() {
        super();
        this.displayData = [];
        this.displayImgData = [];
        this.state = {
            isPost: false,
            disc : '',
            title : '',
            showdata : this.displayData,
            files: [],
            accepted: [],
            rejected: [],
            imageUrls:[],
            tempFiles:[],
            dropzoneActive:true,
            fileName:'',
            displayImgData:'',
            selectedFile: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.prependData = this.prependData.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
        
    }


    fileChangedHandler = (event) => {
  		const file = event.target.files[0]
 		const formData = new FormData()
  		this.setState({selectedFile: event.target.files[0]})
  		formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
  		console.log(formData);
  		const urlStr = 'http://localhost:4209/serverport/uploadimage';
  		axios.post(urlStr, formData,{
  			 onUploadProgress: progressEvent => {
      			console.log(progressEvent.loaded / progressEvent.total)
    		}
  		})
  		
	}

	uploadHandler = () => {
		setTimeout(function(){
		const formData = new FormData()
		console.log(this.state.selectedFile)
		formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
		const urlStr = 'http://localhost:4209/serverport/uploadimage';
  		axios.post(urlStr, formData,{
  			 onUploadProgress: progressEvent => {
      			console.log(progressEvent.loaded / progressEvent.total)
    		}
  		})
  		}.bind(2000));

	}

    onDrop(files) {
    let formData = new FormData();
    this.state.files.forEach(file => {
        formData.append('myfiles[]', file, file.name);
        formData.append('fileName','filename');
    });
    console.log(formData);

    const urlStr = 'http://localhost:4209/serverport/uploadimage';
    const l = files.length;
    const fileObj = {};
    for(let i = l-1; i >= 0; --i) {
        this.displayImgData.push(files[i]);
    }
    //console.log(this.displayImgData);*/
    this.setState({
        files,
        dropzoneActive: false,
        displayImgData:this.displayImgData
      });
    }







    prependData() {
      	   this.displayData.unshift(<FadeIn><div class=" alert alert-success"><p><h5><b>{this.state.title}</b></h5></p><p></p><p class="text-justify">{this.state.disc}</p><small>Post Date: {new Date().toDateString()}</small></div></FadeIn>);
		   this.setState({
		      showdata : this.displayData
		   });
		 }

    handleSubmit(event){
    	 let initialUsers = [];
       let fileupload = [];
       const fileObj = [];
       const l = this.displayImgData.length;
       for(let i = l-1; i >= 0; --i) {
        fileObj[i] = this.displayImgData[i];
       }
       console.log(fileObj);


       const urlStr = 'http://localhost:4209/serverport/add';
    	 event.preventDefault();
    	 const user_id =localStorage.getItem('user_id');
       const token =localStorage.getItem('token');
       const form = new FormData()
       form.append('token', '')
       form.append('user_id', user_id)
       form.append('description', event.target.description.value)
       form.append('file', JSON.stringify(fileObj))
       const options = {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            // Do something with the progress details
          },
        };
        console.log(JSON.stringify(fileObj));

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
        return(<div>
          <div  class=" alert alert-default" style={{border: 'solid 1px #ccc'}}>
	        <h4>Create New Post</h4>
					<form onSubmit={this.handleSubmit} class="form dropzone" enctype="multipart/form-data">
					<textarea id="postBox"  class="form-control" onChange={this.handleChange} cols={70} rows={3} name="description" placeholder="Enter description Here" style={{marginBottom: "2" ,border:' none'}} onClick={this.changeBox}/>
		      <div className="image-upload">
          <div style={{'min-height':'200'}}>
          <div class="row"> 
              {
                this.displayImgData.map((file, index) =><span id="{file.name}" style={{'display':'block','border':'solid 1 #ff00ff','margin':'2'}}><img style={{'min-height':250,'width':250,'margin':1}} src={file.preview} alt='image'/></span>)
              }
            </div>
            <input type="file" multiple  name="file" onChange={this.fileChangedHandler}/>
          </div>
          
          <Dropzone inputProps={{size: '30', required: "true"}} name="building_photo_1" style={{'border-top': 'solid 1px #ccc','min-height':'150'}}
          accept={accept}
          name="filename"
          onDrop={this.onDrop.bind(this)}
          >
          <img src="http://goo.gl/pB9rpQ"/>
          </Dropzone>
          </div>
          <button type="submit" class="btn btn-success btn-sm">Post</button>
					</form>
	            </div>
	            <div> 
               
              	{this.displayData}
	            </div>
            </div>

			);

    }
}

export default AddPost;
