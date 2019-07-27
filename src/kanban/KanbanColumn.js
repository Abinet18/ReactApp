const React = require('react');
const KanbanCard = require('./KanbanCard');
class KanbanColumn extends React.Component {
    render() {
        const { column, cards } = this.props;
        return (
            <div className="column">
                <div className={"header" + column}>
                    Column {column}
                </div>
                {cards.filter(card => card.column === column).map(card =>
                    (
                    <KanbanCard card={card} onUpdateCard={this.props.onUpdateCard}/>
                    ))}
                <div><button className="card addbtn" onClick={this._onAdd}>+Add Card</button></div>
            </div>
        )

    }

    _onAdd = ()=> {
        const content=prompt("Title of task to do","Test");
        this.props.onAddCard({column:this.props.column,content});
    }

}

module.exports = KanbanColumn;