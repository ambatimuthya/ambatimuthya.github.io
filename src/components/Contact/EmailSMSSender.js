/* eslint-disable max-len */
import React, { useState } from 'react';

// import google from 'googleapis';

// import { GoogleSpreadsheet } from 'google-spreadsheet';

// const creds = {
//   type: 'service_account',
//   project_id: 'personal-website-402120',
//   private_key_id: '0d7baac7ae7f72eada3671b7357ce724cadfef9c',
//   private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDmexpn6GBG7TlS\n1qIngkwhy/odROwGlyOiwBKNJe/zR31IdgZKViA8Ttq7ENMBUn0U11krV0uqVpzj\nVTT33tmczzlap3Qv2KUoU0XWTNmN4zwVCUpxAhgbSWTUfTJtuoEdyIqajdEvepm9\nHapu3dqZA0yVGTEEhh07tRZkSE9v1XaKGrRb4ifV8VCbVKi2OLs68g9YZ70ySRc4\nA617D/MIl7xrKdKJC+dhOGeK5RV4zMl/RrcyZY7x8bv9XRNpfgt+HKk/2dd5BztU\nztuiu4FsdfdhiZiUnhzj66b+HfVy2zuLFQZlz7JwOlk4isGbJpCPsXfaZJyZLieg\nQ+aiG1MDAgMBAAECggEAKllwTqtqFV49bDU38l6EsqkSOhKR89wNljgIsJrJ7j+y\ni3/0Q/BzV+F9W2YJ/3IyvYOcRNRzeMcVaMgdRXZTMfb5qOif9rKuFizG5kuUpfec\n8JiWbxFdcJYZytl+TJ86Xkic/y0TxM+YNCGhUWG+auMqTTMlyJkEAhaSGLcYsYmE\nSmfSStsc0+gsza2huLWg+L/TGvM/4qhul+Lw679XSCJ+qDQZdQauZ+75EPwxcRho\nJ1RuwbnMkyNKdvllU0YSVASoACD1fSYMIY2R4A2AWe7Wl8S02QN7uXBbZJu1UcEL\nml4OPUllPCMKGZ+XjDinywQ2O3jCHTvXx5EymA/OMQKBgQD2HK9BbBF6MphoOV6r\n54FVZs76dUXSmsfP/bSrE95HpgSTAjpS/OfFasOzX9G7mJmJQfB3kwHTo2LHUjMX\nb5xjTBYwY8aXBVwPOjQVFAVc7ZBW95ue0oKOk6msn1iK4Zy5Y5ULldjD6++yYvlh\nHLI8oDWb3nR3jeQBwSqHqO2itwKBgQDvvaYGE6C5kFzujQWwew4ZNBU5Tv4kHtUj\nrRL/4UHYziZXfAKNrpPhtIYdZp3HtusoGFV7OrILDOno7ZRxT6ceTt+86gArXFYR\nHRO1Y2Yoa1sigWoSd5EaIpeBmVZcdn4g+JFFh7wIjDGwTTg8D2S5OFEaMcmBORUQ\naZn77CjWFQKBgAD1JZ1sjTjbf4pQRtUGZpNtffqtgCMMpSBjDVPpFOFUfQoRZSaz\ngzdabf6BrfA77MUC86uTb9th9F1wLXC253XfcuqnSLuHss8AW/mFBWxSJFCiUAGz\nMfzaCDv6tr57mD+Eaq0L3TcN8PXRusSs9uiTewHrQKrCa5OyK7cxahNLAoGBAJJ+\nAisIZ1e8XOzvgyB5sP25k5Z3LFgJ9xdbtJZioIfIQCmI/05v9LEgTCs+/v6ASWUw\nqVspXI3gEDZipigvEeE1NQYMvpnATF8cs2RNHqloIEIPbi9mnGWp6YYpmlnZleyz\ntqET9dQLRnmCVfBtP5DmVrh437Z0mOh0fsEvZyyZAoGBAKaNZujMpW9zWhNms+qs\nNPsLKniVLiFg9I+aqn2KjM/veODspXViJxQe+w2HP0lUX2hS4hfIK7EUbUOTlOl9\nGNL+4WzOOKv5YsWwrKuwCHF/Ql1VXqiuTr+oEtKJOiFARteUob+3nMdaCi+wWsQG\nrKr4z+iWs+DLdqVPBLSjYdcE\n-----END PRIVATE KEY-----\n',
//   client_email: 'nagaraj-website-key@personal-website-402120.iam.gserviceaccount.com',
//   client_id: '114563899875923638001',
//   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//   token_uri: 'https://oauth2.googleapis.com/token',
//   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//   client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/nagaraj-website-key%40personal-website-402120.iam.gserviceaccount.com',
//   universe_domain: 'googleapis.com',
// }; // Replace with the path to your JSON key file
// const spreadsheetId = '1MKcn8SYizmrZMbaIe8qGaaB9qzyZ4Vb8VFmKW1ZyAcs'; // Replace with your Google Sheet ID

const EmailSMSSender = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  //   const writeDataToGoogleSheet = async (data) => {
  //     const auth = new google.auth.JWT(
  //       key.client_email,
  //       null,
  //       key.private_key,
  //       ['https://www.googleapis.com/auth/spreadsheets'],
  //     );

  //     await auth.authorize();

  //     try {
  //       const sheets = google.sheets({ version: 'v4', auth });
  //       await sheets.spreadsheets.values.append({
  //         spreadsheetId,
  //         range: 'Sheet1', // Replace with the specific sheet and range
  //         valueInputOption: 'USER_ENTERED',
  //         insertDataOption: 'INSERT_ROWS',
  //         resource: {
  //           values: data,
  //         },
  //       });

  //       console.log('Data written to Google Sheet');
  //     } catch (err) {
  //       console.error('Error writing to Google Sheet:', err);
  //     }
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const dataToWrite = [[email, message]]; // Define the data you want to write
    // writeDataToGoogleSheet(dataToWrite);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          Message:
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Save Email</button>
      </form>
    </div>
  );
};

export default EmailSMSSender;
