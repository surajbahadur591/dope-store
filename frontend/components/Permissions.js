import {Query} from 'react-apollo'
import Error from './ErrorMessage'
import gql from 'graphql-tag'
import { render } from 'react-dom';
import React from 'react'
import Table from './styles/Table'
import SickButton from './styles/SickButton'
import PropTypes from 'prop-types'

const ALL_USERS_QUERY = gql`
    query{
        users{
            id
            name
            email
            permissions
        }
    }
`;

const possiblePermissions = [
    'ADMIN',
    'USER',
    'ITEMCREATE',
    'ITEMUPDATE',
    'ITEMDELETE',
    'PERMISSIONUPDATE',
]


const Permissions = (props) => {
    return (

        <Query query={ALL_USERS_QUERY}>

            {({data, loading, error})=> ( console.log (data) ||  
                <div><Error error={error}></Error>
                <div>
                    <h1> Manage User's Permission</h1>

                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
    {possiblePermissions.map (permission => <th key={permission}> {permission}</th>)}
                            <th>Here</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.map(user => <UserPermission key={user.id}user={user}/>)}
                        </tbody>
                    </Table>


                </div>

                </div>
                

            )}
        </Query>
        
    )
    }


class UserPermission extends React.Component {

    static propTypes ={
        user: PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            id: PropTypes.string,
            permission: PropTypes.array,
            
        }).isRequired,
    };

    state = {
        permissions: this.props.user.permissions,
    };
    handlePermissionChange =(e) => {
        const checkbox = e.target;
        
        let updatedPermissions = [...this.state.permissions];
        if (checkbox.checked){
            updatedPermissions.push(checkbox.value);
        } else {
            updatedPermissions = updatedPermissions.filter(permission => permission !== checkbox.value);
        }
        this.setState( {
            permissions: updatedPermissions,
        })
        console.log(updatedPermissions)


    }
    render(){

        const user = this.props.user;
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {possiblePermissions.map(permission => (
                    <td key={permission}>
                        <label htmlFor={`${user.id}-permission-${permission}`}>

                            <input type="checkbox" checked={this.state.permissions.includes(permission)}
                            value={permission}
                            onChange={this.handlePermissionChange}></input>
                        </label>
                    </td>
                ))}
                <td> 
                        <SickButton>Update</SickButton>
                </td>
            </tr>
        )
    }
}
export default Permissions

