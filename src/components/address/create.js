import React from 'react'
import { Mutation } from "react-apollo";
import AddressForm from "./form";
import {ADD_ADDRESS_QUERY, ADDRESS_LIST_QUERY} from '../../queries';


const AddAddress = () => {
  return (
    <Mutation
      mutation={ADD_ADDRESS_QUERY}
      update={(cache, { data: { addAddress } }) => {
        const { addresses } = cache.readQuery({ query: ADDRESS_LIST_QUERY });
        cache.writeQuery({
          query: ADDRESS_LIST_QUERY,
          data: { addresses: addresses.concat([addAddress]) }
        });
      }}
      >
      {addAddress => (
        <AddressForm query_f = {addAddress}/>
      )}
    </Mutation>
  );
};

export default AddAddress;