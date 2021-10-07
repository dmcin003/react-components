// TODO
var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList list={['Bagels', 'Cheese', 'Eggs']}/> // Here we are creating an instance of the `GroceryList` component
  </div>
);


var GroceryList = (props) => {


  return (
    <ul>
      {props.list.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  );

};

class GroceryListItem extends React.Component{
  constructor(props){
    super(props);
    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }


  render(){
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'

    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}





ReactDOM.render(<App />, document.getElementById("app"));