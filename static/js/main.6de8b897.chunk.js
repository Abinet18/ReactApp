(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(t,n,e){t.exports=e(22)},,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n),function(t){var n=e(0),a=e(1),c=e(3),r=e(2),o=e(4),s=e(5),i=e(20),l=function(t){function e(){return Object(n.a)(this,e),Object(c.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this,n=this.props,e=n.columns,a=n.cards;return s.createElement("div",{className:"container"},e.map(function(n){return s.createElement(i,{column:n,cards:a,onAddCard:t.props.onAddCard,onUpdateCard:t.props.onUpdateCard})}))}}]),e}(s.Component);t.exports=l}.call(this,e(6)(t))},function(t,n,e){"use strict";e.r(n),function(t){var n=e(0),a=e(1),c=e(3),r=e(2),o=e(4),s=e(5),i=e(21),l=function(t){function e(){var t,a;Object(n.a)(this,e);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(r.a)(e)).call.apply(t,[this].concat(s))))._onAdd=function(){var t=prompt("Title of task to do","Test");a.props.onAddCard({column:a.props.column,content:t})},a}return Object(o.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this,n=this.props,e=n.column,a=n.cards;return s.createElement("div",{className:"column"},s.createElement("div",{className:"header"+e},"Column ",e),a.filter(function(t){return t.column===e}).map(function(n){return s.createElement(i,{card:n,onUpdateCard:t.props.onUpdateCard})}),s.createElement("div",null,s.createElement("button",{className:"card addbtn",onClick:this._onAdd},"+Add Card")))}}]),e}(s.Component);t.exports=l}.call(this,e(6)(t))},function(t,n,e){"use strict";e.r(n),function(t){var n=e(0),a=e(1),c=e(3),r=e(2),o=e(4),s=e(5),i=function(t){function e(){var t,a;Object(n.a)(this,e);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(r.a)(e)).call.apply(t,[this].concat(s))))._onMoveRight=function(){var t=a.props.card;a.props.onUpdateCard(t,{content:t.content,column:t.column+1})},a._onMoveLeft=function(){var t=a.props.card;a.props.onUpdateCard(t,{content:t.content,column:t.column-1})},a}return Object(o.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this.props.card;return s.createElement("div",{className:"card"},t.column>1&&s.createElement("div",{className:"icon"},s.createElement("button",{className:"btn",onClick:this._onMoveLeft},s.createElement("i",{class:"fas fa-chevron-left"}))),s.createElement("div",{className:"content"},t.content),t.column<4&&s.createElement("div",{className:"icon"},s.createElement("button",{className:"btn",onClick:this._onMoveRight},s.createElement("i",{class:"fas fa-chevron-right"}))))}}]),e}(s.Component);t.exports=i}.call(this,e(6)(t))},function(t,n,e){"use strict";e.r(n);var a=e(5),c=e.n(a),r=e(9),o=e.n(r),s=(e(17),e(10)),i=e(7),l=e(0),u=e(1),d=e(3),m=e(2),p=e(4),f=(e(18),e(5)),h=e(19),v=function(t){function n(){var t,e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=Object(d.a)(this,(t=Object(m.a)(n)).call.apply(t,[this].concat(c)))).state={columns:[1,2,3,4],cards:[{column:1,content:"Card 1"},{column:1,content:"Card 10"},{column:2,content:"Card 2"},{column:3,content:"Card 3"},{column:4,content:"Card 4"}]},e._onAddCard=function(t){e.setState(function(n){return Object(i.a)({},n,{cards:[].concat(Object(s.a)(n.cards),[t])})})},e._onUpdateCard=function(t,n){e.setState(function(e){return Object(i.a)({},e,{cards:e.cards.filter(function(n){return n!==t}).concat(n)})})},e}return Object(p.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return f.createElement(h,{cards:this.state.cards,columns:this.state.columns,onAddCard:this._onAddCard,onUpdateCard:this._onUpdateCard})}}]),n}(f.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.6de8b897.chunk.js.map