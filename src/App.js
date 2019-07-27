import './App.css';
import React from 'react';
import Kanban from './kanban/Kanban';


class App extends React.Component {
    state = {
        columns: [1, 2, 3, 4],
        cards: [{
            column: 1,
            content: "Card 1"
        },
        {
            column: 1,
            content: "Card 10"
        },
        {
            column: 2,
            content: "Card 2"
        }, {
            column: 3,
            content: "Card 3"
        },
        {
            column: 4,
            content: "Card 4"
        }]
    };
    render() {
        return <Kanban cards={this.state.cards} 
        columns={this.state.columns} onAddCard={this._onAddCard}
        onUpdateCard={this._onUpdateCard} />
    }

    _onAddCard=(card)=> {
        this.setState(state=> {
            return {
                ...state,
                cards:[...state.cards,card]
            };
        });
    }

    _onUpdateCard = (card,updatedCard)=> {
        this.setState(state=> {
            return {
                ...state,
                cards:state.cards.filter(c=>c!==card).concat(updatedCard)
            };
        });
    }
}

export default App;