const React = require('react');

class KabanColumn extends React.Component {

    render() {
        const {column,cards}=this.props;
        return (
            <div className={column>1 ?"leftMargin":"vertical"}>
            <div className={"header"+column}>Column  {column}</div>
            {cards.filter(card => card.column === column).map(card =>
            (<div className="card">
            <span><button className="left" onClick={()=>this._onMoveLeft(card)}/></span>
            <span>{card.content}</span>
            <span><button className="right" onClick={()=>this._onMoveRight(card)}/></span>
            </div>)
                 )}
            <div><button onClick={this._onAdd}> + Add a card</button></div>
            </div>
        );
    }

  _onAdd = ()=> {
    const content = prompt("Add card content", "");
    this.props.onAdd(this.props.column,content);
  }
  _onMoveLeft=(card)=> {
      this.props.onMove(card,-1);
  }
  _onMoveRight = (card)=> {
      this.props.onMove(card,1);
  }
  
}
module.exports= KabanColumn;

