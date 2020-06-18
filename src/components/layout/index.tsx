import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../header';
import styled from 'styled-components';

import './global.css';

type Layout = {
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutBlock>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="body">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">gatsby-stater-database</a>
        </footer>
      </div>
    </LayoutBlock>
  )
}

const LayoutBlock = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;900&display=swap');

  font-family: 'Noto Sans KR', sans-serif;

  .body {
    margin: 0 auto;
    max-width: 720px;
    padding: 0 1.0875rem 1.45rem;

  }
`;

export default Layout
