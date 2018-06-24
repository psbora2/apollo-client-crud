import React from 'react'
import { Mutation } from "react-apollo";
import AddressForm from "./form";
import { UPDATE_ADDRESS_QUERY, ADDRESS_LIST_QUERY } from "../../queries";

const UpdateTodo = (props) => {
  return (
    <Mutation
      mutation={UPDATE_ADDRESS_QUERY}
      update={(cache, { data: { updateAddress } }) => {
        const { addresses } = cache.readQuery({ query: ADDRESS_LIST_QUERY });
        cache.writeQuery({
          query: ADDRESS_LIST_QUERY,
          data: { addresses: addresses }
        });
      }}
      >
      {updateAddress => (
        <AddressForm query_f = {updateAddress} {...props} />
      )}
    </Mutation>
  );
};

export default UpdateTodo;