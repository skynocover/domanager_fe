/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ServerInput = {
  id: string,
  Domain?: string | null,
  Port?: string | null,
  Name?: string | null,
  Handlers?: Array< HandlerInput | null > | null,
};

export type HandlerInput = {
  type: string,
  route?: string | null,
  target: string,
};

export type response = {
  __typename: "response",
  errorCode: number,
  errorMessage?: string | null,
  error?: string | null,
  data?: string | null,
};

export type TableServerFilterInput = {
  id?: TableStringFilterInput | null,
  Domain?: TableStringFilterInput | null,
  Port?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ServerConnection = {
  __typename: "ServerConnection",
  items?:  Array<Server | null > | null,
  nextToken?: string | null,
};

export type Server = {
  __typename: "Server",
  id: string,
  Name?: string | null,
  Domain?: string | null,
  Port?: string | null,
  Handlers?:  Array<Handler | null > | null,
};

export type Handler = {
  __typename: "Handler",
  type: string,
  route?: string | null,
  target: string,
};

export type PutServerMutationVariables = {
  servers: Array< ServerInput | null >,
  token?: string | null,
};

export type PutServerMutation = {
  putServer?: string | null,
};

export type AuthUserQueryVariables = {
  id: string,
  password: string,
};

export type AuthUserQuery = {
  authUser?:  {
    __typename: "response",
    errorCode: number,
    errorMessage?: string | null,
    error?: string | null,
    data?: string | null,
  } | null,
};

export type ListServersQueryVariables = {
  filter?: TableServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServersQuery = {
  listServers?:  {
    __typename: "ServerConnection",
    items?:  Array< {
      __typename: "Server",
      id: string,
      Name?: string | null,
      Domain?: string | null,
      Port?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
