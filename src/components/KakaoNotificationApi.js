/*global Kakao*/
const JAVASCRIPT_KEY = '0ad7cbfa653b908d306843862013c1eb';
const GONGZONE_LOGO_URL =
  'https://gongzone1bucket.s3.ap-northeast-2.amazonaws.com/logo.png';

export const sendKakaoTalk = (
  productionName,
  client,
  releaseDate,
  releaseQuantity,
  releaseId,
  delivery,
) => {
  // console.log(client);
  Kakao.init(JAVASCRIPT_KEY);
  // console.log(Kakao.isInitialized());

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

  Kakao.API.request({
    url: '/v1/api/talk/friends/message/default/send',
    data: {
      receiver_uuids: ['u4ixhb2FvY-jkaWcrpykkqeVuY63gbGDsdc'],
      template_object: {
        object_type: 'feed',
        content: {
          title: 'GONGZONE',
          description: productionName + ' 출고안내',
          image_url: GONGZONE_LOGO_URL,
          link: {
            web_url: 'https://developers.kakao.com',
            mobile_web_url: 'https://developers.kakao.com',
          },
        },
        item_content: {
          profile_text:
            productionName + ' 출고 안내' + ' (' + client.clientName + ')',
          items: [
            {
              item: '출고코드',
              item_op: releaseId,
            },
            {
              item: '출고일자',
              item_op: releaseDate,
            },
            {
              item: '출고수량',
              item_op: releaseQuantity + '개',
            },
            {
              item: '택배사',
              item_op: delivery.deliveryCompanyName,
            },
            {
              item: '운송장번호',
              item_op: delivery.deliveryTrackingNumber,
            },
          ],
        },
      },
    },
    success: function (response) {
      console.log(response);
    },
    fail: function (error) {
      console.log(error);
    },
  });
};
