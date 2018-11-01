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
import AddAtricle from './AddAtricle.js';
import AddCategory from './AddCategory.js';
import AddSubCategory from './AddSubCategory.js';
import AddTags from './AddTag.js';
import Blank from './Blank.js';
class LeftMenu extends React.Component{
  constructor() {
        super()
        this.state = {
            item: {
              addAtricle  :  false,
              addCategory : true,
              addTags     : false,
              blank       :true
            }
        };
        this.getBlockComponent = this.getBlockComponent.bind(this)
        
    }
  getBlockComponent (block) {
    switch (block) {
      case 'AddAtricle': 
            this.setState({
              addAtricle:true,
              addCategory : false,
              addTags     : false,
              addSubCategory : false,
              blank:false
            });
            break;
      case 'AddCategory': 
            this.setState({
              addAtricle:false,
              addCategory : true,
              addSubCategory : false,
              addTags     : false,
              blank:false
            });

            break;
      case 'AddSubCategory': 
            this.setState({
              addAtricle:false,
              addCategory : false,
              addSubCategory : true,
              addTags     : false,
              blank:false
            });

            break;
      case 'AddTags': 
            this.setState({
              addAtricle:false,
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
  
  render(){
      const { addAtricle } = this.state;
      const { addCategory } = this.state;
      const { addSubCategory } = this.state;
      const { addTags } = this.state;
      const { blank } = this.state;
      return(
        <div class="row">
                    <div class="col-md-3" style={{'marginTop':10,'fontSize':13,'color':'#333'}}>  
                      <div class="card">
                        <ul class="list-group list-group">
                          <li class="list-group-item"><i class="fa fa-key"></i><b>Setting</b></li>
                          <li class="list-group-item"><a href="#"  onClick={this.getBlockComponent.bind(this,'AddAtricle')}><i class="fa fa-compass"></i> <span><b>Add New Article</b></span></a></li>
                          <li class="list-group-item"><a href="#"  onClick={this.getBlockComponent.bind(this,'AddCategory')}><i class="fa fa-book"></i> <span>Add Category</span></a></li>
                          <li class="list-group-item"><a href="#"  onClick={this.getBlockComponent.bind(this,'AddSubCategory')}><i class="fa fa-book"></i> <span>Add Sub Category</span></a></li>
                          <li class="list-group-item"><a href="#"  onClick={this.getBlockComponent.bind(this,'AddTags')}><i class="fa fa-book"></i> <span>Add Tages</span></a></li>
                          <li class="list-group-item"><a href="#"><i class="fa fa-question-circle"></i> <span>Link-1</span></a></li>
                          <li class="list-group-item"><a href="#"><i class="fa fa-arrow-circle-o-left"></i> <span>Link-2</span></a></li>
                          <li class="list-group-item"><a href="#"><i class="fa fa-book"></i> <span>Link-3</span></a></li>
                          <li class="list-group-item"><a href="#"><i class="fa fa-compass"></i> <span>Link-4</span></a></li>
                      </ul>
                     </div>
                   </div>
                   <div class="col-md-9">
                    {addAtricle?(<AddAtricle/>):(null)}
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
