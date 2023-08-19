import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createProject">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lightin-1"></NavLink>
      </li>
    </ul>
  );
}
