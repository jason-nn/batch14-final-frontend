import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  selected: string;
  matchSelectedTo: string;

  route: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({
  selected,
  matchSelectedTo,
  route,
  text,
}) => {
  return (
    <motion.div
      initial={{ scale: selected === matchSelectedTo ? 1.1 : 1.0 }}
      animate={{ scale: 1.0 }}
      whileHover={{ scale: 1.1 }}
    >
      <NavLink to={route}>{text}</NavLink>
    </motion.div>
  );
};

export default NavItem;
