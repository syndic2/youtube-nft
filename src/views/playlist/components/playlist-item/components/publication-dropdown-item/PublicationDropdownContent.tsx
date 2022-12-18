import React, { useState } from 'react';

import SvgIcon, { SvgIconProps } from '../../../../../../utils/components/svg-icon/SvgIcon';
import {
  PublicationDropdownContentContainer,
  PublicationDropdownItemContainer,
  PublicationDropdownItemNameContainer,
  PublicationDropdownItemNameLabel,
  PublicationDropdownItemInfoLabel
} from './PublicationDropdownContent.styles';

interface PublicationDropdownItemProps {
  label: string;
  description: string;
  icon: SvgIconProps;
  value: any;
}

const PublicationDropdownContent: React.FC = () => {
  const [publicationDropdownItems] = useState<PublicationDropdownItemProps[]>([
    {
      label: 'Public',
      description: 'Viewing, searching, and sharing are allowed by anyone',
      icon: {
        name: 'user-shield-icon',
        width: 24
      },
      value: 'PUBLIC'
    },
    {
      label: 'Private',
      description: 'Only you can view',
      icon: {
        name: 'globe-icon',
        width: 22
      },
      value: 'PUBLIC'
    },
    {
      label: 'Hidden',
      description: 'It is hidden except for those who have the link',
      icon: {
        name: 'link-icon',
        width: 22
      },
      value: 'PUBLIC'
    }
  ]);

  return (
    <PublicationDropdownContentContainer>
      {publicationDropdownItems.map((dropdownItem, index) => (
        <PublicationDropdownItemContainer key={index}>
          {/* Icon */}
          <SvgIcon
            name={dropdownItem.icon.name}
            fill={'#070707'}
            width={dropdownItem.icon.width}
          />

          {/* Name & Info */}
          <PublicationDropdownItemNameContainer>
            <PublicationDropdownItemNameLabel>
              {dropdownItem.label}
            </PublicationDropdownItemNameLabel>
            <PublicationDropdownItemInfoLabel>
              {dropdownItem.description}
            </PublicationDropdownItemInfoLabel>
          </PublicationDropdownItemNameContainer>
        </PublicationDropdownItemContainer>))}
    </PublicationDropdownContentContainer>
  );
};

export default PublicationDropdownContent;
