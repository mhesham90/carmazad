import { makeStyles } from '@material-ui/core/styles';

export const useGlobalStyles = makeStyles({
  '@global': {
    '.yellow-button': {
      '&.MuiButton-contained': {
        color: '#000',
        backgroundColor: '#fdb81e',
      },
    },
    '.danger-button': {
      '&.MuiButton-contained': {
        color: '#FFF',
        backgroundColor: '#E11523',
      },
      '&.MuiButton-outlined': {
        color: '#E11523',
        borderColor: '#E11523',
      },
    },
  },
});
