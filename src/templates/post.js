import React from 'react'

import './post.css';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="container">
      <div className="post">
        <div className="post__date">
          {post.frontmatter.date}
        </div>
        <h1 className="post__title">{post.frontmatter.title}</h1>
        <div className="post__author">
          Oleh: {post.frontmatter.author}
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
