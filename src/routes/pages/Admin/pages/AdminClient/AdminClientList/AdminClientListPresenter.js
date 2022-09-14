import React, { useState, useRef } from 'react';
import { Button, Table, Typography, BackTop, Input, Space, Modal } from 'antd';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';

const { confirm } = Modal;

const AdminClientListPresenter = ({
  clientList,
  loading,
  error,
  onDeleteHandler,
}) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const showDeleteConfirm = (employeeId) => {
    confirm({
      title: '해당 거래처를 삭제하시겠습니까?',
      icon: <ExclamationCircleOutlined />,
      okText: '확인',
      okType: 'danger',
      cancelText: '취소',

      onOk() {
        onDeleteHandler(employeeId);
      },
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
          placeholder={'사원 번호를 입력해 주세요.'}
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

  const columns = [
    {
      title: '거래처 이름',
      dataIndex: 'clientName',
      width: 200,
      ...getColumnSearchProps('clientName'),
      render: (name, record) => (
        <Link to={`/admin/client/${record.clientId}`}>{name}</Link>
      ),
    },
    {
      title: '주소',
      dataIndex: 'clientAddress',
      width: 500,
    },
    {
      title: '전화번호',
      dataIndex: 'clientTel',
      width: 200,
    },
    {
      title: '거래처 담당자',
      dataIndex: 'clientManager',
      width: 200,
      ...getColumnSearchProps('clientManager'),
    },
    {
      title: '계약일',
      dataIndex: 'clientRegisteredDate',
      defaultSortOrder: 'ascend',
      width: 200,
    },
    {
      title: '삭제',
      dataIndex: 'deleteButton',
      width: 100,
      align: 'center',
      render: (name, record) => (
        <Button
          type="primary"
          size="middle"
          danger
          onClick={() => {
            showDeleteConfirm(record.clientId);
          }}
        >
          삭제
        </Button>
      ),
    },
  ];

  return loading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: ' center',
      }}
    >
      <Loading loading={loading} error={error} data={clientList} />
    </div>
  ) : (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ margin: 5 }}>
          거래처 목록
        </Typography.Title>
      </div>
      <Table rowKey="clientId" columns={columns} dataSource={clientList} />
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default AdminClientListPresenter;
