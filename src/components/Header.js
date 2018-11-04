import React from 'react'
import PropTypes from 'prop-types';


const Header = (props) => {
  const {title} = props;
  return (
    <div className="header">
      <h2>{title}</h2>
    </div>
  )
};

Header.defaultProps = {
  title: "Account Balance in React"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;

