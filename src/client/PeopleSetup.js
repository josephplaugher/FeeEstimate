import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonSetup from './Setup/PersonSetup'
import './Setup/main.css'

const PeopleSetup = () => {

	const [people, updatePeople] = useState([])

	useEffect(() => {
		async function GetPeople() {
			try {
				const resp = await axios(`http://localhost:5000/getPeopleByProject/10000000`)
				updatePeople(resp.data)
			} catch (error) {
				console.error(error);
			}
		}
		GetPeople()
	}, [])

	const updatePerson = (event, id) => {
		async function update(person) {
			console.log('running update')
			try {
				const resp = await axios.post({
					url: `http://localhost:5000/updatePerson/project/10000000/person/${id}`,
					'Content-Type': 'application/json',
					method: 'post',
					responseType: 'json',
					body: person
				})
			} catch (error) {
				console.error(error);
			}
		}
		people.forEach((person => {
			if (person.id == id) {
				console.log('person: ', person)
				let key = event.target.name
				console.log('key', person[key], 'val ', event.target.value)
				if (person[key] == event.target.value) {
					console.log('values are not equal, updating!')
					update(person[key])
				} else {
					console.log('values didnt change, not updating')
				}
			}
		}))
	}

	return (
		<div id="ppl-setup-container">
			<p id="ppl-setup-name-header">Name</p>
			<p id="ppl-setup-raw-header">Raw Rate</p>
			<p id="ppl-setup-title-header">Billing Title</p>
			<p id="ppl-setup-bill-header">Bill Rate</p>
			<p id="ppl-setup-mult-header">Multiplier</p>
			<div id="person-container">
				{people.map(p =>
					<PersonSetup person={p} updatePerson={updatePerson} key={p.id} id={p.id} />
				)}
			</div>
		</div >
	)
}

export default PeopleSetup