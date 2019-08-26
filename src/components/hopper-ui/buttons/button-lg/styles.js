export const styles = () => {
  return{
    rootPrimary:{
      // width: '267.27px',
      background: 'transparent',
      color: 'rgba(54, 178, 145, 1)',
      height: '40px',
      boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.16)',
      border: '2px solid rgba(54, 178, 145, 1)',
      fontSize: '13px',
      fontFamily: 'Roboto-Bold',
      borderRadius: '12px',
      '&:hover':{
        background: 'rgba(244, 244, 244, 1)'
      },
      '&:disabled':{
        background: 'rgba(44, 58, 69, 1)',
        color: 'rgba(255, 255, 255, 1)',
      }
    },
    rootSecondary:{
      // width: '267.27px',
      background: 'rgba(54, 178, 145, 1)',
      color: 'rgba(255, 255, 255, 1)',
      height: '40px',
      boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.16)',
      fontSize: '13px',
      fontFamily: 'Roboto-Bold',
      borderRadius: '12px',
      '&:hover':{
        background: 'rgba(54, 173, 178, 1)'
      },
      '&:disabled':{
        background: 'rgba(44, 58, 69, 1)',
        color: 'rgba(255, 255, 255, 1)',
      }
    }
  };
};