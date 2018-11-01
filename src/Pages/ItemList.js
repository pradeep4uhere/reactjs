import React from 'react';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isShow: true,
          title:'',
          status:'',
          id:''
        };
        this.updateCategory = this.updateCategory.bind(this);
    }

    updateCategory(id,t,s,type){
        this.props.onClick(id,t,s,type);
    }


    render () {
        let isLoading = false;
        let listArr = this.props.state.itemList;
        let optionItems = listArr.map((val,i) =><div className="row" style={{'border-bottom':'solid 1px #ccc','padding':'5','font-size':'13px'}}>
                    <div className="col-md-2" id="row{val.id}">{i+1}</div>
                    <div className="col-md-4" id="rows{val.id}" style={{'padding':5}}>{val.title}</div>
                    {(val.status==1)?(
                        <div className="col-md-2" id="rowstatus{val.id}" style={{'padding':5,'color':'green'}}>Active</div>):(
                        <div className="col-md-2" id="rowstatus{val.id}" style={{'padding':5,'color':'red'}}>In Active</div>)}
                    <div className="col-md-4" id="rowss{val.id}"><small>
                    <a href="#" onClick={() => this.updateCategory(val.id,val.title,val.status,'e')}>Edit</a> | 
                    <a href="#" onClick={() => this.updateCategory(val.id,val.title,'d')}>Delete</a></small></div>
                </div>

            );
        return (
        <div className="card-body">
            {optionItems}
        </div>
        )
    }
}
export default ItemList;
