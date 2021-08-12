import React from 'react';
import PropTypes from 'prop-types';

/**
 * Camera SVG Icon
 *
 * @param {object} props  Data passed to the component
 * @param {number} props.size  Width and height of the icon
 * @param {string} props.className  Additional className for the component
 * @param {object} props.style  Inline style object for the component
 * @returns {object} JSX of the icon
 *
 */
export default function CameraIcon({size, className, style}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`wxc-icon ${className}`} style={style}>
      <path d="M21.7866 6.97363C21.5696 6.83826 21.3213 6.76108 21.0658 6.74954C20.8102 6.73799 20.556 6.79247 20.3276 6.90771C20.3048 6.91926 20.2825 6.93197 20.261 6.9458L18 8.38299V7.50024C17.9988 6.50604 17.6034 5.55289 16.9004 4.84988C16.1974 4.14687 15.2442 3.75141 14.25 3.75024H5.25C4.2558 3.75141 3.30265 4.14688 2.59964 4.84989C1.89663 5.55289 1.50117 6.50604 1.5 7.50024V16.5002C1.50117 17.4944 1.89663 18.4476 2.59964 19.1506C3.30265 19.8536 4.2558 20.2491 5.25 20.2502H14.25C15.2442 20.2491 16.1974 19.8536 16.9004 19.1506C17.6034 18.4476 17.9988 17.4944 18 16.5002V15.616L20.261 17.0532C20.2821 17.0671 20.3041 17.0795 20.3269 17.0905C20.5555 17.2051 20.8097 17.2593 21.0651 17.248C21.3206 17.2366 21.569 17.1601 21.7865 17.0257C22.0041 16.8913 22.1837 16.7035 22.3082 16.4801C22.4326 16.2567 22.4979 16.0052 22.4978 15.7495V8.24948C22.4987 7.99366 22.4338 7.74192 22.3092 7.51847C22.1847 7.29502 22.0047 7.10739 21.7866 6.97363ZM16.5 16.5002C16.4993 17.0968 16.2621 17.6687 15.8403 18.0905C15.4185 18.5123 14.8465 18.7496 14.25 18.7502H5.25C4.65346 18.7496 4.08155 18.5123 3.65973 18.0905C3.23792 17.6687 3.00065 17.0968 3 16.5002V7.50024C3.00065 6.90371 3.23791 6.33179 3.65973 5.90997C4.08154 5.48816 4.65346 5.2509 5.25 5.25024H14.25C14.8465 5.2509 15.4185 5.48816 15.8403 5.90997C16.2621 6.33179 16.4993 6.90371 16.5 7.50024V16.5002ZM18 13.8392V10.1598L20.9978 8.25464L20.9993 15.7451L18 13.8392Z" fill="var(--wxc-icon--color)" fillOpacity="0.95" />
      <path d="M6.75 10.5001C7.57843 10.5001 8.25 9.82849 8.25 9.00006C8.25 8.17163 7.57843 7.50006 6.75 7.50006C5.92157 7.50006 5.25 8.17163 5.25 9.00006C5.25 9.82849 5.92157 10.5001 6.75 10.5001Z" fill="var(--wxc-icon--active-color)" />
    </svg>
  );
}

CameraIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

CameraIcon.defaultProps = {
  size: 24,
  className: '',
  style: {},
};
