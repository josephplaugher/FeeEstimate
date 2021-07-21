//update rates
function updateHours(person, task) {
    return {
        type: 'UPDATE_HOURS',
        person,
        task
    }
}

//add people
function updateTaskTotal(task, rawRate, billRate) {
    return {
        type: 'UPDATE_TASK_TOTAL',
        task,
        rawRate,
        billRate
    }
}

//remove person
function updateFeeTotal(task) {
    return {
        type: 'UPDATE_FEE_TOTAL',
        task
    }
}

export { updateHours, updateTaskTotal, updateFeeTotal }