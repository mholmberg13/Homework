

class Line extends React.Component {
    render() {
        return (
            <div className={this.props.divClass}>
                <p className="label">{this.props.label}</p>
                <p className="contents">{this.props.content}</p>
            </div>
        )
    }
}


class Receipt extends React.Component {

    render() {
        return (
            receipts.map((item,i) => {
                return !receipts[i].paid ? (
                    <div key={i}>

                        <h1>{receipts[i].person}</h1>
                        <Line 
                            divClass="main"
                            label="Main:"
                            content={receipts[i].order.main}
                        />
                        <Line 
                            divClass="protein"
                            label="Protein:"
                            content={receipts[i].order.protein}
                        />
                        <Line 
                            divClass="rice"
                            label="Rice:"
                            content={receipts[i].order.rice}
                        />
                        <Line 
                            divClass="sauce"
                            label="Sauce:"
                            content={receipts[i].order.sauce}
                        />
                        <Line 
                            divClass="drink"
                            label="Drink:"
                            content={receipts[i].order.drink}
                        />
                        <Line 
                            divClass="cost"
                            label="Cost: $"
                            content={receipts[i].order.cost}
                        />
                        <h2>NOT PAID</h2>
                    </div>
                ) : null
            })
        )   
    } 
}



class App extends React.Component {
    render() {
        return (
            <Receipt />    
        )

    }
}



ReactDOM.render(<App />, document.querySelector('.main'));