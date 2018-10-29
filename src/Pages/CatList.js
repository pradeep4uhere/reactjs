import React from 'react';
class CatList extends React.Component {
    constructor() {
        super();
        this.updateCategory = this.updateCategory.bind(this);
    }

    updateCategory(id){
        
    }



    render () {
        let isLoading = false;
        let listArr = this.props.state.catList;
        let optionItems = listArr.map((val,i) =><div className="row" style={{'border-bottom':'solid 1px #ccc','padding':'5'}}>
                    <div className="col-md-2" id="row{val.id}">{i+1}</div>
                    <div className="col-md-6" id="rows{val.id}" style={{'padding':5}}>{val.title}</div>
                    <div className="col-md-4" id="rowss{val.id}"><small><a href="#" onClick={this.updateCategory(val.id)}>Edit</a> | <a href="#">Delete</a></small></div>
                </div>

            );
        return (
        <div className="card-body">
            {optionItems}
        </div>
        )
    }
}
export default CatList;
