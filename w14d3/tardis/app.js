
console.log("working")

class DivThree extends React.Component {
  state = {
    tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
    }
}

  changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: (this.state.tardis.name).toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: (this.state.tardis.name).toUpperCase(),
          caps: true
        }
      })
    }
  }
  render() {
    return (
      <div>
        <h3 onClick={this.changeIt}>{this.state.tardis.name}</h3>
                
      </div>
    )
  }
}

class DivTwo extends React.Component {
  
  render() {
    return (
      <div>
        <DivThree />
        <DivThree />
      </div>
    )
  }
}

class DivOne extends React.Component {
  
  render() {
    return (
      <div>
        <DivTwo />
      </div>
    )
  }
}

class App extends React.Component {
    

    render() {
        return (
          <div>
            <DivOne />
          </div>
        )
    }
}




ReactDOM.render(<App />, document.querySelector('#container'));
// ReactDOM.render(<App />, document.querySelector(".container"));