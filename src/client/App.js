import React from 'react'
import Nav from './Nav'
import Setup from './Setup'
import Fee from './Fee'
import PeopleSetup from './PeopleSetup'
import './css/setup.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentView: {
                'PeopleSetup': true,
                'Fee': false,
                'Setup': false
            },
            "test": false
        }
        console.log('store:', this.props)
        this.changeView = this.changeView.bind(this)
    }

    changeView = (val) => {

    }

    render() {
        return (
            <>
                {this.state.currentView.Setup ? (
                    <>
                        <Setup props={this.props} />
                        <Nav changeView={this.changeView} />
                    </>
                ) : null}
                {this.state.currentView.Fee ? (
                    <>
                        <Fee props={this.props} />
                        <Nav changeView={this.changeView} />
                    </>
                ) : null}
                {this.state.currentView.PeopleSetup ? (
                    <>
                        <PeopleSetup props={this.props} />
                        <Nav changeView={this.changeView} />
                    </>
                ) : null}

            </>
        )
    }
}

export default App