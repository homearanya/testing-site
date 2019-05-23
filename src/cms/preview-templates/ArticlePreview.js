import React from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';

import articleUpdateTime from '../../utils/articleUpdateTime';

import { BlogPostTemplate } from '../../templates/blog-post';

// Styles
import '../../styles/index.scss';
import './previewStyles.css';

const ArticlePreview = props => {
  const { entry, widgetFor } = props;
  const data = entry.getIn(['data']).toJS();
  if (data) {
    const formattedDate = dateformat(data.date, 'MMMM DD, YYYY');
    const lastUpdate = articleUpdateTime(formattedDate);
    return <BlogPostTemplate content={widgetFor('body')} tags={data.tags} title={data.title} lastUpdate={lastUpdate} />;
  } else {
    return <div>Loading...</div>;
  }
};
ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ArticlePreview;
