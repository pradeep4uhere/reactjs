import React from 'react';
class UserList extends React.Component {
    constructor() {
        super();
    }

    render () {
        let isLoading = false;
        let listArr = this.props.state.userList;
        let optionItems = listArr.map((val) =>
                <li key={val.id}>{val.first_name} | {val.last_name} | {val.email_address}</li>
            );

        return (
        <div>
            <ul>
               {optionItems}
            </ul>
        </div>
        )
    }
}
//<UserList state={this.state}/>
export default UserList;
