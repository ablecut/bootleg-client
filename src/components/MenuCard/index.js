import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import classes from './index.module.css';

const MenuCard = (props) => {

  const {
    icon,
    title,

    containerClass,
    iconContainerClass,
    titleClass
  } = props;

  return(
    <div className={clsx(classes.container, containerClass)}>
      <div className={clsx(classes.iconContainer, iconContainerClass)}>
        {icon}
      </div>
      <span className={clsx(classes.title, titleClass)}>{title}</span>
    </div>
  );
}

MenuCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string
}

export default MenuCard;