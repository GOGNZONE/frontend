/*global kakao*/
import React, { useEffect, useState } from 'react';
import { Map, MapInfoWindow } from 'react-kakao-maps-sdk';

const KakaoMap = ({ address, category }) => {
  const [loc, setLoc] = useState({});
  const lat = loc.Ma;
  const lng = loc.La;

  useEffect(() => {
    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setLoc(new kakao.maps.LatLng(result[0].y, result[0].x));
      } else {
        setLoc({
          Ma: 35.17287108093096,
          La: 129.1306926774801,
        });
      }
    });
  }, [address]);
  return (
    <>
      {lat || lng ? (
        <div>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: lat,
              lng: lng,
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
                lat: lat,
                lng: lng,
              }}
              removable={true} // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
            >
              {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
              <div
                style={{ padding: '5px', color: '#000', textAlign: 'center' }}
              >
                {category}
              </div>
            </MapInfoWindow>
          </Map>
        </div>
      ) : (
        <div>없음</div>
      )}
    </>
  );
};

export default KakaoMap;
