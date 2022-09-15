/*global kakao*/
import React from 'react';
import { Map, MapInfoWindow } from 'react-kakao-maps-sdk';

const KakaoMap = ({ address, category }) => {
  console.log(address);
  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 37.54699,
          lng: 127.09598,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px',
        }}
        level={4} // 지도의 확대 레벨
      >
        <MapInfoWindow // 인포윈도우를 생성하고 지도에 표시합니다
          position={{
            // 인포윈도우가 표시될 위치입니다
            lat: 37.54699,
            lng: 127.09598,
          }}
          removable={true} // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
        >
          {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
          <div style={{ padding: '5px', color: '#000', textAlign: 'center' }}>
            {category}
          </div>
        </MapInfoWindow>
      </Map>
    </>
  );
};

export default KakaoMap;
