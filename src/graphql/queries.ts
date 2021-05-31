/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const authUser = /* GraphQL */ `
  query AuthUser($id: String!, $password: String!) {
    authUser(id: $id, password: $password)
  }
`;
export const getServers = /* GraphQL */ `
  query GetServers {
    getServers {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: String!) {
    getUser(id: $id) {
      account
      password
    }
  }
`;
export const listServers = /* GraphQL */ `
  query ListServers(
    $filter: TableServerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        domain
        id
        name
        port
      }
      nextToken
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: TableUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        account
        password
      }
      nextToken
    }
  }
`;
