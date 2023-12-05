import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

// mapDispatchToProps만 쓰고 싶을 땐 첫 번째 파라미터를 null로 전달
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
