import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';


export const PrivateRoute = ({ children, ...rest }) => {
    const { authenticated } = useContext(AuthContext);
  
    if (authenticated === undefined || authenticated === false) {
      return <Link to="/" />;
    }
  
    return children;
  };
