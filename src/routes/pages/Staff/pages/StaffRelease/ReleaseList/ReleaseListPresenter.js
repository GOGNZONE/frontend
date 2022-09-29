import React from 'react';
import {
  Typography,
  Table,
  BackTop,
  Button,
  Modal,
  Spin,
  Tag,
  Input,
  Space,
} from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import Today from 'components/Today';
import { sendKakaoTalk } from 'components/KakaoNotificationApi';
import Highlighter from 'react-highlight-words';
import moment from 'moment';

const { Text } = Typography;

const ReleaseListPresenter = ({
  dataSource,
  loading,
  searchInput,
  setSearchText,
  setSearchedColumn,
  searchedColumn,
  searchText,
}) => {
  const info = () => {
    Modal.info({
      title: '출고 안내 카카오 알림톡 전송',
      content: <div></div>,

      onOk() {},
    });
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={'출고 대상을 입력해 주세요.'}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            검색
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            초기화
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            검색 취소
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: '출고코드',
      dataIndex: 'releaseId',
      ...getColumnSearchProps('releaseId'),
      render: (id) => <Link to={`/staff/release/${id}`}>{id}</Link>,
      sorter: (a, b) => a.releaseId - b.releaseId,
    },
    {
      title: '출고일자',
      dataIndex: 'releaseDate',
      width: 180,
      render: (date, record) => (
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          key={record.releaseId}
        >
          {record.releaseConfirmed ? (
            <Text style={{ marginRight: 5 }} delete>
              {date}
            </Text>
          ) : (
            <Text mark style={{ marginRight: 5 }}>
              {date}
            </Text>
          )}
          {record.releaseConfirmed ? (
            <Tag color="#f50">출고확정</Tag>
          ) : (
            <Today releaseDate={date} />
          )}
        </div>
      ),
      sorter: (a, b) =>
        moment(a.releaseDate).unix() - moment(b.releaseDate).unix(),
    },
    {
      title: '출고수량',
      dataIndex: 'releaseQuantity',
      sorter: (a, b) => a.releaseQuantity - b.releaseQuantity,
    },
    {
      title: '출고방식',
      dataIndex: 'releaseType',
    },
    {
      title: '출고 대상 회사',
      dataIndex: 'clientName',
      render: (_, { client }) => <div>{client.clientName}</div>,
    },
    {
      title: '출고 대상 상품',
      dataIndex: 'productionName',
      ...getColumnSearchProps('productionName'),
    },
    {
      title: '카카오 알림톡',
      dataIndex: 'kakaoNotificationButton',
      align: 'center',
      width: 115,
      render: (_, record) => (
        <Button
          type="primary"
          size="middle"
          style={{
            backgroundColor: '#FAE100',
            border: '#FAE100',
            color: '#3C1E1E',
          }}
          onClick={() => {
            sendKakaoTalk(
              record.productionName,
              record.client,
              record.releaseDate,
              record.releaseQuantity,
              record.releaseId,
              record.delivery,
            );
            info();
          }}
        >
          전송
        </Button>
      ),
    },
  ];
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3}>출고 목록</Typography.Title>
        <Link to="/staff/production/list-completed">
          <Button
            type="primary"
            style={{
              margin: 5,
              backgroundColor: '#293462',
              border: '#293462',
            }}
          >
            생산 목록
          </Button>
        </Link>
      </div>
      <Spin spinning={loading}>
        <Table
          showSorterTooltip={{ title: '정렬' }}
          rowKey="releaseId"
          columns={columns}
          dataSource={dataSource}
          tableLayout="fixed"
        />
      </Spin>
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default ReleaseListPresenter;
