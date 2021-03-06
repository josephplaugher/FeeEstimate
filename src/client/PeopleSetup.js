import React, { useState, useEffect } from 'react'
import PersonSetup from './Setup/PersonSetup'
import InitialPeople from './People/InitialPeople'
import './Setup/main.css'
import './Setup/main.css'

class PeopleSetup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div id="ppl-setup-container">
				<p id="ppl-setup-name-header">Name</p>
				<p id="ppl-setup-raw-header">Raw Rate</p>
				<p id="ppl-setup-title-header">Billing Title</p>
				<p id="ppl-setup-bill-header">Bill Rate</p>
				<p id="ppl-setup-mult-header">Multiplier</p>
				<div id="person-container">
					{this.props.people.map(p =>
						<PersonSetup person={p} key={`setup-${p.name}`} />
					)}
				</div>
			</div >
		)
	}
}

export default PeopleSetup