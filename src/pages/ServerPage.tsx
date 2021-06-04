import React from 'react';
import ReactDOM from 'react-dom';
import { ColumnsType } from 'antd/lib/table';
import * as antd from 'antd';
import * as cookie from 'js-cookie';
import { gql } from '@apollo/client';
import { Notification } from '../components/Notification';
import { DangerButton } from '../components/DangerButton';
import { AppContext, server, handler, client } from '../AppContext';
import { AddServer } from '../modals/AddServer';
import { EditServer } from '../modals/EditServer';
import { AddHandler } from '../modals/AddHandler';
import { EditHandler } from '../modals/EditHandler';
import { listServers } from '../graphql/queries';
import {putServer }from '../graphql/mutations'


export const ServerPage = () => {
  const appCtx = React.useContext(AppContext);
  const [activeKey, setActiveKey] = React.useState<string>('');

  const initialize = async () => {
    let data = await client.query({
      query: gql(listServers),
      fetchPolicy: 'network-only'
    });

    // let result = await appCtx.fetch('get', '/api/servers');
    if (data) {
      let result = JSON.parse(JSON.stringify(data));
      console.log('servers: ', JSON.stringify(result));

      appCtx.setDataSource(result.data.listServers.items);
    }
  };

  React.useEffect(() => {
    let user = JSON.parse(cookie.get('user') || '{}');
    initialize();
    if (appCtx.dataSource.length > 0) {
      setActiveKey(appCtx.dataSource[0].Name);
    }
  }, []);

  const deleteHandler = (handler: handler) => {
    appCtx.setDataSource((preState: server[]) => {
      preState.map((server) => {
        if (server.Handlers && server.Handlers?.length > 0) {
          server.Handlers = server.Handlers?.filter((itemH) => itemH.type !== handler.type && itemH.route !== handler.route && itemH.target!== handler.target);
          // server.Handlers = server.Handlers?.filter((itemH) => itemH.id !== handler.id);
        }
        return { ...server };
      });

      return [...preState];
    });
  };

  const deleteServer = () => {
    appCtx.setDataSource((preState: server[]) => {
      return preState.filter((server) => server.Name !== activeKey);
    });
  };

  const putServers = async () => {
    try {
      // let data = await appCtx.fetch('put', '/api/servers', { servers: appCtx.dataSource,token:'ckpgkd3es000008lac4yge3ii' });
      let servers = [];
      for (const server of appCtx.dataSource){
        servers.push({
          id:server.id,
          Name:server.Name,
          Domain:server.Domain,
          Port:server.Port,
          Handlers:server.Handlers
        })
      }
      console.log('servers: ',JSON.stringify(servers))
      let variables =  {
            servers: servers,
            // token: 'ckpgoohog000008mk6vvd7sfi',
          }
      let data= await appCtx.mutate(putServer,'putServer',variables)
          if (data) {
            initialize(); 
          }

      // let data = await client.mutate({
      //   mutation: gql(putServer),
      //   variables: {
      //     servers: servers,
      //     token: 'ckpgkd3es000008lac4yge3ii',
      //   },
      // });
      // if (data) {
      //   console.log('data: ', JSON.stringify(data))
      //   if () {
          
      //   }
      //   initialize();
      // }
    } catch (error) {
      Notification.add('error', error.message);
    }
  };

  const columns: ColumnsType<handler> = [
    {
      title: '類型',
      align: 'center',
      render: (item) => (
        <antd.Tag color={item.type === 'proxy' ? 'green' : 'geekblue'}>{item.type}</antd.Tag>
      ),
    },
    {
      title: 'routes',
      align: 'center',
      dataIndex: 'routes',
    },
    {
      title: 'target',
      align: 'center',
      dataIndex: 'target',
    },
    {
      title: '',
      align: 'center',
      render: (item) => (
        <antd.Button
          onClick={() => {
            appCtx.setModal(<EditHandler handler={item} serverName={activeKey} />);
          }}
          type="primary"
        >
          Edit Handler
        </antd.Button>
      ),
    },
    {
      title: '',
      align: 'center',
      render: (item) => (
        <DangerButton
          title={'Delete'}
          message={'Delete handler'}
          onClick={() => {
            deleteHandler(item);
          }}
        />
      ),
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-end ">
        <antd.Button
          onClick={() => {
            appCtx.setModal(<AddServer />);
          }}
          type="primary"
        >
          New Server
        </antd.Button>

        <DangerButton
          title={'Deploy Server'}
          message={'Sure to deploy servers?'}
          onClick={() => {
            putServers();
          }}
        />
      </div>
      <antd.Tabs
        type="card"
        onChange={(key) => {
          setActiveKey(key);
        }}
      >
        {appCtx.dataSource.map((item, index) => (
          <antd.Tabs.TabPane tab={item.Name} key={item.Name}>
            <div>
              <antd.Descriptions bordered>
                {item.Domain && (
                  <antd.Descriptions.Item label="Domain">{item.Domain}</antd.Descriptions.Item>
                )}

                <antd.Descriptions.Item label="Port">{item.Port}</antd.Descriptions.Item>
              </antd.Descriptions>
              <div className="mb-3" />
              {item.Handlers && item.Handlers.length > 0 && (
                <antd.Table dataSource={item.Handlers} columns={columns} pagination={false} />
              )}
              <div className="d-flex mt-3 justify-content-end ">
                <antd.Button
                  onClick={() => {
                    appCtx.setModal(<AddHandler handlerID={item.id} />);
                  }}
                  type="primary"
                >
                  New Handler
                </antd.Button>
                <antd.Button
                  onClick={() => {
                    let cserver = appCtx.dataSource.filter((item) => item.Name === activeKey);
                    appCtx.setModal(<EditServer server={cserver[0]} />);
                  }}
                  type="primary"
                >
                  Edit Server
                </antd.Button>
                <DangerButton
                  title={'Delete Server'}
                  message={'Delete Server?'}
                  onClick={() => {
                    deleteServer();
                  }}
                />
              </div>
            </div>
          </antd.Tabs.TabPane>
        ))}
      </antd.Tabs>
    </div>
  );
};
