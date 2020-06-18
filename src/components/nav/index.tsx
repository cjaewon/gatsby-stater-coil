import React from 'react';
import styled from 'styled-components';
import Emoji from '../common/Emoji';

const Nav: React.FC<{}> = () => {
  return (
    <NavBlock>
      <ul>
        <li>
          <Emoji emoji="👋" />
          <span>메인</span>
        </li>
        <li>
          <Emoji emoji="⚛️" />
          <span>리액트</span>
        </li>
        <li>
          <Emoji emoji="📦" />
          <span>번들러</span>
        </li>
        <li>
          <Emoji emoji="🐿️" />
          <span>Golang</span>
        </li>
      </ul>
    </NavBlock>
  );
}

const NavBlock = styled.nav`
  width: 240px;
  position: relative;

  background-color: white;
  height: 100%;

  ul {
    margin-top: 0;
    margin-bottom: 0;

    list-style-type: none;
  }

  img.emoji {
    margin-right: 0.25rem;
  }
`;

export default Nav;