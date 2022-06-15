import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [id,setId]=useState([]);
  const [name,setName]=useState([]);
  const [email,setEmail]=useState([]);
  const [address,setAddress]=useState([]);
  const [mobile,setMobile]=useState([]);
  const [website,setWebsite]=useState([]);
  const [users,setUser]=useState([]);


  function saveData()
{
  let data={id,name,email,address,mobile,website}

  fetch("http://localhost:3333/lists", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}

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


      <input type="text" placeholder='Id'value={id} onChange={(e)=>setId(e.target.value)}  name="id"/> <br/>
      <input type="text" placeholder='Name'value={name} onChange={(e)=> setName(e.target.value)} name="name"/> <br/>
      <input type="text" placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)} name="email"/> <br/>
      <input type="text" placeholder='Address'value={address} onChange={(e)=>setAddress(e.target.value)} name="address"/> <br/>
      <input type="text" placeholder='Mobile'value={mobile} onChange={(e)=>setMobile(e.target.value)} name="mobile"/> <br/>
      <input type="text" placeholder='Website'value={website} onChange={(e)=>setWebsite(e.target.value)} name="website"/> <br/>


      <button type='button' onClick={saveData}>SUBMIT</button>



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