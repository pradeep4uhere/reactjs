/*
 * @PageName    :: CatListOptions.js
 * @Author      :: Pradeep Kumar
 * @Description :: Options List Of Category
 * @Created Date:: 02 Nov 2018
 */
import React from 'react';
import axios from 'axios'
import Select from 'react-select';

class CatListOptions extends React.Component {
    constructor(props) {
        super(props);
        let  initialCatList = [];
        this.getCategoryUrl= 'http://localhost:4209/category/getcategoryoptions';
        this.state = {
              catList: {},
              isShow: false,
              optionItems:null,
              options:[],
              selectedOption: {
                          value:this.props.categoryId.category_id,
                          label:this.props.categoryId.categoryName
                        }
        };
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log('Option selected:', selectedOption);
    }

    getList(){
    const user_id =localStorage.getItem('user_id');
    const token =localStorage.getItem('token');
    const formData = {
            user_id : user_id,
            token:localStorage.getItem('token')
          }
    axios.post(this.getCategoryUrl,formData)
      .then(data => {
            if(data.data.code==200){
               this.setState({options : data.data.result});
            }
      }).catch(error => console.log(error));
  }

   componentDidMount(){
        this.getList(); 
    }

    render () {
        const { options } = this.state;
        const { selectedOption } = this.state;
        return (<Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    name='categoryId'
                />
        )
    }
}
export default CatListOptions;
