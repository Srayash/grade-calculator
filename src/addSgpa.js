import { useState } from "react";

const AddSgpaRow = () => {
    const [data, setData] = useState([{credit:"",grade:""}])
    const [sgpa, setSgpa] = useState(0);

    const handleClick=()=>{
        setData([...data,{credit:"",grade:""}])
    }

    const handleChange=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...data]
        onchangeVal[i][name]=value
        setData(onchangeVal)
    }

    const handleDelete=(i)=>{
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    }

    const calculateSgpa = () => {
        let totalCredits = 0;
        let totalGradePoint = 0;

        data.forEach(course=>{
            const credit = parseInt(course.credit);
            const gradePoint = parseInt(course.grade);
            if(!isNaN(credit) && !isNaN(gradePoint)){
                totalCredits += credit;
                totalGradePoint += credit * gradePoint;
            }
        });

        if (totalCredits === 0) {
            setSgpa(0);
        }else{
            const sgpaValue = totalGradePoint/totalCredits;
            setSgpa(sgpaValue.toFixed(2));
        }
    }
    
    return (
        <div className="container">
                <div className="addSrow">
                    {
                        data.map((val,i)=>
                        <div className="row">
                                <div className="col">
                                    <input type="number" placeholder="Course Credit" min="1" step="1" id="credit" name="credit" value={val.credit} onChange={(e)=>handleChange(e,i)} />
                                </div>
                                <div className="col">
                                    <select id="grade" name="grade" value={val.grade} onChange={(e)=>handleChange(e,i)}>
                                        <option value="" disabled selected>Grade</option>
                                        <option value="10">AS</option>
                                        <option value="10">AA</option>
                                        <option value="9">AB</option>
                                        <option value="8">BB</option>
                                        <option value="7">BC</option>
                                        <option value="6">CC</option>
                                        <option value="5">CD</option>
                                        <option value="4">DD</option>
                                        <option value="0">F</option>
                                    </select>
                                </div>    
                                <div className="col">
                                    <button className="bn30"id="remove" onClick={()=>handleDelete(i)}>Remove</button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="row">
                        <button id = "add" className="bn30" onClick={handleClick} >Add Course</button>
                        <button id = "submit" className="bn30" onClick={calculateSgpa} >Get SGPA</button>
                </div>
                <div className="result">
                    <p className="sgparesult">
                        Your SGPA is : {sgpa}
                    </p>
                </div>
        </div>
    );
}
 
export default AddSgpaRow;