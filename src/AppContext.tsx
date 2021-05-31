import React from 'react';
import axios from 'axios';
import * as antd from 'antd';
import firebase from 'firebase/app';
import { authUser } from './graphql/queries';
import { gql } from '@apollo/client';
import { Notification } from './components/Notification';
import { ApolloClient, InMemoryCache, NormalizedCacheObject, DefaultOptions } from '@apollo/client';
import AWSAppSyncClient, { defaultDataIdFromObject } from 'aws-appsync';
import appSyncConfig from './aws-exports';
export const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: 'API_KEY',
    apiKey: appSyncConfig.aws_appsync_apiKey,
  },
});

interface AppContextProps {
  loginPage: string;
  homePage: string;
  setModal: (modal: any) => void;

  account: string;
  setAccount: (value: string) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;

  dataSource: server[];
  setDataSource: React.Dispatch<React.SetStateAction<server[]>>;

  fetch: (
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    url: string,
    param?: any,
  ) => Promise<any>;

  login: (account: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  redirect: () => Promise<void>;

  apolloClient: ApolloClient<NormalizedCacheObject>;
}

const AppContext = React.createContext<AppContextProps>(undefined!);

interface AppProviderProps {
  children: React.ReactNode;
}

// Initialize Firebase
const firebaseConfig = {};
firebase.initializeApp(firebaseConfig);
export const app = firebase;

export interface server {
  id: number;
  domain: string;
  name: string;
  port: string;
  handlers: handler[];
}

export interface handler {
  id: number;
  type: string;
  routes: string | null;
  target: string;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [loginPage] = React.useState('/#/login');
  const [homePage] = React.useState('/#/server');
  const [modal, setModal] = React.useState<any>(null);

  const [account, setAccount] = React.useState('');
  const [isAdmin, setIsAdmin] = React.useState(false);

  const [dataSource, setDataSource] = React.useState<server[]>([]); //coulmns data

  /////////////////////////////////////////////////////

  React.useEffect(() => {
    redirect();
    axios.defaults.baseURL = '';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  }, []);

  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  };

  const apolloClient = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  });

  const fetch = async (
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    url: string,
    param?: any,
  ) => {
    let data: any = null;

    try {
      const response = await axios({
        method,
        url,
        data: param,
      });
      console.log('response', response.data);

      if (response.data.errorCode === 999999) {
        window.location.href = loginPage;
        return null;
      }

      if (response.data.errorCode !== 0) {
        throw new Error(response.data.errorMessage);
      }

      data = response.data;
    } catch (error) {
      Notification.add('error', error.message);
    }

    return data;
  };

  const login = async (account: string, password: string): Promise<any> => {
    // const data = await fetch('post', `/api/login`, {
    //   account,
    //   password,
    // });
    try {
      let data = await client.query({
        query: gql`
          ${authUser}
        `,
        variables: {
          id: account,
          password: password,
        },
      });
      // setAccount(account);

      // const data = { errorCode: '0' };

      if (data) {
        console.log('login data: ', data);

        // if (data.errorCode === 0) {
        Notification.add('success', '驗證成功');
        window.location.href = homePage;
        // } else {
        //   window.location.href = loginPage;
        // }
      } else {
        window.location.href = loginPage;
      }
    } catch (error) {}
  };

  const logout = async () => {
    // await fetch('post', '/api/account/logout', {});
    window.location.href = loginPage;
  };

  const redirect = async () => {
    // let data = await fetch('post', '/api/admin/redirect');
    // if (!data) {
    //   window.location.href = loginPage;
    // }
  };

  /////////////////////////////////////////////////////

  return (
    <AppContext.Provider
      value={{
        loginPage,
        homePage,
        setModal: (modal: any) => setModal(modal),

        account,
        setAccount,
        isAdmin,
        setIsAdmin,
        dataSource,
        setDataSource,

        fetch,

        login,
        logout,
        redirect,

        apolloClient,
      }}
    >
      {modal && (
        <antd.Modal
          visible={modal !== null}
          onOk={() => setModal(null)}
          onCancel={() => setModal(null)}
          footer={null}
          closable={false}
        >
          {modal}
        </antd.Modal>
      )}

      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
