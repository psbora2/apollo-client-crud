import gql from "graphql-tag";

export const UPDATE_ADDRESS_QUERY = gql`
  mutation updateAddress($id: ID!, $address1: String!, $address2: String!, $city: String!, $state: String!, $zipcode: String! ) {
      updateAddress(
        id: $id
        address1: $address1
        address2: $address2
        city: $city
        state: $state
        zipcode: $zipcode
        country: "string") {
          id
          address1
          address2
          city
          state
          zipcode
          country
        }
  }
`;

export const ADDRESS_LIST_QUERY = gql`query{addresses{
            id
            address1
            address2
            city
            state
            zipcode
            country
  }
}`;

export const ADD_ADDRESS_QUERY = gql`
  mutation addAddress($address1: String!, $address2: String!, $city: String!, $state: String!, $zipcode: String! ) {
      addAddress(
        address1: $address1
        address2: $address2
        city: $city
        state: $state
        zipcode: $zipcode
        country: "string") {
          id
          address1
          address2
          city
          state
          zipcode
          country
        }
  }
`;

export const DELETE_ADDRESS_QUERY = gql`
  mutation deleteAddress($id:ID!){
      deleteAddress(id: $id){
        id
      }
  }
`;