import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './previewStyles.css';

import { CategoryTemplate } from '../../templates/categories-list';

const CategoryPreview = props => {
  const { entry } = props;
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <div style={{ padding: '150px 20px' }}>
        <CategoryTemplate item={data} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

CategoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CategoryPreview;
