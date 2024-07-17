import React from 'react';
import { Link } from 'react-router-dom';
import ret from '../images/return.png';

const ReturnPage = ({ homepages }) => {
  return (
    <div className="size-40 right-52">
      <img src={ret} alt="" />
      <Link to={homepages} />
    </div>
  );
};

export default ReturnPage;
