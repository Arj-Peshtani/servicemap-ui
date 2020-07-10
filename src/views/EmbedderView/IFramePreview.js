import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { config } from './EmbedderView';
import { Typography, Paper } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const IFramePreview = ({
  classes,
  customWidth,
  embedUrl,
  fixedHeight,
  heightMode,
  ratioHeight,
  widthMode,
}) => {
  if (!embedUrl) {
    return null;
  }
  console.log(embedUrl);
  console.log(fixedHeight);
  const wrapperStyleObject = () => ({
    position: 'relative',
    width: '100%',
    paddingBottom: `${ratioHeight}%`,
  });
  const iframeConfig = config.DEFAULT_IFRAME_PROPERTIES || {};
  const hasContainer = heightMode === 'ratio' && widthMode === 'auto';

  let height = '100%';
  let width = '100%';
  let widthUnit = 'px';
  if (heightMode === 'fixed') { height = fixedHeight; }
  if (heightMode === 'ratio') {
    if (widthMode !== 'auto') {
      height = parseInt(parseInt(customWidth, 10) * (parseInt(ratioHeight, 10) / 100.0), 10);
    }
  }

  if (!hasContainer && height) {
    width = widthMode !== 'custom' ? (
      iframeConfig.style && iframeConfig.style.width && iframeConfig.style.width
    ) : customWidth;
    widthUnit = width !== '100%' ? 'px' : '';
  }

  console.log(width, height);

  const styles = {
    position: hasContainer ? 'absolute' : null,
    top: hasContainer ? 0 : null,
    left: hasContainer ? 0 : null,
    border: 'none',
    width: hasContainer ? '100%' : `${width}${widthUnit}`,
    height: hasContainer ? '100%' : `${height}px`,
  };
  const element = hasContainer ? (
    <div style={wrapperStyleObject()}>
      <iframe
        title="Upotus"
        style={styles}
        src={embedUrl}
      />
    </div>
  ) : (
    <iframe
      title="Upotus"
      style={styles}
      src={embedUrl}
    />
  );
  console.log(element, styles);

  return (
    <Paper className={classes.formContainerPaper}>
      <Typography
        align="left"
        className={classes.marginBottom}
        variant="h5"
      >
        <FormattedMessage id="embedder.preview.title" />
      </Typography>
      <div className={classes.iframeContainer} style={{ width: '100%' }}>
        <div className={classes.iframeWrapper}>
          {
            element
          }
        </div>
      </div>
    </Paper>
  );
};

export default IFramePreview;
