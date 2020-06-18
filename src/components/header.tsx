import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <HeaderBlock>
      📁 {siteTitle}
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  background-color: white;

  padding-right: 0.95rem;
  padding-left: 0.95rem;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;

  border-bottom: 0.25px solid #EBF8FF;
`;

export default Header;
