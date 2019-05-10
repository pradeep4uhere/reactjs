/*
 * @PageName    :: AddCategory.js
 * @Author      :: Pradeep Kumar
 * @Description :: Category module, Lisitng, Add Edit and Delete functionality
 * @Created Date:: 15 Oct 2018
 */
import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import Loader from '../../bullet-svg-animated.gif';
import FadeIn from 'react-fade-in';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import CatList from '../CatList.js';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class AddCategory extends React.Component{
	constructor() {
        super();
        this.addCategoryUrl= 'http://localhost:4209/category/addcategory';
        this.getCategoryUrl= 'http://localhost:4209/category/getcategory';
        this.delCategoryUrl='http://localhost:4209/category/delcategory';
        let  initialCatList = [];
        this.state = {
        	show:false,
        	message:'',
        	title:'',
        	active:'',
        	loading:true,
        	catList: [],
        	id:null,
        	alertTitle:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        
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
		    axios.post(this.addCategoryUrl,formData)
		    .then(data => {
		            if(data.data.code==200){
		              setTimeout(function(){
		                this.setState({
		                	show:true,
		                	alertTitle:'Success',
		                	title:'',
		                	message:data.data.message
		                });
	                    this.myFormRef.reset();
	                    this.setState({loading:true});
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
               	message:'Please Enter Category Title First'
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
	                this.setState({loading:false});
	              }.bind(this),1000); 
	            }
	            console.log(this.state)
	    }).catch(error => console.log(error));
	}

	componentDidMount(){
		this.getList();	

	}

	updateCategory(i,t,s,type){
		if(type=='e'){
			this.setState({id:i});
			this.setState({title:t});
			this.setState({active:s});
		}else{
			this.setState({loading:true});
			this.deleteCategory(i,t);
		}
	}

	deleteCategory(i,t){
		confirmAlert({
	      title: ' Delete "'+t+'" ?',
	      message: 'Are you sure to do this.',
	      buttons: [
	        {
	          label: 'Yes',
	          onClick: () => this.deleteNow(i)
	        },
	        {
	          label: 'No',
	          onClick: () => null
	        }
	      ]
	    })
	}



	deleteNow(i){
		const formData = {
	   		id : i,
	   		token:localStorage.getItem('token')
   		}
   		axios.post(this.delCategoryUrl,formData)
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



	changeTitle(event){
		var title = event.target.value;
    	this.setState({ title: title });
	}






    render(){
    	const { message } = this.state;
    	const { alertTitle } = this.state;
    	const { title } = this.state;
    	const { active } = this.state;
     	const { loading } = this.state;
        return(<div>
        	<SweetAlert
	        show={this.state.show}
	        title={alertTitle}
	        text={message}
	        onConfirm={() => this.setState({ show: false })}
	      />
	      	<div className="row" style={{'font-size':'12px'}}>
	      	<div className="col-md-4">
        	<div className="card" style={{'marginTop':10}}>
        	<div className="card-header"><b>Add New Category</b></div>
        	<div class="card-body" style={{'font-size':'12px'}}>
            <form onSubmit={this.handleSubmit} className="form" style={{'margin':5}} ref={(el) => this.myFormRef = el}>
            <div class="form-group">
            <label>Enter Category Name</label>
			<input type="text" name="title" class="form-control" placeholder="Enter Category Title Here" maxlength={100} style={{marginBottom: 2}} 
			ref="title" onChange={this.changeTitle.bind(this)} value={title}/>
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
        		<div className="col-md-2">Cat Id</div>
        		<div className="col-md-4">Name</div>
        		<div className="col-md-2">Status</div>
        		<div className="col-md-3 pull-right">Action</div>
        	</div>
        	</div>
        	{(loading==false)?(<FadeIn><CatList onClick={this.updateCategory} state={this.state}/></FadeIn>):(<center><img src={Loader}/></center>)}
            </div>
            </div>
        	</div>
            </div>);
    }
}
export default AddCategory;
