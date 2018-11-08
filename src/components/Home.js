import React from 'react';
import Img1 from '../bell/img/porf-1.jpg';
import PostItem from '../components/postItem';
import Post4Item from '../components/post4Item';
import SideItem from '../components/SideItem';
class Home extends React.Component {
  constructor() {
        super();
        this.state={
            col:null
        }
  }
  render() {
    return (
    <div>
    <div class="col">
    <br/>
    <div class="row">
      <div class="col-md-8">
      <div class="default"><b>Top Headlines</b></div>
        <hr/>
        <PostItem coloum="col-md-12"/>
      </div>

      <div class="col-md-4">
        <div class="default"><b>Popular News</b></div>
        <hr/>
        <PostItem coloum="col-md-4"/>
      </div>
    </div>
    <hr style={{'border':'thin dashed'}}/>

     <div class="row">


      <div class="col-md-5">
        <div class="default"><b>Local News</b></div>
        <hr/>
        <div class="row">
          <div className="col-md-6">
            <Post4Item/>
          </div>
          <div className="col-md-6">
            <Post4Item/>
          </div>
      </div>

      </div>

      <div class="col-md-5">
        <div class="default"><b>Business News</b></div>
        <hr/>
        <div class="row">
          <div className="col-md-6">
            <Post4Item/>
          </div>
          <div className="col-md-6">
            <Post4Item/>
          </div>
      </div>

      </div>

      <div class="col-md-2">
         <div class="default"><b>Popular Category</b></div>
         <hr/>
         <ul class="list-group">
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Category-1</li>
          <li class="list-group-item">Second item</li>
          <li class="list-group-item">Third item</li>
        </ul>
      </div>
    </div>
    <hr/>
     <div class="row">


      <div class="col-md-5">
        <div class="default"><b>Local News</b></div>
        <hr/>
        <div class="row">
          <div className="col-md-12">
            <ul class="list-group">
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
          <li class="list-group-item"><a href="#">Title Goes Here reat way to ensure that your </a></li>
        </ul>
          </div>
          
      </div>

      </div>

      <div class="col-md-5">
        <div class="default"><b>Business News</b></div>
        <hr/>
        <div class="row">
          <div className="col-md-6">
            <Post4Item/>
          </div>
          <div className="col-md-6">
            <Post4Item/>
          </div>
      </div>

      </div>

      <div class="col-md-2">
         <div class="default"><b>Popular Category</b></div>
         <hr/>
         <div className="col-md-12">
            <SideItem/>
            <hr/>
            <SideItem/>
            <hr/>
            <SideItem/>
            <hr/>
            <SideItem/>
          </div>
      </div>
    </div>

    </div>
    </div>
    )
  }
}

export default Home;
