import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-08-24T09:24:00');
    setAge(Math.floor(((Date.now() - birthTime) / divisor).toFixed(11)));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current Age',
    value: <Age />,
  },
  {
    key: 'visa status',
    label: 'Current Visa Status(USA)',
    value: 'F1-CPT',
  },
  {
    key: 'hometown',
    label: 'Hometown',
    value: 'Tirupati, India',
    link:
      'https://www.google.com/maps/place/Tirupati,+Andhra+Pradesh,+India/@13.6276524,79.4265032,12z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b0f88620427:0xcf4152d1daca0cac!8m2!3d13.6287557!4d79.4191795!16zL20vMDg5bHJj?entry=ttu',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Raleigh, NC',
    link: 'https://maps.app.goo.gl/nBKxJAnEXbefKqdE7',
  },
  {
    key: 'spoken-languages',
    label: 'Languages I Speak',
    value: 'English, Telugu, Hindi',
  },
  {
    key: 'languages',
    label: 'Languages I Type',
    value: 'C/C++, Verilog, SystemVerilog, Python',
  },
];

export default data;
