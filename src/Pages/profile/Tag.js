import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import Loader from '../../bullet-svg-animated.gif';
import FadeIn from 'react-fade-in';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import TagList from '../TagList.js';
class AddTag extends React.Component{
	constructor() {
        super();
        this.addTagUrl= 'http://localhost:4209/serverport/addtag';
        this.getTagUrl= 'http://localhost:4209/serverport/gettag';
        this.delTagUrl='http://localhost:4209/serverport/deltag';
        let  initialCatList = [];
        this.state = {
        	show:false,
        	message:'',
        	title:'',
        	active:'',
        	loading:true,
        	tagList: [],
        	id:null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTag = this.updateTag.bind(this);
        this.deleteTag = this.deleteTag.bind(this);
        
    }

    
    
    handleSubmit(event){
	    event.preventDefault();
	    const user_id =localStorage.getItem('user_id');
	    const token =localStorage.getItem('token');
	    const formData = {
	            	title:event.target.title.value,
	            	status:event.target.active.value,
	            	user_id : user_id,
	                token:localStorage.getItem('token')
	       	}
	    formData.id = this.state.id;
	    if(formData.title.length>3){   	
		    axios.post(this.addTagUrl,formData)
		    .then(data => {
		            if(data.data.code==200){
		              setTimeout(function(){
		                this.setState({
		                	show:true,
		                	title:'Success',
		                	message:data.data.message
		                });
	                    this.myFormRef.reset();
		                this.getList();	

		              }.bind(this),1000); 
		            }else{
		               //Error Not Post 
		            }
		    }).catch(error => console.log(error));
		}else{
			this.setState({
              	show:true,
               	title:'Error',
               	message:'Please Enter Tag Title First'
            });
		}

	}
	getList(){
		const user_id =localStorage.getItem('user_id');
	    const token =localStorage.getItem('token');
	    const formData = {
	            	user_id : user_id,
	                token:localStorage.getItem('token')
	       	}
		 axios.post(this.getTagUrl,formData)
	    .then(data => {
	            if(data.data.code==200){
                this.initialCatList = data.data.result.map((values) => {
                    return values
                });
	            setTimeout(function(){
	                this.setState({
	                	loading:false,
	                	catList:this.initialCatList,
	                });
	              }.bind(this),1000); 
	            }
	            console.log(this.state)
	    }).catch(error => console.log(error));
	}

	componentDidMount(){
		this.getList();	

	}

	updateTag(i,t,s,type){
		if(type=='e'){
			this.setState({id:i});
			this.setState({title:t});
			this.setState({active:s});
		}else{
			this.deleteTag(i,t);
		}
	}

	deleteTag(i,t){
    	const formData = {
	   		id : i,
	   		token:localStorage.getItem('token')
   		}
   		
   		axios.post(this.delTagUrl,formData)
		    .then(data => {
		            if(data.data.code==200){
		              setTimeout(function(){
		                this.setState({
		                	show:true,
		                	title:'Success',
		                	message:data.data.message
		                });
	                    this.myFormRef.reset();
		                this.getList();	

		              }.bind(this),1000); 
		            }else{
		               //Error Not Post 
		            }
		    }).catch(error => console.log(error));
	}






    render(){
    	const { message } = this.state;
    	const { title } = this.state;
    	const { active } = this.state;
     	const { isLoading } = this.state;
        return(<div>
        	<SweetAlert
	        show={this.state.show}
	        title={title}
	        text={message}
	        onConfirm={() => this.setState({ show: false })}
	      />
	      	<div className="row" style={{'font-size':'12px'}}>
	      	<div className="col-md-4">
        	<div className="card" style={{'marginTop':10}}>
        	<div className="card-header">Add New Tag</div>
        	<div class="card-body" style={{'font-size':'12px'}}>
            <form onSubmit={this.handleSubmit} className="form" style={{'margin':5}} ref={(el) => this.myFormRef = el}>
            <div class="form-group">
            <label>Enter Tag Name</label>
			<input type="text" name="title" class="form-control" placeholder="Enter Tag Title Here" maxlength={100} style={{marginBottom: 2}} 
			ref="title" value={title}/>
			</div>
			<div class="form-group">
			<label>Status</label>
			<select name="active" className="form-control">
		        <option value={1} selected={1 == active}>Active</option>
		        <option value={0} selected={0 == active}>InActive</option>
		    </select>
		    </div>
			<button type="submit" class="btn btn-success btn-sm">Save</button>&nbsp;
			<button type="submit" class="btn btn-success btn-sm">Cancel</button>
			</form>
            </div>
            </div>
            </div>
            <div className="col-md-8">
            <div className="card" style={{'margin-top':10}}>
        	<div className="card-header">
        	<div class="row" style={{'font-size':'12px'}}>
        		<div className="col-md-1">#</div>
        		<div className="col-md-4">Name</div>
        		<div className="col-md-2">Status</div>
        		<div className="col-md-4 pull-right">Action</div>
        	</div>
        	</div>
        	{!isLoading?(<FadeIn><CatList onClick={this.updateTag} state={this.state}/></FadeIn>):(<center><div className='alert alert-danger'>No Record Found</div></center>)}
            </div>
            </div>
        	</div>
            </div>);
    }
}
export default AddTag;
