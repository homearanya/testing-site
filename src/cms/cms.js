import CMS from 'netlify-cms';

import CategoryPreview from './preview-templates/CategoryPreview';
import ArticlePreview from './preview-templates/ArticlePreview';

import CustomRelationControl from './widgets/customRelationWidget/CustomRelationControl';
import CustomRelationPreview from './widgets/customRelationWidget/CustomRelationPreview';

CMS.registerPreviewTemplate('categories', CategoryPreview);
CMS.registerPreviewTemplate('articles', ArticlePreview);

CMS.registerWidget('customRelation', CustomRelationControl, CustomRelationPreview);
