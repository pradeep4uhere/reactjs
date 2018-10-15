import React from 'react';
class PostList extends React.Component {
    constructor() {
        super();
    }

    render () {
        let isLoading = false;
        let listArr = this.props.state.postList;
        let optionItems = listArr.map((val) =><div>
                <div class=" alert alert-info">
                <p><h4><b>{val.title}</b></h4>
                </p>
                <p class="text-justify">{val.description}</p>
                <small>Post Date: {val.created_at}</small>
                </div>
                <hr/>
                </div>
            );

        return (
        <div class="panel panel-default">
          {optionItems}
        </div>
        )
    }
}
//<PostList state={this.state}/>
export default PostList;
