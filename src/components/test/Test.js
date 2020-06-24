import React, {Component} from 'react';

class Test extends Component {
    state = {
        test: "test"
    };

    componentDidMount() {
        console.log('component did mount')
    }

    // UNSAFE_componentWillMount() {
    //     console.log("will mount ")
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("update")//on cstate changes
    // }
    //
    // UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log("ill update")//on state changes
    // }
    //
    // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    //     console.log("will receive props ...")
    // }
    //
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(" before update")
    // }

    render() {
        return (
            <div>
                <h1>Test component</h1>
            </div>
        );
    }
}

export default Test;