import React from 'react';
import styled from 'styled-components';
import Emoji from './common/Emoji';

type HeaderProps = {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <HeaderBlock>
      <Emoji emoji="📁" />
      {siteTitle}
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  background-color: white;

  padding-right: 0.95rem;
  padding-left: 0.95rem;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;

  img.emoji {
    margin-right: 0.25rem;
  }
`;

export default Header;
