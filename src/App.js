import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import { connect } from "react-redux";
import SharedButton from "./components/button/index";
import MyListItem from "./components/mylistitem/index";
import { fetchPosts } from "./actions/index";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joe@gmail.com",
    age: 24,
    onlineStatus: false,
  },
];

function App(props) {
  const configButton = {
    buttonText: "Get Posts",
    emitEvent: props.fetchPosts,
  };

  const { posts } = props;

  return (
    <div className='App' data-test="appComponent">
      <Header />
      <section className='main'>
        <Headline
          header='Headlines'
          desc='Click the button to render posts!'
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((post,index) => {
              return (
               <MyListItem key={index} title={post.title} desc={post.body}/>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { posts: state.postReducer };
};

export default connect(mapStateToProps, { fetchPosts })(App);
