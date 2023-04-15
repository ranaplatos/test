import logo from './logo.svg';
import './App.css';
import Counter_useState from './Components/counter/counter_useState';
import Counter_useReducer from './Components/counter/counter_useReducer';
import Post_useState from './Components/posts/post_useState';
import Post_useReducer from './Components/posts/post_useReducer';
import Form_useState from './Components/forms/form_useState';
import Form_useReducer from './Components/forms/form_useReducer';
import Form from './Components/formsHandleValidate/form';

function App() {
  return (
    <div className="App">
      {/* <Counter_useState/> */}
      {/* <Counter_useReducer/> */}
      {/* <Post_useState/> */}
      {/* <Post_useReducer/> */}
      {/* <Form_useState/> */}
      {/* <Form_useReducer/> */}
      <Form/>
    </div>
  );
}

export default App;
