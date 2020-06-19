import React from 'react';
import { graphql } from 'gatsby';

type BlogPostProps = {
  data: any;
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { markdownRemark: { frontmatter, html } } = data;

  return (
    <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </div>
  );
};

// export const pageQuery = graphql`

export default BlogPost;