import config from '../../../config';

export default theme => ({
  container: {
    top: config.topBarHeight,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'auto',
  },
  containerMobile: {
    top: config.topBarHeightMobile,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'auto',
  },
  infoText: {
    paddingBottom: theme.spacing.unitHalf,
  },
  input: {
    flex: '1 1 auto',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  inputFocused: {
    paddingLeft: 0,
    paddingRight: theme.spacing.unit,
  },
  iconButton: {
    flex: '0 1 auto',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  iconButtonSearch: {
    flex: '0 0 auto',
    borderRadius: 0,
    padding: theme.spacing.unitHalf,
    textTransform: 'none',
    '& svg': {
      fontSize: 28,
    },
  },
  iconButtonSearchLabel: {
    flexDirection: 'column',
  },
  icon: {
    flex: '0 1 auto',
    padding: theme.spacing.unit,
  },
  sticky: {
    position: 'sticky',
    zIndex: 51,
  },
  headerText: {
    fontWeight: 'bold',
    marginBottom: theme.spacing.unitDouble,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  subtitleText: {
    lineHeight: '32px',
  },
  expandTitle: {
    alignSelf: 'center',
    marginRight: 'auto',
    paddingLeft: theme.spacing.unitDouble,
    '&:focus': {
      boxShadow: 'none',
    },
  },
  listIcon: {
    paddingRight: theme.spacing.unitDouble,
    paddingTop: 8,
    paddingBottom: 8,
    color: 'rgba(0,0,0,0.54)',
  },
  absolute: {
    position: 'absolute',
    zIndex: 99999999999,
  },
  closeButton: {
    margin: 0,
    width: 'fit-content',
    height: 42,
    marginTop: 12,
    marginBottom: theme.spacing.unitDouble,
  },
  expandSearchTop: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unitDouble,
    paddingRight: theme.spacing.unitDouble,
  },
  backIcon: {
    padding: theme.spacing.unit,
    color: '#757575',
    marginLeft: theme.spacing.unit,
  },
});
