var React = require('react');

// Now let's learn to pass values from a parent component to a child component.

// A child component can have values handed to it either through attributes,
// or through nested content

// <ChildComponent some-attribute="this gets passed">So does this</ChildComponent>

var TodoBox = React.createClass({
  render: function() {
    return (
      <div className ="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm/>
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  render: function() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}>
          {this.props.title}
        </td>
        <td style={{border: "1px solid black"}}>
          {this.props.children}
        </td>
      </tr>
    );
  }
});

var TodoForm = React.createClass({
  render: function() {
    return (
      <div className = "todoForm">
        I am a TodoForm.
      </div>
    );
  }
});

/*

<div class="todoList">
  <table style="border:2px solid black;">
    <tbody>
      <tr>
        <td style="border:1px solid black;">Shopping</td>
        <td style="border:1px solid black;">Milk</td>
      </tr>
      <tr>
        <td style="border:1px solid black;">Hair cut</td>
        <td style="border:1px solid black;">13:00</td>
      </tr>
    </tbody>
  </table>
</div>

*/

module.exports = TodoBox;
