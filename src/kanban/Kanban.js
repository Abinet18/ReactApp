const React = require('react');
const KanbanColumn = require('./KanbanColumn');
class Kanban extends React.Component {
    render() {
        const { columns, cards } = this.props;
        return (
            <div className="container">
                {columns.map(column => (
                    <KanbanColumn column={column} 
                    cards={cards} onAddCard={this.props.onAddCard}
                    onUpdateCard={this.props.onUpdateCard} />
                ))}
            </div>)

    }
}

module.exports= Kanban;