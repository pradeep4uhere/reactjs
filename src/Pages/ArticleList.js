import React from 'react';
import axios from 'axios';
import $ from 'jquery';
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
            id:'',
            title:'',
            description:'',
            tags:[],
            categoryName:'',
            isPost:false,
            
        }
        this.updateArticle =this.updateArticle.bind(this);
        this.getArticlebyId= 'http://localhost:4209/article/getarticlebyid';
        console.log(this.state.isPost)
    }
    updateArticle (id,title,description,tags,category_id,cName){
        this.setState({open: true});
        this.setState({id: id});
        this.setState({title: title});
        this.setState({description: description});
        this.setState({tags: tags});
        this.setState({category_id: category_id});
        this.setState({categoryName: cName});
        //this.setState({id: id});
    }
    render () {
        console.log("Parent==="+this.props.isPost);
        const { open } = this.state;
        const { id } = this.state;
        let isLoading = false;
        let listArr = this.props.state.postList;
        console.log("Post List==="+this.props.state.postList);
        let optionItems = listArr.map((val,i) =><div className="row" style={{'border-bottom':'solid 1px #ccc','padding':'5','font-size':'13px'}}>
                    <div className="col-md-1" id="row{val.id}">{i+1}</div>
                    <div className="col-md-4" id="rows{val.id}" style={{'padding':5}}>{val.title}</div>
                    <div className="col-md-2" id="rows{val.id}" style={{'padding':5}}>{val.description.substring(0,50)}</div>
                    <div className="col-md-2" id="rows{val.id}" style={{'padding':5}}>{val.categoryName}</div>
                    {(val.status==1)?(
                    <div className="col-md-2" id="rowstatus{val.id}" style={{'padding':5,'color':'green'}}>Active</div>):(
                    <div className="col-md-2" id="rowstatus{val.id}" style={{'padding':5,'color':'red'}}>In Active</div>)}
                    <div className="col-md-1" id="rowss{val.id}"><small>
                    <a href="#" id="edit{val.id}" onClick={() => this.updateArticle(val.id,val.title,val.description,val.tags,val.category_id,val.categoryName)}>Edit</a> | 
                    <a href="#" onClick={() => this.updateArticle(val.id,val.title,'d')}>Delete</a></small></div>

                </div>

            );
                 
        return (<div>
          {open?(<EditAtricle post = {this.state}/>):(
            <div className="row" style={{'font-size':'12px'}}>
            <div className="col-md-12">
            <div className="card" style={{'margin-top':10}}>
            <div className="card-header">
            <div class="row" style={{'font-size':'12px'}}>
            <div className="col-md-1">#</div>
            <div className="col-md-4">Name</div>
            <div className="col-md-2">Description</div>
            <div className="col-md-2">Category Name</div>
            <div className="col-md-2">Status</div>
            <div className="col-md-1 pull-right">Action</div>
            </div>
            </div>
            <div className="card-body">
            {optionItems}
            </div>
            </div>
            </div>
            </div>
          )}
          </div>
        )
    }
}
export default PostList;

