import CMS from 'netlify-cms';

import CategoryPreview from './preview-templates/CategoryPreview';
import ArticlePreview from './preview-templates/ArticlePreview';

import CustomRelationControl from './widgets/customRelationWidget/CustomRelationControl';
import CustomRelationPreview from './widgets/customRelationWidget/CustomRelationPreview';
// import CustomDateControl from './widgets/customDateWidget/CustomDateControl';
// import CustomDatePreview from './widgets/customDateWidget/CustomDatePreview';
import PathControl from './widgets/pathWidget/PathControl';
import PathPreview from './widgets/pathWidget/PathPreview';
CMS.registerPreviewTemplate('categories', CategoryPreview);
CMS.registerPreviewTemplate('articles', ArticlePreview);

CMS.registerWidget('customRelation', CustomRelationControl, CustomRelationPreview);
// CMS.registerWidget('customDate', CustomDateControl, CustomDatePreview);
CMS.registerWidget('path', PathControl, PathControl);
