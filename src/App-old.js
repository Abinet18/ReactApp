import React from 'react';
import './App.css';
const KanbanColumn = require('./kanban/KanbanColumn');


class App extends React.Component {

  state = {
    columns: [1, 2, 3, 4],
    cards: [
      {
        content: "First card",
        column: 1,
      },
      {
        content: "second card",
        column: 1,
      },
      {
        content: "Third card",
        column: 2,
      },
      {
        content: "Fourht card",
        column: 2,
      },
      {
        content: "Fifth card",
        column: 3,
        order: 1
      },
      {
        content: "sixth card",
        column: 3,
      },
      {
        content: "seventh card",
        column: 4,
      },
      {
        content: "eight card",
        column: 4,
      }

    ]
  };
  render() {
    return (
      <div className="flexLayout">
        {this.state.columns.map(column =>
           (<KanbanColumn column={column} cards={this.state.cards}
            onAdd={this._onAdd}
            onMove={this._onMove}/>))}
      </div>
    );
  }

  _onAdd = (column, content) => {
    this.setState({ cards: [...this.state.cards, { content: content, column: column }] });
  }

  _onMove = (card,move)=> {
    const updatedCard= {...card,column:card.column+move};
    this.setState({cards:[...this.state.cards.filter(c=>c!==card),updatedCard]});
  }
}

export default App;
