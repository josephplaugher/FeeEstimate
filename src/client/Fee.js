import React, { useState, useEffect } from 'react'
import Tasks from './Tasks/Tasks'
import './css/main.css'

const Fee = (props) => {

	return (
		<div id="container">
			<p id="fee">Fee Estimate</p>
			<p id="bill-rate-header">Bill Rate</p>
			<p id="hours-header">Hours</p>
			<p id="bill-amount-header">Bill Amount</p>
			<div id="tasks" key={`${props.tasks.number} - parent div`}>
				{props.tasks.map(t =>
					<Tasks task={t} people={props.people} key={`Task-${t.name}`}></Tasks>
				)}
			</div>
		</div>
	)
}

export default Fee