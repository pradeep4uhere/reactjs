/*
 * @PageName    :: AllArticle.js
 * @Author      :: Pradeep Kumar
 * @Description :: All Article Lisitng With Edit and Delete functionality
 * @Created Date:: 5 Nov 2018
 */
import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import Loader from '../../bullet-svg-animated.gif';
import FadeIn from 'react-fade-in';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import PostList from '../ArticleList.js';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class AllArticle extends React.Component{
	constructor() {
        super();
        this.addCategoryUrl= 'http://localhost:4209/category/addcategory';
        this.getArticleUrl= 'http://localhost:4209/article/getuserpost';
        this.delCategoryUrl='http://localhost:4209/category/delcategory';
        let  initialCatList = [];
        this.state = {
        	show:false,
        	message:'',
        	title:'',
        	active:'',
        	loading:true,
        	postList: [],
        	id:null,
        	alertTitle:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.updateArticle = this.updateArticle.bind(this);
        
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
		 axios.post(this.getArticleUrl,formData)
	    .then(data => {
	            if(data.data.code==200){
                this.initialCatList = data.data.result.map((values) => {
                    return values
                });
	            setTimeout(function(){
	                this.setState({
	                	loading:false,
	                	postList:this.initialCatList,
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

	updateCategory(i,t,type){
		if(type=='e'){
			this.setState({id:i});
			this.setState({title:t});
		}else if(type=='r'){
			this.props.onClick(i);
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

	updateArticle(a,b,c){
		alert(c)
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
	     	
        	{(loading==false)?(<FadeIn><PostList onClick={this.updateArticle} state={this.state}/></FadeIn>):(<center><img src={Loader}/></center>)}
           
            </div>);
    }
}
export default AllArticle;
