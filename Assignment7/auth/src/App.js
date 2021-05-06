import Main from './Components/Main';
import {bindActionCreators} from 'redux';
import * as actions from './redux/action'
import {withRouter} from 'react-router';
import {connect} from 'react-redux';



function mapStateToProp(state)
{
  return {users:state}
}

function mapDispatchToProp(dispatch)
{
  return bindActionCreators(actions,dispatch);
}

const App = withRouter( connect(mapStateToProp,mapDispatchToProp)(Main))


export default App;
