const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/Post.jsx");

  return graphql(`
    {
      allOrgContent(sort: { fields: [metadata___date], order: DESC }) {
        nodes {
          fields {
            slug
          }
          metadata {
            title
            date(formatString: "MMMM Do, YYYY")
            tags
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allOrgContent.nodes;
    const tags = {};

    createPage({
      path: "archive",
      component: path.resolve("src/templates/Archive.jsx"),
      context: { posts }
    });

    // create page for each mdx node
    posts.forEach((post, index) => {
      const { fields, metadata } = post;
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];

      createPage({
        path: fields.slug,
        component: blogPostTemplate,
        context: {
          slug: fields.slug,
          previous,
          next
        }
      });

      const postTags = metadata.tags.length > 0 ? metadata.tags : ["notags"];
      postTags.forEach(tag => {
        const context = {
          slug: fields.slug,
          title: metadata.title,
          date: metadata.date
        };
        if (tag in tags) {
          tags[tag].push(context);
        } else {
          tags[tag] = [context];
        }
      });
    });
    createPage({
      path: "tags",
      component: path.resolve("src/templates/Tags.jsx"),
      context: {
        tags
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "OrgContent") {
    createNodeField({
      name: `slug`,
      node,
      value: "/" + node.metadata.export_file_name
    });
  }
};
