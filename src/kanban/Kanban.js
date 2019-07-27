import React from 'react';
import  KanbanColumn from './KanbanColumn';
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

export default Kanban;