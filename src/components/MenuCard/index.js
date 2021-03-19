import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import classes from './index.module.css';

const MenuCard = (props) => {

  const {
    icon,
    title,
    preventDefault,
    to,

    onCardClick,

    containerClass,
    iconContainerClass,
    titleClass
  } = props;

  const _onCardClick = (e) => {
    if (preventDefault) e.preventDefault();

    if (typeof onCardClick === 'function') {
      onCardClick();
    }
  }

  return(
    <Link to={to} className={classes.link}>
      <div onClick={_onCardClick} className={clsx(classes.container, containerClass)}>
        <div className={clsx(classes.iconContainer, iconContainerClass)}>
          {icon}
        </div>
        <span className={clsx(classes.title, titleClass)}>{title}</span>
      </div>
    </Link>
  );
}

MenuCard.defaultProps = {
  preventDefault: false
}

MenuCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  to: PropTypes.string,
  preventDefault: PropTypes.bool,

  onCardClick: PropTypes.func,

  containerClass: PropTypes.string,
  iconContainerClass: PropTypes.string,
  titleClass: PropTypes.string
}

export default MenuCard;