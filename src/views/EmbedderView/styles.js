export default theme => ({
  appBar: {
    // padding: theme.spacing.unitDouble,
    position: 'relative',
    padding: theme.spacing.unitDouble,
  },
  container: {
    margin: `${theme.spacing.unitTriple}px 10%`,
  },
  iframeContainer: {
    maxWidth: 500,
    width: '100%',
  },
  iframeWrapper: {
    border: '3px dashed #666',
  },
  formContainer: {
    margin: `${theme.spacing.unitDouble}px 0`,
  },
  marginBottom: {
    marginBottom: theme.spacing.unitDouble,
  },
  formContainerPaper: {
    margin: `${theme.spacing.unitTriple}px 0`,
    padding: `${theme.spacing.unitDouble}px ${theme.spacing.unitTriple}px`,
    textAlign: 'left',
    '& label': {
      margin: `${theme.spacing.unit}px 0`,
    },
    '& fieldset': {
      margin: '0 -12px',
    },
  },
  pre: {
    backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    borderRadius: 2,
    color: '#191919',
    display: 'block',
    fontSize: 14,
    lineHeight: 1.42857143,
    margin: '0 0 10.5px',
    padding: 10,
    textAlign: 'left',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
  },
  textField: {
    width: '100%',
  },
  title: {
    ...theme.typography.h4,
    marginBottom: theme.spacing.unitTriple,
  },
  titleContainer: {
    margin: `${theme.spacing.unitDouble}px 0`,
    padding: theme.spacing.unitTriple,
  },
});
