import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import Loader from '../../bullet-svg-animated.gif';
import FadeIn from 'react-fade-in';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import CatList from '../CatList.js';
class AddCategory extends React.Component{
	constructor() {
        super();
        this.addCategoryUrl= 'http://localhost:4209/serverport/addcategory';
        this.getCategoryUrl= 'http://localhost:4209/serverport/getcategory';
        let  initialCatList = [];
        this.state = {
        	show:false,
        	message:'',
        	title:'',
        	loading:true,
        	catList: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    
    
    handleSubmit(event){
	    event.preventDefault();
	    const user_id =localStorage.getItem('user_id');
	    const token =localStorage.getItem('token');
	    const formData = {
	            	title:event.target.title.value,
	            	user_id : user_id,
	                token:localStorage.getItem('token')
	       	}
	    axios.post(this.addCategoryUrl,formData)
	    .then(data => {
	            if(data.data.code==200){
	              setTimeout(function(){
	                this.setState({
	                	show:true,
	                	title:'Success',
	                	message:data.data.message
	                });
	                this.getList();	

	              }.bind(this),1000); 
	            }else{
	               //Error Not Post 
	            }
	    }).catch(error => console.log(error));

	}
	getList(){
		const user_id =localStorage.getItem('user_id');
	    const token =localStorage.getItem('token');
	    const formData = {
	            	user_id : user_id,
	                token:localStorage.getItem('token')
	       	}
		 axios.post(this.getCategoryUrl,formData)
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






    render(){
    	const { message } = this.state;
    	const { title } = this.state;
     	const { isLoading } = this.state;
        return(<div>
        	<SweetAlert
	        show={this.state.show}
	        title={title}
	        text={message}
	        onConfirm={() => this.setState({ show: false })}
	      />
	      	<div className="row">
	      	<div className="col-md-4">
        	<div className="card" style={{'marginTop':10}}>
        	<div className="card-header">Add New Category</div>
        	<div class="card-body">
            <form onSubmit={this.handleSubmit} className="form" style={{'margin':5}}>
			<input type="text" name="title" class="form-control" placeholder="Enter Category Title Here" maxlength={100} style={{marginBottom: 2}}/>
			<button type="submit" class="btn btn-success btn-sm">Post</button>
			</form>
            </div>
            </div>
            </div>
            <div className="col-md-8">
            <div className="card" style={{'margin-top':10}}>
        	<div className="card-header">
        	<div class="row">
        		<div className="col-md-1">#</div>
        		<div className="col-md-6">Name</div>
        		<div className="col-md-4">Action</div>
        	</div>
        	</div>
        	{!isLoading?(<FadeIn><CatList state={this.state}/></FadeIn>):(<center><img src={Loader}/></center>)}
            </div>
            </div>
        	</div>
            </div>);
    }
}
export default AddCategory;
