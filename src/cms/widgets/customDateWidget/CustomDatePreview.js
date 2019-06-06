import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from 'netlify-cms-ui-default';

const customStyle = {
  opacity: '0',
  position: 'absolute',
  left: '0',
  top: '0',
  zIndex: '-999',
};

const CustomDatePreview = ({ value }) => (
  <div style={customStyle}>
    <WidgetPreviewContainer>{value ? value.toString() : null}</WidgetPreviewContainer>
  </div>
);

CustomDatePreview.propTypes = {
  value: PropTypes.object,
};

export default CustomDatePreview;
