import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';
import articleUpdateTime from '../../utils/articleUpdateTime';
import Prism from 'prismjs';

import { BlogPostTemplate } from '../../templates/blog-post';

// Styles
import './previewStyles.css';

export default class ArticlePreview extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidUpdate() {
      if (this.myRef.current) {
        let elem = this.myRef.current;
        Prism.highlightAllUnder(elem);
      }
  }
  componentDidMount() {
    if (this.myRef.current) {
      let elem = this.myRef.current;
      Prism.highlightAllUnder(elem);
    }
  }
  render() {
    const { entry, widgetFor } = this.props;
    const data = entry.getIn(['data']).toJS();
    if (data) {
      const formattedDate = dateformat(data.date, 'mmm dd, yyyy');
      const lastUpdate = articleUpdateTime(formattedDate);
      return (
        <div ref={this.myRef}>
          <BlogPostTemplate content={widgetFor('body')} tags={data.tags} title={data.title} lastUpdate={lastUpdate} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};