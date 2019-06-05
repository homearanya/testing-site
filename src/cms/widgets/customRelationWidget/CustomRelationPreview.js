import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from 'netlify-cms-ui-default';

const CustomRelationPreview = ({ value }) => <WidgetPreviewContainer>{value}</WidgetPreviewContainer>;

CustomRelationPreview.propTypes = {
  value: PropTypes.node,
};

export default CustomRelationPreview;
