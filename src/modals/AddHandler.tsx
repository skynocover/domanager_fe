import React from 'react';
import ReactDOM from 'react-dom';
import { ColumnsType } from 'antd/lib/table';
import * as antd from 'antd';

import { AppContext, server, handler } from '../AppContext';
import { PrimaryButton } from '../components/PrimaryButton';
import { Notification } from '../components/Notification';

interface AddHandlerProps {
  handlerID: number;
}

export const AddHandler = ({ handlerID }: AddHandlerProps) => {
  const appCtx = React.useContext(AppContext);

  React.useEffect(() => {}, []);

  const onFinish = async (values: any) => {
    appCtx.setModal(null);

    appCtx.setDataSource((preState: server[]) => {
      // let maxHandlerID = 0;

      // preState.map((server) => {
      //   server.Handlers?.map((handler) => {
      //     if (handler.id > maxHandlerID) {
      //       maxHandlerID = handler.id;
      //     }
      //     return handler;
      //   });
      //   return server;
      // });

      preState.map((server) => {
        if (server.id === handlerID && server.Handlers) {
          server.Handlers.push({
            // id: maxHandlerID + 1,
            type: values.type,
            route: values.route,
            target: values.target,
          });
          server.Handlers = [...server.Handlers];
        }
        return { ...server };
      });

      return [...preState];
    });

    Notification.add('success', 'Add new handler success');
  };

  return (
    <antd.Form onFinish={onFinish} initialValues={{ type: 'proxy' }}>
      <h5 className="font-weight-bold mb-4">Add New Handler</h5>

      <antd.Form.Item name="type" label="Type">
        <antd.Select>
          <antd.Select.Option value={'proxy'}>{'proxy'}</antd.Select.Option>
          <antd.Select.Option value={'file_server'}>{'file_server'}</antd.Select.Option>
        </antd.Select>
      </antd.Form.Item>

      <antd.Form.Item name="route">
        <antd.Input prefix={<i className="fa fa-exchange" />} placeholder="Please input routes" />
      </antd.Form.Item>

      <antd.Form.Item
        name="target"
        rules={[{ required: true, message: 'Target should not empty!' }]}
      >
        <antd.Input
          prefix={<i className="fa fa-space-shuttle" />}
          placeholder="Please input target"
        />
      </antd.Form.Item>

      <antd.Form.Item className="text-center">
        <PrimaryButton title="Add" htmlType="submit" />
      </antd.Form.Item>
    </antd.Form>
  );
};
