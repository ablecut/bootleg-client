import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import classes from './index.module.css';

const MenuCard = (props) => {

  const {
    icon,
    title,

    onCardClick,

    containerClass,
    iconContainerClass,
    titleClass
  } = props;

  const _onCardClick = () => {
    if (typeof onCardClick === 'function') {
      onCardClick();
    }
  }

  return(
    <div onClick={_onCardClick} className={clsx(classes.container, containerClass)}>
      <div className={clsx(classes.iconContainer, iconContainerClass)}>
        {icon}
      </div>
      <span className={clsx(classes.title, titleClass)}>{title}</span>
    </div>
  );
}

MenuCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,

  onCardClick: PropTypes.string,

  containerClass: PropTypes.string,
  iconContainerClass: PropTypes.string,
  titleClass: PropTypes.string
}

export default MenuCard;