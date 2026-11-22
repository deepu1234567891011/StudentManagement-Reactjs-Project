import {useState} from "react"
import "./student.css"

function Student(){
  const[students,setStudents]=useState([
    {name:"Deepu",marks:98},
    {name:"ravi",marks:78},
    {name:"swathi",marks:91},
    {name:"Deepika",marks:95},
    {name:"sriDeepu",marks:89},
    {name:"Deepu",marks:98},
  ])
  const[name,setName]=useState("");
  const[marks,SetMarks]=useState("");
  const[editIndex,setEditIndex]=useState(null);
  const[search,setSearch]=useState("");

  const handleadd=()=>{
    if(!name || !marks) return;

    if(editIndex !== null){
      const updatedStudents = students.map((s, index) => {
        if(index === editIndex){
          return {name:name, marks:marks};
        }
        return s;
      });
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students,{name:name,marks:marks}]);
    }
    setName("");
    SetMarks("");
  }

  const handleDelete = (indexToDelete) => {
    const newStudents = students.filter((s, index) => index !== indexToDelete);
    setStudents(newStudents);
  }

  const handleEdit = (index) => {
    setName(students[index].name);
    SetMarks(students[index].marks);
    setEditIndex(index);
  }

  // Search kosam - Filter chesina list
  const filteredStudents = students
    .map((s, index) => ({...s, originalIndex: index}))
    .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

    return(
    <div className="page">
      <div className="std">
      <h1>Student Management</h1>
      </div>
      <div className="toolbar">
        <input type="text" placeholder="Search student..."
        className="searchbox"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
       </div>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <tr>
          <th className="headername">Name</th>
          <th className="headermarks">Marks</th>
          <th className="headeractions">Actions</th>
        </tr>
        <tbody>
          {filteredStudents.map((s) => (
            <tr key={s.originalIndex}>
              <td className="dataname">{s.name}</td>
              <td className="datamarks">{s.marks}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(s.originalIndex)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(s.originalIndex)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <input type="text" placeholder="Name" value={name}
        onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="Marks" value={marks}
        onChange={(e)=>SetMarks(e.target.value)}/>
        <button type="button" onClick={handleadd}>{editIndex !== null ? "Update" : "Add"}</button>
      </form>

    </div>
    )
}
    
export default Student;
