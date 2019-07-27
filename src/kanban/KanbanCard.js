const React = require('react');

class KanbanCard extends React.Component {
    render() {
        const { card } = this.props;
        return (
            <div className="card">
                {
                    card.column > 1 && (<div className="icon">
                        <button className="btn" onClick={this._onMoveLeft}>
                            <i class="fas fa-chevron-left"></i></button>
                    </div>)
                }

                <div className="content">{card.content}</div>
                {card.column < 4 && (<div className="icon">
                    <button className="btn" onClick={this._onMoveRight}>
                        <i class="fas fa-chevron-right"></i></button></div>)}

            </div>
        );
    }

    _onMoveRight = () => {
        const card = this.props.card;
        this.props.onUpdateCard(card, { content:card.content, column: card.column + 1 });
    }
    _onMoveLeft = () => {
        const card = this.props.card;
        this.props.onUpdateCard(card, { content:card.content, column: card.column - 1 });
    }
}

export default KanbanCard;

