/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const authUser = /* GraphQL */ `
  query AuthUser($id: String!, $password: String!) {
    authUser(id: $id, password: $password) {
      errorCode
      errorMessage
      error
      data
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
        id
        Name
        Domain
        Port
        Handlers {
          type
          route
          target
        }
      }
      nextToken
    }
  }
`;
