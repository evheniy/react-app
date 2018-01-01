import React from 'react';
import Loader from 'react-loader';

const options = {
  lines: 13,
  length: 20,
  width: 10,
  radius: 30,
  scale: 1.00,
  corners: 1,
  color: '#000',
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: '50%',
  left: '50%',
  shadow: false,
  hwaccel: false,
  position: 'absolute',
};

module.exports = () => (
  <Loader loaded={false} options={options} className="spinner" />
);
