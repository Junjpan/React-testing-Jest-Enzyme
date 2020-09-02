import React ,{Component}from "react";
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

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hidBtn:false
    }
    this.fetch=this.fetch.bind(this)
  }

  fetch(){
    this.props.fetchPosts();
    this.toggleState();
  }
 
 toggleState=()=>{
    this.setState({hidBtn:!this.state.hidBtn})
  }

  addOne=(number)=>{
    return number+1
  }
render(){
  const {posts}=this.props;
  const configButton = {
    buttonText: "Get Posts",
    emitEvent:this.fetch
  };
  return (
    <div className='App' data-test="appComponent">
      <Header />
      <section className='main'>
        <Headline
          header='Headlines'
          desc='Click the button to render posts!'
          tempArr={tempArr}
        />
        {!this.state.hidBtn&&<SharedButton {...configButton} />}        
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
  
}

const mapStateToProps = (state) => {
  return { posts: state.postReducer };
};

export default connect(mapStateToProps, { fetchPosts })(App);
