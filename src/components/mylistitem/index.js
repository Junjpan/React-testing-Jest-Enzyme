import React, { Component } from "react";
import PropTypes from "prop-types";

class MyListItem extends Component {
  render() {
    const { title, desc } = this.props;

    if(!title){
      return null
    }
    return (
      <div data-test='mylistitem'>
        <h2 data-test='itemTitle'>{title}</h2>
        <p data-test='itemdisc'>{desc}</p>
      </div>
    );
  }
}

MyListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default MyListItem;
