/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServer = /* GraphQL */ `
  mutation CreateServer($input: CreateServerInput!) {
    createServer(input: $input) {
      domain
      handelrs {
        routes
        target
      }
      id
      name
      port
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      account
      password
    }
  }
`;
export const deleteServer = /* GraphQL */ `
  mutation DeleteServer($input: DeleteServerInput!) {
    deleteServer(input: $input) {
      domain
      handelrs {
        routes
        target
      }
      id
      name
      port
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      account
      password
    }
  }
`;
export const updateServer = /* GraphQL */ `
  mutation UpdateServer($input: UpdateServerInput!) {
    updateServer(input: $input) {
      domain
      handelrs {
        routes
        target
      }
      id
      name
      port
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      account
      password
    }
  }
`;
