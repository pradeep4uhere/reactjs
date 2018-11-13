import React from 'react';

class PostList extends React.Component {
    constructor() {
        super();
    }

    render () {
        let isLoading = false;
        let listArr = this.props.state.postList;
        console.log("Post List==="+this.props.state.postList);

        let optionItems = listArr.map((val) =><div>
                
                <div class=" alert alert-info">
                <p><b>{val.title}</b></p>
                <p class="text-justify">{val.description}</p>
                <div>
                    <small style={{float: 'left'}}>Post Date: {val.created_at}</small>
                    <small style={{float: 'right'}}>By: {val.first_name}</small>
                </div>
                <hr/>
                </div>
                </div>
            );

        return (
        <div class="panel panel-default fixHeight">
            {optionItems}
        </div>
        )
    }
}
export default PostList;
