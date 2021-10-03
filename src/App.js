import logo from './logo.svg';
import './App.css';

const Header = () => {
    return <h2>Hello World</h2>
};

const Field = () => {
    return <input placeholder='Type here' type="text"/>
}

function Btn() {
    // const text = 'Log in';
    const res = () => {
        return 'Log in';
    }
    return <button>{res()}</button>
}

function App() {
  return (
    <div className="App">
        <Header/>
        <Field/>
        <Btn/>
    </div>
  );
}

export {Header};
export default App;
