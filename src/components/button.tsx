import React from 'react';
import PropTypes from 'prop-types';
import { Button as MaterialButton } from '@material-tailwind/react';
import { size } from '@material-tailwind/react/types/components/button';

interface ButtonProps {
  children: React.ReactNode;
  additionalClasses?: string;
  placeholder?: string;
  size?: size;
}

const Button = ({
  children,
  additionalClasses,
  placeholder,
  size,
}: ButtonProps) => {
  const defaultClasses =
    'bg-gradient-to-b from-asparagus-400 to-asparagus-700 border-transparent transition-all duration-150 font-lexend font-medium rounded-full';
  const allClasses = `${defaultClasses} ${additionalClasses}`;

  return (
    <MaterialButton
      className={allClasses}
      placeholder={placeholder}
      variant='filled'
      size={size}
      ripple
    >
      {children}
    </MaterialButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  additionalClasses: PropTypes.string,
};

Button.defaultProps = {
  additionalClasses: '',
};

export default Button;
