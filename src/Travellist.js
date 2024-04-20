import { Component} from 'react';
export class Travellist extends Component {
    state = {
        userInput: '',
        travelItem: []
    }
onChangeEvent (e) {
    this.setState ( {userInput:e})
}
addItem (input) {
    if (input === ''){
        alert("Please enter an item")
    }
    else {
    let listArray = this.state.travelItem;
    listArray.push(input);
    this.setState({travelItem: listArray,
        userInput: ''})
}}
completedItem (event) {
    const li = event.target;
    li.classList.toggle ('completed');
}
deleteItem () {
    let listArray = this.state.travelItem;
    listArray = [];
    this.setState ({travelItem: listArray})
}
onFormSubmit (e) {
    e.preventDefault ();
}
     render () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='list'>
                    <input type='text'
                    placeholder='Type your To Do List here'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value = {this.state.userInput}/>
                </div>
                    <button onClick={()=> this.addItem(this.state.userInput)}>Add</button>
             
                <ul>
                    {this.state.travelItem.map((item,index) => (
                        <li onClick={this.completedItem} key = {index}>✈️ {item}</li>

                    ))}
                </ul>
                <button onClick={() => this.deleteItem()}>Delete the list</button>
</form>

            </div>
        )
    }
}