import React, { useState } from 'react';
import ReleaseRegistrationPresenter from './ReleaseRegistrationPresenter';

const ReleaseRegistrationContainer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <ReleaseRegistrationPresenter
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    />
  );
};

export default ReleaseRegistrationContainer;
