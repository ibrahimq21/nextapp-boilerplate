import React, { useState, useEffect } from 'react';
import mysql from 'mysql2';

const DatabaseStatus = () => {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    const dbConfig = {
      host: 'bgdem8kzbkrufvykn5k3-mysql.services.clever-cloud.com',
      user: 'uocz3ageer2uwwfg',
      password: 'HClxrf6M1x4nBAM8NUSj',
      database: 'bgdem8kzbkrufvykn5k3',
    };

    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
      if (err) {
        setStatus('Connection Failed');
      } else {
        setStatus('Connected');
      }
      connection.end();
    });
  }, []);

  return (
    <div>
      <h2>Database Status:</h2>
      <p>{status}</p>
    </div>
  );
};

export default DatabaseStatus;