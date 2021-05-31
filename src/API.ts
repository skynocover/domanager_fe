/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateServerInput = {
  domain?: string | null;
  name: string;
  port?: string | null;
};

export type Server = {
  __typename: 'Server';
  domain?: string | null;
  handelrs?: Array<Handler | null> | null;
  id: string;
  name: string;
  port?: string | null;
};

export type Handler = {
  __typename: 'Handler';
  routes?: string | null;
  target: string;
};

export type CreateUserInput = {
  account: string;
  password: string;
};

export type User = {
  __typename: 'User';
  account: string;
  password: string;
};

export type DeleteServerInput = {
  id: string;
};

export type DeleteUserInput = {
  id: string;
};

export type UpdateServerInput = {
  domain?: string | null;
  handlers?: Array<HandlerInput | null> | null;
  id: string;
  name?: string | null;
  port?: string | null;
};

export type HandlerInput = {
  routes?: string | null;
  target: string;
};

export type UpdateUserInput = {
  id: string;
  password?: string | null;
};

export type TableServerFilterInput = {
  domain?: TableStringFilterInput | null;
  id?: TableIDFilterInput | null;
  name?: TableStringFilterInput | null;
  port?: TableStringFilterInput | null;
};

export type TableStringFilterInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
};

export type TableIDFilterInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
};

export type ServerConnection = {
  __typename: 'ServerConnection';
  items?: Array<Server | null> | null;
  nextToken?: string | null;
};

export type TableUserFilterInput = {
  id?: TableStringFilterInput | null;
  password?: TableStringFilterInput | null;
};

export type UserConnection = {
  __typename: 'UserConnection';
  items?: Array<User | null> | null;
  nextToken?: string | null;
};

export type CreateServerMutationVariables = {
  input: CreateServerInput;
};

export type CreateServerMutation = {
  createServer?: {
    __typename: 'Server';
    domain?: string | null;
    handelrs: Array<null> | null;
    id: string;
    name: string;
    port?: string | null;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User';
    account: string;
    password: string;
  } | null;
};

export type DeleteServerMutationVariables = {
  input: DeleteServerInput;
};

export type DeleteServerMutation = {
  deleteServer?: {
    __typename: 'Server';
    domain?: string | null;
    handelrs: Array<null> | null;
    id: string;
    name: string;
    port?: string | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: 'User';
    account: string;
    password: string;
  } | null;
};

export type UpdateServerMutationVariables = {
  input: UpdateServerInput;
};

export type UpdateServerMutation = {
  updateServer?: {
    __typename: 'Server';
    domain?: string | null;
    handelrs: Array<null> | null;
    id: string;
    name: string;
    port?: string | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: 'User';
    account: string;
    password: string;
  } | null;
};

export type AuthUserQueryVariables = {
  id: string;
  password: string;
};

export type AuthUserQuery = {
  authUser?: boolean | null;
};

export type GetServersQuery = {
  getServers?: Array<{
    __typename: 'Server';
    domain?: string | null;
    handelrs: Array<null> | null;
    id: string;
    name: string;
    port?: string | null;
  } | null> | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: 'User';
    account: string;
    password: string;
  } | null;
};

export type ListServersQueryVariables = {
  filter?: TableServerFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListServersQuery = {
  listServers?: {
    __typename: 'ServerConnection';
    items?: Array<{
      __typename: 'Server';
      domain?: string | null;
      id: string;
      name: string;
      port?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: TableUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'UserConnection';
    items?: Array<{
      __typename: 'User';
      account: string;
      password: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateServerSubscriptionVariables = {
  domain?: string | null;
  id?: string | null;
  name?: string | null;
  port?: string | null;
};

export type OnCreateServerSubscription = {
  onCreateServer?: {
    __typename: 'Server';
    domain?: string | null;
    handelrs: Array<null> | null;
    id: string;
    name: string;
    port?: string | null;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  id?: string | null;
  password?: string | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: 'User';
    account: string;
    password: string;
  } | null;
};

export type OnDeleteServerSubscriptionVariables = {
  domain?: string | null;
  id?: string | null;
  name?: string | null;
  port?: string | null;
};

export type OnDeleteServerSubscription = {
  onDeleteServer?: {
    __typename: 'Server';
    domain?: string | null;
    handelrs: Array<null> | null;
    id: string;
    name: string;
    port?: string | null;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  id?: string | null;
  password?: string | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: 'User';
    account: string;
    password: string;
  } | null;
};

export type OnUpdateServerSubscriptionVariables = {
  domain?: string | null;
  id?: string | null;
  name?: string | null;
  port?: string | null;
};

export type OnUpdateServerSubscription = {
  onUpdateServer?: {
    __typename: 'Server';
    domain?: string | null;
    handelrs: Array<null> | null;
    id: string;
    name: string;
    port?: string | null;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  id?: string | null;
  password?: string | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: 'User';
    account: string;
    password: string;
  } | null;
};
