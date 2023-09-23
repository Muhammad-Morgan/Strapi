import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;












/* import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
    }, {
        id: 2,
        url: '/about',
        text: 'about',
    }, {
        id: 3,
        url: '/projects',
        text: 'projects',
    }, {
        id: 4,
        url: '/contact',
        text: 'contact',
    }, {
        id: 5,
        url: '/profile',
        text: 'profile',
    },
];
export const social = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaFacebook />,
    }, {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    }, {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />,
    }, {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <FaBehance />,
    },
];
 */

/*
export const data = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Peter'},
    {id: 3, name: 'Susan'},
    {id: 4, name: 'Anna'},
] */
