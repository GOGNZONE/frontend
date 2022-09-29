/*global Kakao*/
import { Button } from 'antd';
import React, { useEffect } from 'react';
const JAVASCRIPT_KEY = '0ad7cbfa653b908d306843862013c1eb';

const KakaoLogin = () => {
  const loginWithKakao = () => {
    Kakao.init(JAVASCRIPT_KEY);
    Kakao.Auth.login({
      scope: 'friends,talk_message',
      success: function (res) {
        Kakao.API.request({
          url: '/v1/api/talk/friends',
          success: function (res) {
            return res;
          },
          // fail: function (err) {return JSON.stringify(err);
        });
      },
    });
  };

  return (
    <>
      <Button type="primary" onClick={loginWithKakao}>
        카카오 자동 로그인
      </Button>
    </>
  );
};

export default KakaoLogin;
