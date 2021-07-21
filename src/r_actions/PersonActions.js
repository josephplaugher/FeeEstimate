//update rates
function updateRate(person) {
    return {
        type: 'UPDATE_RATE',
        person
    }
}

//add people
function addPerson(name, rawRate, billRate, title) {
    return {
        type: 'ADD_PERSON',
        name,
        rawRate,
        billRate,
        title
    }
}

//remove person
function removePerson(name) {
    return {
        type: 'REMOVE_PERSON',
        name
    }
}

export { updateRate, addPerson, removePerson }