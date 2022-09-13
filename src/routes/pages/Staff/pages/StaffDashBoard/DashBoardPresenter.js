import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { PageHeader, Tag, Avatar, Form, Input } from 'antd';

const DashBoardPresenter = () => (
  <PageHeader
    title="박한주 사원님"
    className="site-page-header"
    subTitle="mypage"
    tags={<Tag color="blue">STAFF</Tag>}
    avatar={{
      src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
    }}
  >
    <div style={{ display: 'flex' }}>
      <Avatar size={120} icon={<UserOutlined />} />
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
        size="large"
        style={{ width: '500px' }}
      >
        <Form.Item label="사번">
          <Input disabled={true} />
        </Form.Item>
        <Form.Item label="이름">
          <Input name="productionName" />
        </Form.Item>
        <Form.Item label="주소">
          <Input name="productionBrandName" />
        </Form.Item>
        <Form.Item label="이메일">
          <Input name="productionBrandName" />
        </Form.Item>
        <Form.Item label="연락처">
          <Input name="productionBrandName" />
        </Form.Item>
        <Form.Item label="입사일">
          <Input name="productionStandard" disabled={true} />
        </Form.Item>
      </Form>
    </div>
  </PageHeader>
);

export default DashBoardPresenter;
