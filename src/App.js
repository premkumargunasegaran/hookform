import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./Component/Form";
import ReuseForm from "./Component/ReuseForm";


function App() {
  const obj = {
    email:"email",
    phone:"phone",
    name:"name",
  }

  const obj2 = {
   
    name:"name",
  }

  const obj3 = {
   
    name:"name",
    password:"password"
  }
  return (
    <div className="">
      {/* <Form /> */}
      <h1 className="text-center">Form 1</h1>
      <ReuseForm  showinput = {obj}/>

      <h1 className="text-center">Form 2</h1>
      <ReuseForm  showinput = {obj2}/>
      <h1 className="text-center">Form 3</h1>
      <ReuseForm  showinput = {obj3}/>
    </div>
  );
}

export default App;
