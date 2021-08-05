import React from 'react';
import PropTypes from 'prop-types';

/**
 * Share Screen SVG Icon
 *
 * @param {object} props  Data passed to the component
 * @param {number} props.size  Width and height of the icon
 * @param {string} props.className  Additional className for the component
 * @param {object} props.style  Inline style object for the component
 * @returns {object} JSX of the icon
 *
 */
export default function ShareScreenIcon({size, className, style}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`wxc-icon ${className}`} style={style}>
      <path d="M18.75 3.75H5.25C4.25579 3.75115 3.30263 4.14661 2.59962 4.84962C1.89661 5.55263 1.50115 6.50579 1.5 7.5V16.338C1.50115 17.3752 1.9137 18.3696 2.64712 19.103C3.38055 19.8364 4.37495 20.2489 5.41215 20.25H18.5877C19.6249 20.2489 20.6193 19.8364 21.3528 19.103C22.0862 18.3696 22.4988 17.3752 22.5 16.338V7.5C22.4988 6.5058 22.1034 5.55265 21.4004 4.84964C20.6973 4.14664 19.7442 3.75117 18.75 3.75ZM21 16.338C20.9992 16.9775 20.7448 17.5906 20.2926 18.0428C19.8403 18.4949 19.2272 18.7493 18.5877 18.75H5.41215C4.77262 18.7494 4.15945 18.4951 3.70721 18.0429C3.25498 17.5907 3.00064 16.9775 3 16.338V7.5C3.00066 6.90346 3.23792 6.33155 3.65973 5.90973C4.08155 5.48792 4.65346 5.25066 5.25 5.25H18.75C19.3465 5.25066 19.9185 5.48792 20.3403 5.90973C20.7621 6.33155 20.9993 6.90346 21 7.5V16.338Z" fill="var(--wxc-icon--share-screen--color)" fillOpacity="0.95" />
      <path d="M12.5306 8.46952C12.3899 8.3289 12.1992 8.2499 12.0003 8.2499C11.8014 8.2499 11.6106 8.3289 11.47 8.46952L8.46997 11.4695C8.33227 11.6108 8.25575 11.8006 8.257 11.9978C8.25825 12.1951 8.33716 12.3839 8.47665 12.5234C8.61614 12.6629 8.80497 12.7418 9.00223 12.7431C9.19949 12.7443 9.38931 12.6678 9.53055 12.5301L11.25 10.8104V15.0006C11.25 15.1995 11.329 15.3903 11.4697 15.5309C11.6103 15.6716 11.8011 15.7506 12 15.7506C12.1989 15.7506 12.3897 15.6716 12.5303 15.5309C12.671 15.3903 12.75 15.1995 12.75 15.0006V10.8104L14.4697 12.5301C14.6109 12.6678 14.8007 12.7443 14.998 12.7431C15.1953 12.7418 15.3841 12.6629 15.5236 12.5234C15.6631 12.3839 15.742 12.1951 15.7432 11.9978C15.7445 11.8006 15.668 11.6108 15.5303 11.4695L12.5306 8.46952Z" fill="var(--wxc-icon--share-screen--color)" fillOpacity="0.95" />
    </svg>
  );
}

ShareScreenIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

ShareScreenIcon.defaultProps = {
  size: 24,
  className: '',
  style: {},
};
