import Header from "../../header";
import SideBar from "../../sidebar";
import '../../home.css';
import Form1 from "../../../formspage/form-1";
import Form2 from "../../../formspage/form-2";
import Form3 from "../../../formspage/form-3";
import Form4 from "../../../formspage/form-4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Desk2 = () => {  
    const navigate= useNavigate()
    const [formData, setFormData]=useState({
        property:"",
        contact:0,
        area:0
    }) 
    const [page, setPage]=useState(0);
    const formPages=["form1","form2", "form3", "form4"]
    const formupdate= ()=>{
        if(page===0){
            return(
                <>
                <a href="/x" id="basic-info"><p>1</p>Basic Info</a>
                <a href="/x" ><p>2</p>Property  Detail</a>
                <a href="/x" ><p>3</p>General Info</a>
                <a href="/x" ><p>4</p>Location Info</a>
                </>
            )

        }
        else if(page===1){
            return(
                <>
                <a href="/x" ><p>1</p>Basic Info</a>
                <a href="/x" id="basic-info" ><p>2</p>Property  Detail</a>
                <a href="/x" ><p>3</p>General Info</a>
                <a href="/x" ><p>4</p>Location Info</a>
                </>
            )
        }
        else if(page===2){
            return(
                <>
                <a href="/x" ><p>1</p>Basic Info</a>
                <a href="/x"  ><p>2</p>Property  Detail</a>
                <a href="/x"id="basic-info" ><p>3</p>General Info</a>
                <a href="/x" ><p>4</p>Location Info</a>
                </>
            )
        }
        else if(page===3){
            return(
                <>
                <a href="/x" ><p>1</p>Basic Info</a>
                <a href="/x"  ><p>2</p>Property  Detail</a>
                <a href="/x" ><p>3</p>General Info</a>
                <a href="/x" id="basic-info"><p>4</p>Location Info</a>
                </>
            )
        }
      
    }
    const PageDisplay=()=>{
            if(page===0){
               return <Form1 formData={formData} setFormData={setFormData}/>
            }
            else if(page===1){
               return <Form2 formData={formData} setFormData={setFormData}/>
            }
            else if(page===2){
               return <Form3 formData={formData} setFormData={setFormData}/>
            }
            else if(page===3){
              return  <Form4 formData={formData} setFormData={setFormData}/>
            }
    }
    return (
        <>
            <div className="home-main">
                <div className="home-sidebar">
                    <SideBar />
                </div>
                <div className="home-header">
                    <div className="home-head">
                        <Header />
                    </div>
                    <div className="home-content">
                        <div className="home-app-prop">
                            <p>Add new Property</p>
                        </div>
                        <div className="home-slider" >
                            {formupdate()}
                                
                        </div>
                        <div className="home-form-content">
                            <div id="f1">{PageDisplay()}</div>
                            <div id="f1-btn">
                                                <button  className="f1-btn1"
                                                 onClick={()=>{
                                                    if(page===0){
                                                      return  navigate("/desk1")
                                                    }
                                                    else{
                                                        setPage((curr)=>curr-1);
                                                    }
                                        
                                                }}>{page===0 ? "Cancel": "Previous"}</button>
                                                <button  className="f1-btn1" id="b2"
                                                 onClick={async()=>{
                                                    if(page ===formPages.length-1){
                                                           alert("Form Submitted")
                                                            console.log(formData);
                                                        const res=await fetch("https://realrohan.herokuapp.com/form",{
                                                            method:"POST",
                                                            headers:{
                                                            "Content-Type":"application/json",
                                                            "authentication": localStorage.getItem("userInfo")},
                                                            body:JSON.stringify({
                                                                property:formData.property,
                                                                area:formData.area,
                                                                contact:formData.contact
                                                            })
                                                        })
                                                        const response=await res.json();
                                                        console.log(response)
                                                        navigate("/desk1")
                                                       

                                                    }else{
                                                    setPage((curr)=>curr+1);
                                                    }
                                                }}>{page===formPages.length-1 ? "Submit": "Save & Continue"}</button>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Desk2;