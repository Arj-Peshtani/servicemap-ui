import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { injectIntl } from 'react-intl';
import { setDistrictAddressData } from '../../redux/actions/district';
import {
  setAddressData,
  setAddressUnits,
  setAddressLocation,
  setAdminDistricts,
  setToRender,
} from '../../redux/actions/address';
import { getLocaleString } from '../../redux/selectors/locale';
import styles from './styles';
import AddressView from './AddressView';
import { getAddressNavigatorParamsConnector } from '../../utils/address';
import { formatDistanceObject } from '../../utils';
import { calculateDistance } from '../../redux/selectors/unit';

const mapStateToProps = (state, props) => {
  const {
    intl,
  } = props;
  const map = state.mapRef.leafletElement;
  const getLocaleText = textObject => getLocaleString(state, textObject);
  const { address, user, navigator } = state;
  const getAddressNavigatorParams = getAddressNavigatorParamsConnector(getLocaleText, user.locale);
  const getDistance = unit => formatDistanceObject(intl, calculateDistance(state)(unit));
  const { units, adminDistricts } = address;
  return {
    addressData: address.addressData,
    adminDistricts,
    map,
    getAddressNavigatorParams,
    getDistance,
    getLocaleText,
    navigator,
    units,
  };
};


export default withRouter(withStyles(styles)(injectIntl(connect(
  mapStateToProps,
  {
    setAddressData,
    setAddressUnits,
    setAddressLocation,
    setAdminDistricts,
    setToRender,
    setDistrictAddressData,
  },
)(AddressView))));
