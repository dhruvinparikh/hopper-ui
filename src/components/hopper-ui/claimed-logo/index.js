import React,{Component} from 'react';
import ClaimedImage from '../../../images/undraw_finish_line_katerina_limpitsouni_xy20@2x.png';

export default class ClaimedLogo extends Component{
  render(){
    const {...otherProps} = this.props;
    return(
      <div {...otherProps} >
        <img src={ClaimedImage} style={{height:'184px',width:'276px'}} alt="claimed"/>
      </div>
    );
  }
}