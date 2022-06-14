import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [id,setId]=useState([]);
  const [name,setName]=useState([]);
  const [email,setEmail]=useState([]);
  const [address,setAddress]=useState([]);
  const [mobile,setMobile]=useState([]);
  const [website,setWebsite]=useState([]);



  useEffect(()=>{
    fetch("http://localhost:3333/lists").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>


      <input type="text" placeholder='Id' name="id"/> <br/>
      <input type="text" placeholder='Name' name="name"/> <br/>
      <input type="text" placeholder='Email' name="email"/> <br/>
      <input type="text" placeholder='Address' name="address"/> <br/>
      <input type="text" placeholder='Mobile' name="mobile"/> <br/>
      <input type="text" placeholder='Website' name="website"/> <br/>


      <button>SUBMIT</button>



<br/><br/>


      <table border="">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
          <td>Mobile</td>
          <td>Website</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
           <td>{item.address.street}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;