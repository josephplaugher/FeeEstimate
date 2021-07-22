import React from 'react'
import './css/setup.css'

class Setup extends React.Component {
	constructor(props) {
		super(props)
		state = {
			pa: '',
			pm: '',
			client: '',
			clientNo: '',
			bgm: ''
		}
	}

	render() {

		return (
			<div id="setup-container">
				<p id="start-up-header">Project Startup-Up Required Information</p><br />
				<p className="label">Project Accountant</p><input className="pcrf-input" type="text" name="pa" value={state.pa} onChange={(e) => changeState(e.target)} />
				<p className="label">Project Manager</p><input className="pcrf-input" type="text" name="pm" value={state.pm} onChange={(e) => changeState(e.target)} />
				<p className="label">Client Name</p><input className="pcrf-input" type="text" name="client" value={state.client} onChange={(e) => changeState(e.target)} />
				<p className="label">Client Number</p><input className="pcrf-input" type="text" name="clientNo" value={state.clientNo} onChange={(e) => changeState(e.target)} />
				<p className="label">Business Group Manager</p><input className="pcrf-input" type="text" name="bgm" value={state.bgm} onChange={(e) => changeState(e.target)} />
			</div>
		)
	}
}

export default Setup