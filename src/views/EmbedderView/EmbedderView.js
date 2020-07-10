import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Typography, AppBar, Paper, TextField,
} from '@material-ui/core';
import URI from 'URIjs';
import * as smurl from './url';
import isClient, { uppercaseFirst } from '../../utils';
import SettingsUtility from '../../utils/settings';
import { getEmbedURL, getLanguage } from './utils';
import EmbedController from './EmbedController';
import IFramePreview from './IFramePreview';

export const config = {
  DOMAIN: null,
  LANGUAGE: {
    palvelukartta: 'fi',
    servicekarta: 'sv',
    servicemap: 'en',
  },
  LANGUAGES: {
    en: 'english',
    sv: 'svenska',
    fi: 'suomi',
  },
  BACKGROUND_MAPS: SettingsUtility.mapSettings,
  CITIES: SettingsUtility.citySettings,
  DEFAULT_IFRAME_PROPERTIES: {
    style: {
      width: '100%',
      height: '100%',
    },
    frameBorder: 0,
  },
  DEFAULT_CUSTOM_WIDTH: '400',
  BASE_URL: '/embedder',
};

const languageControls = generateLabel => Object.keys(config.LANGUAGES).map(lang => ({
  value: lang,
  label: `${uppercaseFirst(config.LANGUAGES[lang])}. ${generateLabel(lang)}`,
}));

const mapControls = generateLabel => config.BACKGROUND_MAPS.map(map => ({
  value: map,
  label: `${generateLabel(map)}`,
}));

const cityControls = config.CITIES.map(city => ({
  value: city || 'all',
  label: city ? uppercaseFirst(city) : 'Kaikki',
}));

const serviceControls = generateLabel => ['none', 'common', 'all'].map(service => ({
  value: service,
  label: generateLabel(service),
}));

const EmbedderView = ({ classes, intl }) => {
  // Verify url
  const data = isClient() ? smurl.verify(window.location.href) : {};
  let { url, ratio } = data;
  if (url) {
    url = smurl.strip(url, {});
  }
  let search = {};
  if (url) {
    const uri = URI(url);
    search = uri.search(true);
  }

  console.log(url);

  // Defaults
  const initialRatio = ratio || 52;
  const defaultMap = search.map || config.BACKGROUND_MAPS[0];
  const defaultLanguage = getLanguage(url);
  const defaultCity = search.city || 'all';
  const defaultFixedHeight = config.DEFAULT_CUSTOM_WIDTH;
  const iframeConfig = config.DEFAULT_IFRAME_PROPERTIES || {};
  const defaultService = 'none';

  // States
  const [language, setLanguage] = useState(defaultLanguage);
  const [map, setMap] = useState(defaultMap);
  const [city, setCity] = useState(defaultCity);
  const [service, setService] = useState(defaultService);
  const [customWidth, setCustomWidth] = useState(config.DEFAULT_CUSTOM_WIDTH || 100);
  const [widthMode, setWidthMode] = useState('auto');
  const [fixedHeight, setFixedHeight] = useState(defaultFixedHeight);
  const [ratioHeight, setRatioHeight] = useState(initialRatio);
  const [heightMode, setHeightMode] = useState('ratio');

  const renderWrapperStyle = () => `position: relative; width:100%; padding-bottom:${ratioHeight}%;`;
  const embedUrl = getEmbedURL(url, { language, map, city });

  // Figure out embed html
  const embedHTML = (url) => {
    if (!url) {
      return '';
    }
    let height;
    let html;
    if (heightMode === 'fixed') { height = fixedHeight; }
    if (heightMode === 'ratio') {
      if (widthMode === 'auto') {
        html = `<div style="${renderWrapperStyle()}">
          <iframe style="position: absolute; top: 0; left: 0; border: none; width: 100%; height: 100%;"
          src="${embedUrl}"></iframe></div>`;
      } else {
        height = parseInt(parseInt(customWidth, 10) * (parseInt(ratioHeight, 10) / 100.0), 10);
      }
    }

    if (height) {
      const width = widthMode !== 'custom' ? (
        iframeConfig.style && iframeConfig.style.width && iframeConfig.style.width
      ) : customWidth;
      const widthUnit = width !== '100%' ? 'px' : '';
      html = `<iframe style="border: none; width: ${width}${widthUnit}; height: ${height}px;"
                  src="${embedUrl}"></iframe>`;
    }
    return html;
  };

  /**
   * Renders embed HTMl based on options
   */
  const renderEmbedHTML = () => {
    const htmlText = embedHTML(data.url);
    return (
      <Paper className={classes.formContainerPaper}>
        <Typography align="left" variant="h5"><FormattedMessage id="embedder.code.title" /></Typography>
        <pre className={classes.pre}>
          { htmlText }
        </pre>
      </Paper>
    );
  };

  /**
   * Render address for embed url
   */
  const renderEmbedURL = () => (
    <Paper className={classes.formContainerPaper}>
      <Typography
        align="left"
        className={classes.marginBottom}
        variant="h5"
      >
        <FormattedMessage id="embedder.url.title" />
      </Typography>
      <TextField
        id="embed-address"
        className={classes.textField}
        value={embedUrl}
        margin="normal"
        variant="outlined"
      />
    </Paper>
  );

  /**
   * Render language controls
   */
  const renderLanguageControl = () => {
    console.log('language', language);
    const description = locale => intl.formatMessage({ id: `embedder.language.description.${locale}` });

    return (
      <EmbedController
        titleID="embedder.language.title"
        // description={description}
        radioValue={language}
        radioControls={languageControls(description)}
        radioOnChange={(e, v) => setLanguage(v)}
      />
    );
  };

  /**
   * Render map controls
   */
  const renderMapTypeControl = () => {
    console.log('map', map);
    const getLabel = map => intl.formatMessage({ id: `settings.map.${map}` });
    return (
      <EmbedController
        titleID="embedder.map.title"
        description={null}
        radioValue={map}
        radioControls={mapControls(getLabel)}
        radioOnChange={(e, v) => setMap(v)}
      />
    );
  };

  /**
   * Render city controls
   */
  const renderCityControl = () => {
    console.log('city', city);
    return (
      <EmbedController
        titleID="embedder.city.title"
        description={null}
        radioValue={city}
        radioControls={cityControls}
        radioOnChange={(e, v) => setCity(v)}
      />
    );
  };

  /**
   * Render service control
   */
  const renderServiceControl = () => {
    console.log('service', service);
    const getLabel = service => intl.formatMessage({ id: `embedder.service.${service}` });

    return (
      <EmbedController
        titleID="embedder.service.title"
        // description={description}
        radioValue={service}
        radioControls={serviceControls(getLabel)}
        radioOnChange={(e, v) => setService(v)}
      />
    );
  };

  /**
   * Render width controls
   */
  const renderWidthControl = () => {
    const controls = [
      {
        value: 'auto',
        label: intl.formatMessage({ id: 'embedder.width.auto.label' }),
      },
      {
        value: 'custom',
        label: intl.formatMessage({ id: 'embedder.width.custom.label' }),
      },
    ];
    const inputValue = widthMode === 'custom' ? customWidth : null;
    const inputOnChange = widthMode === 'custom' ? (e, v) => setCustomWidth(v) : null;
    return (
      <EmbedController
        titleID="embedder.width.title"
        description={null}
        radioValue={null}
        radioControls={controls}
        radioOnChange={(e, v) => setWidthMode(v)}
        inputValue={inputValue}
        // inputButtonOnClick={inputOnChange}
        inputOnChange={inputOnChange}
      />
    );
  };

  /**
   * Render height controls
   */
  const renderHeightControl = () => {
    const controls = [
      {
        value: 'ratio',
        label: intl.formatMessage({ id: 'embedder.height.ratio.label' }),
      },
      {
        value: 'fixed',
        label: intl.formatMessage({ id: 'embedder.height.fixed.label' }),
      },
    ];
    const customHeight = heightMode === 'fixed' ? fixedHeight : ratioHeight;
    const pretext = heightMode === 'fixed' ? 'px' : '%';

    return (
      <EmbedController
        titleID="embedder.height.title"
        description={null}
        radioValue={null}
        radioControls={controls}
        radioOnChange={(e, v) => setHeightMode(v)}
        inputValue={customHeight}
        // inputButtonOnClick={(e, v) => {
        //   if (heightMode === 'fixed') {
        //     setFixedHeight(v);
        //   } else {
        //     setRatioHeight(v);
        //   }
        // }}
        inputOnChange={(e, v) => {
          if (heightMode === 'fixed') {
            setFixedHeight(v);
          } else {
            setRatioHeight(v);
          }
        }}
        inputPreText={pretext}
      />
    );
  };

  return (
    <div>
      <AppBar className={classes.appBar} />

      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <Typography align="left" className={classes.title} variant="h2">
            <FormattedMessage id="embedder.title" />
          </Typography>
          <Typography align="left" variant="body2">
            <FormattedMessage id="embedder.title.info" />
          </Typography>
        </div>
        <div className={classes.formContainer}>
          <form>
            {
              renderEmbedURL()
            }
            {
              renderLanguageControl()
            }
            {
              renderServiceControl()
            }
            {
              renderMapTypeControl()
            }
            {
              renderCityControl()
            }
            {
              renderWidthControl()
            }
            {
              renderHeightControl()
            }
            <IFramePreview
              classes={classes}
              customWidth={customWidth}
              embedUrl={embedUrl}
              fixedHeight={fixedHeight}
              heightMode={heightMode}
              ratioHeight={ratioHeight}
              widthMode={widthMode}
            />
          </form>
          {
            renderEmbedHTML()
          }
        </div>

      </div>
    </div>
  );
};


export default EmbedderView;
