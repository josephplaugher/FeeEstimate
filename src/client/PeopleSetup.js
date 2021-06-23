import React, { useState, useEffect } from 'react'
import PersonSetup from './Setup/PersonSetup'
import InitialPeople from './People/InitialPeople'
import InitialTasks from './Tasks/InitialTasks'
import './css/setup.css'

function PeopleSetup() {

	const [state, updateState] = useState({})

	const changeState = (e) => {
		const name = e.name
		const value = e.value
		const newState = { [name]: value }
		updateState(newState)
	}

	const setMult = (e) => {
		const name = e.name
		const value = e.value
		const newState = { [name]: value }
		updateState(newState)
	}

	return (
		<div id="ppl-setup-container">
			<p id="ppl-setup-name-header">Name</p>
			<p id="ppl-setup-raw-header">Raw Rate</p>
			<p id="ppl-setup-bill-header">Bill Rate</p>
			<p id="ppl-setup-title-header">Billing Title</p>
			<div id="tasks" key={`${InitialTasks.number} - parent div`}>
				{InitialPeople.map(p =>
					<PersonSetup person={p} changeState={changeState} key={`setup-${p.name}`} ></PersonSetup>
				)}
			</div>
		</div >
	)
}

export default PeopleSetup