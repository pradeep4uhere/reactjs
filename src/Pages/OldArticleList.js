import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Modal from "react-responsive-modal";
import EditAtricle from './profile/EditArticle.js';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


class PostList extends React.Component {


    constructor() {
        super();
        this.state={
            open: false,
            id:''
        }
        this.onOpenModal =this.onOpenModal.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.getArticlebyId= 'http://localhost:4209/article/getarticlebyid';
    }

    onOpenModal (id){
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

    onOpenModal (id){
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


    onCloseModal = (id) => {
       this.setState({ open: false });
    };

    updateCategory(id,t,s,type){
        this.props.onClick(id,t,s,type);
    }


    render () {
        const { open } = this.state;
        const { title }= this.state; 
        const { id } = this.state;
        const { description } = this.state; 
        const { category_id } = this.state; 
        const { tags } = this.state; 
        let isLoading = false;
        let listArr = this.props.state.postList;
        let optionItems = listArr.map((val,i) =><div className="row" style={{'border-bottom':'solid 1px #ccc','padding':'5','font-size':'13px'}}>
                    <div className="col-md-1" id="row{val.id}">{i+1}</div>
                    <div className="col-md-4" id="rows{val.id}" style={{'padding':5}}>{val.title}</div>
                    <div className="col-md-2" id="rows{val.id}" style={{'padding':5}}>{val.description.substring(0,50)}</div>
                    <div className="col-md-2" id="rows{val.id}" style={{'padding':5}}>{val.categoryName}</div>
                    {(val.status==1)?(
                    <div className="col-md-2" id="rowstatus{val.id}" style={{'padding':5,'color':'green'}}>Active</div>):(
                    <div className="col-md-2" id="rowstatus{val.id}" style={{'padding':5,'color':'red'}}>In Active</div>)}
                    <div className="col-md-1" id="rowss{val.id}"><small>
                    <a href="#" id="routes{val.id}" onClick={() => this.updateCategory(val.id,val.title,'r')}>Edit</a> | 
                    <a href="#" id="edit{val.id}" onClick={() => this.onOpenModal(val.id,val.title,val.category_id,val.description,val.tags)}>Edit</a> | 
                    <a href="#" onClick={() => this.updateCategory(val.id,val.title,'d')}>Delete</a></small></div>

                </div>

            );
        return (
        <div className="card-body">
        <Modal open={open} onClose={this.onCloseModal} center>
         <EditAtricle post = {this.state}/>
        </Modal>
            {optionItems}
        </div>
        )
    }
}
export default PostList;
