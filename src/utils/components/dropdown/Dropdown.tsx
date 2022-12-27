import React, { useState, useCallback } from 'react';

import IconButton from '../icon-button/IconButton';
import {
  DropdownContainer,
  DropdownTitleContainer,
  DropdownTitleLabel,
  DropdownContentContainer
} from './styles/Dropdown.styled';

interface DropdownProps {
  title: string;
  DropdownContent: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const {
    title,
    DropdownContent
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenDropdownClick = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  return (
    <DropdownContainer>
      <DropdownTitleContainer>
        <DropdownTitleLabel>{title}</DropdownTitleLabel>
        <IconButton
          iconName={isOpen ? 'chevron-up-icon' : 'chevron-down-icon'}
          fill={'white'}
          width={10}
          onClick={onOpenDropdownClick}
        />
      </DropdownTitleContainer>
      {isOpen && (
        <DropdownContentContainer>
          {DropdownContent}
        </DropdownContentContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
