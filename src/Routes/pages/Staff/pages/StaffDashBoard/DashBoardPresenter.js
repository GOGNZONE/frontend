import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import {
  PageHeader,
  Row,
  Tag,
  Avatar,
  Form,
  Input,
  InputNumber,
  Space,
} from 'antd';

const Content = ({ children, extraContent }) => (
  <Row>
    <div
      style={{
        flex: 1,
      }}
    >
      {children}
    </div>
    <div className="image">{extraContent}</div>
  </Row>
);

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
          span: 7,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        size="large"
      >
        <Form.Item label="사번">
          <Input disabled={true} />
        </Form.Item>
        <Form.Item label="이름">
          <Input name="productionName" placeholder="생산 제품명" />
        </Form.Item>
        <Form.Item label="주소">
          <Input name="productionBrandName" placeholder="생산 제품 브랜드명" />
        </Form.Item>
        <Form.Item label="이메일">
          <Input name="productionBrandName" placeholder="생산 제품 브랜드명" />
        </Form.Item>
        <Form.Item label="연락처">
          <Input name="productionBrandName" placeholder="생산 제품 브랜드명" />
        </Form.Item>
        <Form.Item label="입사일">
          <Input name="productionStandard" placeholder="생산 제품 규격" />
        </Form.Item>
      </Form>
    </div>
  </PageHeader>
);

export default DashBoardPresenter;
