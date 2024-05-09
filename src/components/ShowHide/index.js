import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showState1: false, showState2: true}

  showFirstname = () => {
    this.setState(preState => ({showState1: !preState.showState1}))
  }
  showLastname = () => {
    this.setState(preState => ({showState2: !preState.showState2}))
  }

  render() {
    const {showState1, showState2} = this.state

    const showName1 = showState1 ? 'joe-box' : ''
    const showName2 = showState2 ? '' : 'jonas-box'

    //const showNamePara1 = showState1 ? null : 'heading-joe'
    //const showNamePara2 = showState2 ? 'heading-joe' : null

    return (
      <div className="bg-container">
        <h1 className="heading-style">Show/Hide</h1>
        <div>
          <button className="button-style" onClick={this.showFirstname}>
            Show/Hide Firstname
          </button>
          <button className="button-style" onClick={this.showLastname}>
            Show/Hide Lastname
          </button>
        </div>

        {showName1 ? <p className={`${showName1}`}>Joe</p> : ''}

        {showName2 ? <p className={`${showName2}`}>Jonas</p> : ''}
      </div>
    )
  }
}
export default ShowHide
