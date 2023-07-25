import React, {useState} from "react";
import axios from "axios";

function AddStudent(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newStudent ={
            name,
            age,
            gender
        }

        axios.post("http://localhost:8080/student/add",newStudent).then(()=>{
            alert("Student Added")
            setName("");
            setAge("");
            setGender("");
            
        }).catch((err)=> {
            alert(err)
        })
    }


return(
    <div className="container">
        <form onSubmit={sendData}>
  <div className="mb-3">
    <label for="exampleInputName" className="form-label">Enter Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
    onChange={(e)=>{

        setName(e.target.value);

    }}/>

    <div id="nameHelp" class="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputAge" className="form-label">AGE</label>
    <input type="text" className="form-control" id="exampleInputAge"
    onChange={(e)=>{

        setAge(e.target.value);

    }}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputGender" className="form-label">Gender</label>
    <input type="text" className="form-control" id="exampleInputGender"
    onChange={(e)=>{

        setGender(e.target.value);

    }}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
)
}

export default AddStudent;