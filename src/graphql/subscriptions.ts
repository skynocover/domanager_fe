/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateServer = /* GraphQL */ `
  subscription OnCreateServer(
    $domain: String
    $id: ID
    $name: String
    $port: String
  ) {
    onCreateServer(domain: $domain, id: $id, name: $name, port: $port) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String, $password: String) {
    onCreateUser(id: $id, password: $password) {
      account
      password
    }
  }
`;
export const onDeleteServer = /* GraphQL */ `
  subscription OnDeleteServer(
    $domain: String
    $id: ID
    $name: String
    $port: String
  ) {
    onDeleteServer(domain: $domain, id: $id, name: $name, port: $port) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String, $password: String) {
    onDeleteUser(id: $id, password: $password) {
      account
      password
    }
  }
`;
export const onUpdateServer = /* GraphQL */ `
  subscription OnUpdateServer(
    $domain: String
    $id: ID
    $name: String
    $port: String
  ) {
    onUpdateServer(domain: $domain, id: $id, name: $name, port: $port) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String, $password: String) {
    onUpdateUser(id: $id, password: $password) {
      account
      password
    }
  }
`;
