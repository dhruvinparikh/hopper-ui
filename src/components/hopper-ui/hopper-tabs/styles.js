export const styles = () => ({
  tabsRoot: {
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  tabsIndicator: {
    height: 4,
    backgroundColor: 'rgba(54, 178, 145, 1)'
  },
  tabRoot: {
    color: 'rgba(44, 58, 69, 1)',
    height: '48px',
    textTransform: 'capitalize',
    fontSize: '17px',
    fontFamily: 'Roboto-Regular',
    '&$tabSelected': {
      color: 'rgba(44, 58, 69, 1)',
      fontFamily: 'Roboto-Bold',
    },
    '&:focus': {
      color: 'rgba(44, 58, 69, 1)'
    }
  },
  tabSelected: {}
});
