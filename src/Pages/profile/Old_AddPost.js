import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import FadeIn from 'react-fade-in';
import Dropzone from 'react-dropzone';
import Image from 'react-render-image';
import {canvasToBlob as blob}  from 'blob-util'


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
            displayImgData:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.prependData = this.prependData.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.createImage = this.createImage.bind(this);
        
    }

    onDragEnter() {
      this.setState({
        dropzoneActive: true
      });
    }

    onDragLeave() {
      this.setState({
        dropzoneActive: false
      });
    }

    createImage(file) {
      console.log('Create Image'+file);
      blob.blobToBase64String(file.preview).then(function (base64String) {
          // success
          console.log(base64String);
        }).catch(function (err) {
          // error
        });
      console.log('createImage Methods---'+file);
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          image: e.target.result
        })
      };
      reader.readAsDataURL(file);
      this.uploadImage(file)
    }


    uploadImage(files) {
      console.log('Upload Image Methods---'+files);
       const urlStr = 'http://localhost:4209/serverport/imageupload';
       const user_id =localStorage.getItem('user_id');
       const token =localStorage.getItem('token');
       const form = {
         'token':'',
         'user_id': user_id,
         'files': this.image
       }
       console.log('Upload Image Methods---'+form);
       axios.post(urlStr,form)
            .then(data => {
                    console.log(data);
            }).catch(error => console.log(error));

    }

    onDrop(files) {
      console.log(files);
      const l = files.length;
      const fileObj = {};
      for(let i = l-1; i >= 0; --i) {
        this.displayImgData.push(files[i]);
        console.log(files[i].preview);
        //this.createImage(fileObj[i]);
      }
      //console.log(this.displayImgData);
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



/*       	$.ajax({
          url: urlStr,
          dataType: 'json',
          type: 'POST',
          data: formData,
          success: function(data) {
            console.log(data);
            if(data.code==200){
                setTimeout(function(){
                    this.setState({isPost:true});
                    this.setState({title:formData.title});
                    this.setState({disc:formData.description});
                    this.prependData();
                }.bind(this),1000); 
                //dasdasd
            }else{
               //Error Not Post 
            }
          }.bind(this),
          error: function(xhr, status, err) {
            	console.error(this.props.url, status, err.toString());
          }.bind(this)
        });*/

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
					<form onSubmit={this.handleSubmit} class="form" enctype="multipart/form-data">
					<textarea id="postBox"  class="form-control" onChange={this.handleChange} cols={70} rows={3} name="description" placeholder="Enter description Here" style={{marginBottom: "2" ,border:' none'}} onClick={this.changeBox}/>
		      <div className="image-upload">
          <div style={{'min-height':'200'}}>
          <div class="row"> 
              {
                this.displayImgData.map((file, index) =><span style={{'display':'block','border':'solid 1 #ff00ff','margin':'2'}}><img style={{'min-height':250,'width':250,'margin':1}} src={file.preview} alt='image'/></span>)
              }
            </div>
          </div>
          <Dropzone style={{'border-top': 'solid 1px #ccc','min-height':'150'}}
          accept={accept}
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
