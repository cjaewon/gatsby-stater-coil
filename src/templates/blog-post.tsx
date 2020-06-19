import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

type BlogPostProps = {
  data: any;
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { markdownRemark: { frontmatter, html } } = data;

  return (
    <Layout>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </Layout>
  );
};

// export const pageQuery = graphql`

export default BlogPost;