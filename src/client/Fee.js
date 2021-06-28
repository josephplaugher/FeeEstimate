import React, { useState, useEffect } from 'react'
import InitialTasks from './Tasks/InitialTasks'
import InitialPeople from './People/InitialPeople'
import Tasks from './Tasks/Tasks'
import './css/main.css'

function Fee() {
	return (
		<div id="container">
			<p id="fee">Fee Estimate</p>
			<p id="bill-rate-header">Bill Rate</p>
			<p id="hours-header">Hours</p>
			<p id="bill-amount-header">Bill Amount</p>
			<div id="tasks" key={`${InitialTasks.number} - parent div`}>
				{InitialTasks.map(t =>
					<Tasks task={t} people={InitialPeople} key={`Task-${t.name}`}></Tasks>
				)}
			</div>
		</div>
	)
}

export default Fee