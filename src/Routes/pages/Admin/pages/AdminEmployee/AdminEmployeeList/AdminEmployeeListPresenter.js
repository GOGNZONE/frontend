import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Table, Typography, BackTop, Input, Space, Spin } from 'antd';
import Highlighter from 'react-highlight-words';

const AdminEmployeeListPresenter = ({
  employeeList,
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
      title: '사원번호',
      dataIndex: 'employeeId',
      width: 180,
      ...getColumnSearchProps('employeeId'),
      sorter: (a, b) => a.employeeId - b.employeeId,
    },
    {
      title: '이름',
      dataIndex: 'employeeName',
      width: 200,
      ...getColumnSearchProps('employeeName'),
      render: (name, record) => (
        <Link to={`/admin/employee/${record.employeeId}`}>{name}</Link>
      ),
    },
    {
      title: '주소',
      dataIndex: 'employeeAddress',
      width: 200,
    },
    {
      title: '전화번호',
      dataIndex: 'employeePhone',
      width: 200,
    },
    {
      title: '입사일',
      dataIndex: 'employeeHiredate',
      defaultSortOrder: 'ascend',
      width: 200,
    },
    {
      title: '권한',
      dataIndex: 'employeeRole',
    },
    {
      title: '비고',
      render: (record) => (
        <Button onClick={() => onDeleteHandler(record.employeeId)}>삭제</Button>
      ),
    },
  ];

  if (loading) return <Spin spinning={loading} size="large" />;
  if (error)
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error',
      showConfirmButton: false,
      timer: 1500,
    });
  if (!employeeList) return null;
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ margin: 5 }}>
          사원 목록
        </Typography.Title>
        <div>
          <Link to="/admin/employee">
            <Button
              type="primary"
              style={{
                margin: 5,
                backgroundColor: '#FEB139',
                border: '#FEB139',
              }}
            >
              등록
            </Button>
          </Link>
        </div>
      </div>
      <Spin spinning={loading}>
        <Table
          rowKey="employeeId"
          columns={columns}
          dataSource={employeeList}
        />
      </Spin>
      <BackTop visibilityHeight={100} />
    </>
  );
};

export default AdminEmployeeListPresenter;
