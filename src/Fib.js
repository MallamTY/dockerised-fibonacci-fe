import React, {Component} from "react";
import axios from 'axios';



class Fib extends Component {
    state = {
        index: '',
        seenIndexes: [],
        values: {}
    };
    
    componentDidMount() {
        //this.fetchValues();
        // this.fetchIndexes();
    };

    async fetchValues() {
        const values = await axios.get('/api/get-current');
        this.setState({
            values: values.data
        })
    }

    async fetchIndexes() {
        
        const seenIndexes = await axios.get('/api/get-all-values');
        this.setState({
            seenIndexes: seenIndexes.data
        })

        this.setState({index: ''});
        console.log('Get herer euirvjeriveoriehiorheirioe')
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        await axios.post('/api/post-value', {
            index: this.state.index
        });

        this.setState({index: ''})

    }

    renderSeenIndex() {
        return this.state.seenIndexes.map(({number}) => number).join(', ')

    }

    renderValues(){
        const entries = [];

        for (let key in this.state.values) {
            entries.push(
                <div key={key}>
                    For index {key} I calculated {this.state.values[key]}
                </div>
            )
            
        }
        return entries;
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter index</label>
                    <input
                        value={this.state.index}
                        onChange={event => this.setState({index: event.target.value})}
                    />
                    <button>
                        Submit
                    </button>
                </form>

                <h3>Indexes I have seen</h3>
                {this.renderSeenIndex()}

                <h3>Calculated Indexes</h3>
                {this.renderValues()}

            </div>
        )
    }
}

export default Fib;