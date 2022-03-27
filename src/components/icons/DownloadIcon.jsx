import React from 'react';
import PropTypes from 'prop-types';

/**
 * DownloadIcon SVG Icon
 *
 * @param {object} props  Data passed to the component
 * @param {number} props.size  Width and height of the icon
 * @param {string} props.className  Additional className for the component
 * @param {object} props.style  Inline style object for the component
 * @returns {object} JSX of the icon
 *
 */
export default function DownloadIcon({size, className, style}) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={`wxc-icon ${className}`} style={style}>
      <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="white" fill-opacity="0.95"/>
      <path d="M19.5 19.5005H8.5C8.36739 19.5005 8.24021 19.5532 8.14645 19.6469C8.05268 19.7407 8 19.8679 8 20.0005C8 20.1331 8.05268 20.2603 8.14645 20.354C8.24021 20.4478 8.36739 20.5005 8.5 20.5005H19.5C19.6326 20.5005 19.7598 20.4478 19.8536 20.354C19.9473 20.2603 20 20.1331 20 20.0005C20 19.8679 19.9473 19.7407 19.8536 19.6469C19.7598 19.5532 19.6326 19.5005 19.5 19.5005Z" fill="black" fillOpacity="0.95"/>
      <path d="M13.6465 16.3535C13.6929 16.4 13.748 16.4368 13.8087 16.4619C13.8693 16.4871 13.9344 16.5 14 16.5C14.0657 16.5 14.1307 16.4871 14.1913 16.4619C14.252 16.4368 14.3071 16.4 14.3535 16.3535L17.3535 13.3535C17.4 13.3071 17.4368 13.252 17.4619 13.1913C17.487 13.1307 17.5 13.0657 17.5 13C17.5 12.9343 17.487 12.8693 17.4619 12.8087C17.4368 12.748 17.4 12.6929 17.3535 12.6465C17.3071 12.6001 17.252 12.5632 17.1913 12.5381C17.1307 12.513 17.0657 12.5001 17 12.5001C16.9344 12.5001 16.8694 12.513 16.8087 12.5381C16.748 12.5632 16.6929 12.6001 16.6465 12.6465L14.5 14.793V8C14.5 7.86739 14.4473 7.74021 14.3536 7.64645C14.2598 7.55268 14.1326 7.5 14 7.5C13.8674 7.5 13.7402 7.55268 13.6464 7.64645C13.5527 7.74021 13.5 7.86739 13.5 8V14.793L11.3535 12.6465C11.2596 12.5534 11.1327 12.5013 11.0004 12.5016C10.8682 12.5019 10.7415 12.5545 10.648 12.648C10.5545 12.7415 10.5019 12.8682 10.5016 13.0005C10.5013 13.1327 10.5534 13.2596 10.6465 13.3535L13.6465 16.3535Z" fill="black" fill-opacity="0.95"/>
    </svg>

  );
}

DownloadIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

DownloadIcon.defaultProps = {
  size: 28,
  className: '',
  style: {},
};
