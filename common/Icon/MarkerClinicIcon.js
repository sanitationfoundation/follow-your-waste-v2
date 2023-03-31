import React from 'react';
import Image from 'next/image';

const MarkerClinicIcon = ({ ...props }) => {
	return <Image priority width={24} height={30} src="/marker-clinic.svg" alt="" {...props} />;
};

export default MarkerClinicIcon;
