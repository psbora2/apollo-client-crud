import React from 'react';
import { graphql } from 'react-apollo';
import AddAddress from './create';
import DeleteAddress from './deleteAddress';
import AddressModal from './modal';
import 'antd/dist/antd.css';
import {ADDRESS_LIST_QUERY} from '../../queries';

const reverse= (a) => {
    var temp = [];
    var len = a.length;
    for (var i = (len - 1); i >=0 ; i--) {
        temp.push(a[i]);
    }
    return temp;
}

const AddressListDumb = ({ data: { addresses, loading, error }}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (<div > <AddAddress></AddAddress>
  	<table className="table">
  		<thead>
    		<tr>
    			<th>id</th>
          <th>city</th>
          <th>address1</th>
          <th>address2</th>
          <th> state </th>
          <th> show </th>
          <th> action </th>
        </tr>
      </thead>
		  {reverse(addresses).map(({   id, address1, address2, city, state, zipcode, country }) => (
      <tr>
        <th>{id}</th>
        <th>{city}</th>
        <th>{address1}</th>
        <th>{address2}</th>
        <th>{state}</th>
        <th> <AddressModal id = {id} address1 = {address1} address2 = {address2} city = {city}
        state ={state} zipcode = {zipcode} country = {country}/></th>
        <th> <DeleteAddress id = {id}/> </th>
      </tr>)
		  )}
		</table>
  </div>);
}

export const AddressList = graphql(ADDRESS_LIST_QUERY)((AddressListDumb ));