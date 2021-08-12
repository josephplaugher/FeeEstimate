import React, { useState, useEffect } from 'react'
import PersonSetup from './Setup/PersonSetup'
import './Setup/main.css'

const PeopleSetup = (props) => {

	return (
		<div id="ppl-setup-container">
			<p id="ppl-setup-name-header">Name</p>
			<p id="ppl-setup-raw-header">Raw Rate</p>
			<p id="ppl-setup-title-header">Billing Title</p>
			<p id="ppl-setup-bill-header">Bill Rate</p>
			<p id="ppl-setup-mult-header">Multiplier</p>
			<div id="person-container">
				{props.people.map(p =>
					<PersonSetup person={p} updatePeople={() => props.updatePeople} key={`setup-${p.name}`} ></PersonSetup>
				)}
			</div>
		</div >
	)
}

export default PeopleSetup