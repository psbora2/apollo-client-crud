import React from 'react'
import { Mutation } from "react-apollo";
import {DELETE_ADDRESS_QUERY, ADDRESS_LIST_QUERY } from "../../queries"

class DeleteAddress extends React.Component {
  render(){
    const {id} = this.props;
    return (
      <Mutation
        mutation={DELETE_ADDRESS_QUERY}
        update={(cache, { data: { deleteAddress } }) => {
          const { addresses } = cache.readQuery({ query: ADDRESS_LIST_QUERY });
          cache.writeQuery({
            query: ADDRESS_LIST_QUERY,
            data: { addresses: addresses.filter(e => e.id !== id) }
          });
        }}
        >
        {deleteAddress => (
          <div><a onClick = {
            e => {
              e.preventDefault();
              deleteAddress({ variables: {id:parseInt(e.target.dataset.tag, 0)}})
            }
          } data-tag = {id}>delete</a></div>
        )}
      </Mutation>
    );
  }
};

export default DeleteAddress;