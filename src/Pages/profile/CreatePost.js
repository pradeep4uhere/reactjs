import React from 'react';
import $ from 'jquery';
class CreatePost extends React.Component{
	constructor() {
        super();
        this.displayData = [];
        this.state = {
            isPost: false,
            disc : '',
            title : '',
            showdata : this.displayData,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.prependData = this.prependData.bind(this);
    }



      prependData() {
      	   this.displayData.unshift(<div class=" alert alert-success"><p><h5><b>{this.state.title}</b></h5></p><p></p><p class="text-justify">{this.state.disc}</p><small>Post Date: {new Date().toDateString()}</small></div>);
		   this.setState({
		      showdata : this.displayData
		   });
		 }




    handleSubmit(event){
    	 let initialUsers = [];
    	 const urlStr = 'http://localhost/React/blog/api/api.php?action=newpost';
    	 event.preventDefault();
    	 const user_id =localStorage.getItem('user_id');
        	const formData = {
            	title:event.target.posttitle.value,
            	description:event.target.description.value,
            	user_id : user_id
        	}
       	$.ajax({
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
        });

    }

    render(){
    	const title = this.state;
    	const disc = this.state; 
    	const isPost = this.state; 
    	const  displayData = this.state;
        return(<div>
        	 <div  class=" alert alert-warning">
	            	<h4>Create New Post</h4>
					<form onSubmit={this.handleSubmit} class="form">
					<input type="text" name="posttitle" class="form-control" placeholder="Enter Title Here" maxlength={100} style={{marginBottom: 2}}/>
					<textarea  class="form-control" onChange={this.handleChange} cols={70} rows={3} name="description" placeholder="Enter description Here" style={{marginBottom: 2}}/>
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

export default CreatePost;
