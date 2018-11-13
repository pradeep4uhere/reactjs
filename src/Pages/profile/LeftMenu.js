/*
 * @PageName    :: LeftMenu.js
 * @Author      :: Pradeep Kumar
 * @Description :: All Module can be load here on the based of Routing
 * @Created Date:: 1 Nov 2018
 */
import React from 'react';
import Avatar from '../../images.jpeg';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import AddAtricle from './AddArticle.js';
import AllArticle from './AllArticle.js';
import AddCategory from './AddCategory.js';
import AddSubCategory from './AddSubCategory.js';
import AddTags from './AddTag.js';
import Blank from './Blank.js';
import AddBlock from './AddBlock.js';
const queryString = require('query-string');
class LeftMenu extends React.Component{
  constructor() {
        super()
        this.state = {
              addAtricle  : false,
              addCategory : false,
              addTags     : false,
              blank       : false,
              page        : window.location.hash,
              allArticle  : false 
        };
        this.getBlockComponent = this.getBlockComponent.bind(this)
        this.getBlockComponent(window.location.hash);
    }

  // dispatching an action based on state change
  componentWillReceiveProps() {
    this.getBlockComponent(window.location.hash);
  }


  getBlockComponent (block) {
     switch (block) {
      case '#addblock': 
            this.setState({
              addBlock:true,
              addAtricle:false,
              addCategory : false,
              addTags     : false,
              addSubCategory : false,
              allArticle:false,
              blank:false
            });
            break;
      case 'AddAtricle': 
            this.setState({
              addBlock:false,
              addAtricle:true,
              addCategory : false,
              addTags     : false,
              addSubCategory : false,
              allArticle:false,
              blank:false
            });
            break;
      case '#allarticle': 
            this.setState({
            	addBlock:false,
                addAtricle:false,
                allArticle:true,
                addCategory : false,
                addTags     : false,
                addSubCategory : false,
                blank:false
            });
            console.log(this.state)
            break;
      case 'AddCategory': 
            this.setState({
              addBlock:false,
              addAtricle:false,
              allArticle:false,
              addCategory : true,
              addSubCategory : false,
              addTags     : false,
              blank:false
            });

            break;
      case 'AddSubCategory': 
            this.setState({
              addBlock:false,
              addAtricle:false,
              allArticle:false,
              addCategory : false,
              addSubCategory : true,
              addTags     : false,
              blank:false
            });

            break;
      case 'AddTags': 
            this.setState({
              addBlock:false,
              addAtricle:false,
              allArticle:false,
              addCategory : false,
              addSubCategory : false,
              addTags     : true,
              blank:false
            });


            break;
      default:
        return this.setState({blank:true}); break;
    }
  }

  componentDidMount(){
    this.getBlockComponent(window.location.hash);
  }

  
  render(){
      const { addBlock } = this.state;
      const { addAtricle } = this.state;
      const { allArticle } = this.state;
      const { addCategory } = this.state;
      const { addSubCategory } = this.state;
      const { addTags } = this.state;
      const { blank } = this.state;
      return(
        <div class="row">
                    <div class="col-md-2" style={{'marginTop':10,'fontSize':13,'color':'#333'}}>  
                      <div class="card">
                        <ul class="list-group list-group">
                          <li class="list-group-item"><i class="fa fa-key"></i><b>Setting</b></li>
                          <li class="list-group-item"><a href="#addarticle"  onClick={this.getBlockComponent.bind(this,'AddAtricle')}><i class="fa fa-compass"></i> <span><b>Add New Article</b></span></a></li>
                          <li class="list-group-item"><a href="#allarticle"  onClick={this.getBlockComponent.bind(this,'#allarticle')}><i class="fa fa-compass"></i> <span><b>All Article</b></span></a></li>
                          <li class="list-group-item"><a href="#addcategory"  onClick={this.getBlockComponent.bind(this,'AddCategory')}><i class="fa fa-book"></i> <span>Add Category</span></a></li>
                          <li class="list-group-item"><a href="#addsubcategory"  onClick={this.getBlockComponent.bind(this,'AddSubCategory')}><i class="fa fa-book"></i> <span>Add Sub Category</span></a></li>
                          <li class="list-group-item"><a href="#addtags"  onClick={this.getBlockComponent.bind(this,'AddTags')}><i class="fa fa-book"></i> <span>Add Tages</span></a></li>
                          <li class="list-group-item"><a href="#addblock" onClick={this.getBlockComponent.bind(this,'#allblock')}><i class="fa fa-question-circle"></i> <span>Add Front Block</span></a></li>
                          <li class="list-group-item"><a href="#"><i class="fa fa-arrow-circle-o-left"></i> <span>Link-2</span></a></li>
                          <li class="list-group-item"><a href="#"><i class="fa fa-book"></i> <span>Link-3</span></a></li>
                          <li class="list-group-item"><a href="#"><i class="fa fa-compass"></i> <span>Link-4</span></a></li>
                      </ul>
                     </div>
                   </div>
                   <div class="col-md-10">
                    {addBlock?(<AddBlock/>):(null)}
                    {addAtricle?(<AddAtricle/>):(null)}
                    {allArticle?(<AllArticle/>):(null)}
                    {addCategory?(<AddCategory/>):(null)}
                    {addSubCategory?(<AddSubCategory/>):(null)}
                    {addTags?(<AddTags/>):(null)}
                    {blank?(<Blank/>):(null)}
                   </div>
                </div>
        ); 
    }
}
export default LeftMenu;
