import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getRelease } from '../../../../../../apis/releaseApi';
import ReleaseDetailsPresenter from './ReleaseDetailsPresenter';

const ReleaseDetailsContainer = () => {
  const { releaseIdParams } = useParams();
  const [release, setRelease] = useState({
    releaseDate: '',
    releaseDescription: '',
    releaseQuantity: '',
    releaseTotalPrice: '',
    releaseType: '',
    releaseClientDto: {
      clientId: '',
      clientName: '',
      clientManager: '',
      clientTel: '',
      clientAddress: '',
      employeeName: '',
    },
    releaseProductionDto: {
      productionName: '',
      productionBrandName: '',
      productionPrice: '',
    },
    deliveryDto: {
      deliveryId: '',
      deliveryCompanyName: '',
      deliveryTrackingNumber: '',
    },
  });

  // useEffect(() => {
  //   getReleaseApi(releaseIdParams);
  // }, [releaseIdParams]);

  // const getReleaseApi = (releaseIdParams) => {
  //   getRelease(releaseIdParams).then((response) => {
  //     setRelease(response.data);
  //   });
  // };

  return <ReleaseDetailsPresenter release={release} />;
};

export default ReleaseDetailsContainer;
