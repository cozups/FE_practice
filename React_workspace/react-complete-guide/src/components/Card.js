import "./Card.css";

// reusable wrapper component
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>; // children: 사이에 있는 콘텐츠를 사용할 수 있게 해줌.
}

export default Card;
