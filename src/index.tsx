import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { reducers } from './reducers'
import { App } from './components'

    
const store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)

// const App = (props: AppProps):JSX.Element => {
//     return <div className='ui container'>{props.color}</div>
// }

// interface AppProps {
//     color?: string
// }

// class App extends React.Component<AppProps> {

//     //With react and typescript we do not define a countructor to define the state!!
//     state = { counter: 0 }
//     //

//     onIncrement = ():void => {
//          this.setState({counter: this.state.counter + 1})
//     }

//     onDecrement = ():void => {
//          this.setState({counter: this.state.counter - 1})
//      }

//     render(){
//         return (
//             <div className='ui container'>
//                  <button onClick={this.onIncrement} className='ui button primary'>Increment</button>
//                  <button onClick={this.onDecrement} className='ui button negative'>Decrement</button>
//                  <br />
//                  {this.state.counter}
//             </div>
//          )
//     }
// }