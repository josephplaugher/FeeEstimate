import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PersonActions from './../r_actions/PersonActions'
import * as TaskActions from './../r_actions/TaskActions'
import App from './App'

function mapStateToProps(state) {
    return {
        peope: state.people,
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PersonActions, TaskActions, dispatch)
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App)

export default Main