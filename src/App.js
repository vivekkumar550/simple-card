import logo from './logo.svg';
import './App.css';
import Card from './Card/Card'

function App() {
  return (
    <div className="App">
      <Card imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOY_1zfNujJFVtU4XLpXv9K97FFc-mu_likg&usqp=CAU"
        CardTitle="Card Title"
        Content="Lorem ipsum dolor sit amet consectetur adipisicing 
       elit. Facere consectetur debitis rerum? Consequuntur
        provident expedita molestias laudantium voluptatum labore
         itaque deserunt libero, dicta accusantium. Laboriosam fuga 
         nesciunt obcaecati sit veniam."
      />
      <Card imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXEs_82XvHxVlXRPMRqR7MG1-K2iti5S9V1w&usqp=CAU"
        CardTitle="Card Title"
        Content="Lorem ipsum dolor sit amet consectetur adipisicing 
       elit. Facere consectetur debitis rerum? Consequuntur
        provident expedita molestias laudantium voluptatum labore
         itaque deserunt libero, dicta accusantium. Laboriosam fuga 
         nesciunt obcaecati sit veniam."
      />
      <Card imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZ2vhLzIdtwpwXw90ZuWhngB-MdFsjD64CQ&usqp=CAU"
        CardTitle="Card Title"
        Content="Lorem ipsum dolor sit amet consectetur adipisicing 
       elit. Facere consectetur debitis rerum? Consequuntur
        provident expedita molestias laudantium voluptatum labore
         itaque deserunt libero, dicta accusantium. Laboriosam fuga 
         nesciunt obcaecati sit veniam."
      />
    </div>
  );
}

export default App;
