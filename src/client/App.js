import React, { useState, useEffect } from 'react'
import InitialTasks from './Tasks/InitialTasks';
import Tasks from './Tasks/Tasks'
// import './css/index.css'
import './css/main.css'

function App() {
	return (
		<div id="container">
			<p>Fee Estimate</p>
			<p id="headers">Bill Rate | Hours | Bill Amount</p>
			<div id="tasks" key={`${InitialTasks.number} - parent div`}>
				{InitialTasks.map(t =>
					<Tasks task={t} people={t.people}></Tasks>
				)}
			</div>
		</div>
	)
}

export default App