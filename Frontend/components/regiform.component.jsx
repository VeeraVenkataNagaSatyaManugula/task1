import axios from 'axios';
import {useForm} from 'react-hook-form';
export function Reg(){
    const{
        register,
        handleSubmit,
        formState:{errors}

    }=useForm();
    function handleData(values){
        axios({
            method:"post",
            url:"http://127.0.0.1:5000/customerregister",
            data:values,
            
        })
        alert('data saved')
        window.location.reload();
        // alert(JSON.stringify(data))
    }
    return(
        <div>
            <div className='row'>
                <div className='col-6 border border-1 border-primary'>
                <img src={require("../../../tasks/src/assests/images/regipic.jpg")} width="390px" height="720px"></img>
                </div>
            <div className='col-5 border border-1 border-primary' style={{width:'730px', height:'725px'}} >
            <form onSubmit={handleSubmit((values)=>{handleData(values)})} >
                
            <h2 style={{ "textAlign": "center", "color": "black" }}>Sign Up</h2>
                <div>
                    <label className="form-label">FullName</label>
                    <input type="text" className="form-control" {...register("FullName",{required:true})}></input>
                </div>
                <div>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" {...register("Email",{required:true})}></input>
                </div>
                <div>
                    <label className="form-label">UserName</label>
                    <input type="text" className="form-control" {...register("UserName",{required:true})}></input>
                </div>
                <div>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" {...register("Password",{required:true})}></input>
                </div>
                <div>
                    <label className="form-label">RepPass</label>
                    <input type="password" className="form-control" {...register("RepeatPassword",{required:true})}></input>
                </div>
                <div className='mt-3'>
                    <input type="checkbox"></input><label> I agree to the terms of user</label> 
                </div>
                <div className='mt-3'>
                    <input type="submit" value="signup" className="btn btn-primary"></input>
                    <input type="submit" value="signin" className="btn btn-primary"></input>
                    
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}







































/*import { useRef } from "react"
import './regiform.component.css';
import axios from "axios";

export function Registration() {
    const nameref = useRef()
    const emailref = useRef()
    const usernameref = useRef()
    const passwordref = useRef()
    const rpref = useRef()
    function handleSubmit(){
        let obj={
            nameref: nameref.current.value,
            emailref: emailref.current.value,
            usernameref: usernameref.current.value,
            passwordref: passwordref.current.value,
            rpref: rpref.current.value,
        }
        alert(JSON.stringify(obj))
    }
       function handleData(obj){
        axios({
            method:"post",
            url:"http://127.0.0.1:5000/customerregister",
            data:obj
         })
         alert('data saved');
       }
         console.log("hello")
        
    

    return (
        <div className="container"> 
            <form onSubmit={handleSubmit((obj)=>handleData(obj))}>
                <div className="row">
                    { <div className="col-6">
                        <img src={require("../../assets/images/regpic.jpg")} width="480px"></img>
                    </div> }
                    <div className="col-6">
                        <h2 style={{ "textAlign": "center", "color": "black" }}>Sign Up</h2>
                        <div className="mb-3">
                            <label  className="form-label">Full Name</label>
                            <input type="text" className="form-control" ref={nameref} placeholder="Name...."></input>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input type="email" className="form-control" ref={emailref} placeholder="Email address...."></input>
                        </div>
                        <div className="mb-3">
                            <label >Username</label>
                            <input type="text" className="form-control" ref={usernameref} placeholder="Username...."></input>
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password"  className="form-control" ref={passwordref} placeholder="*"></input>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Repeat Password</label>
                            <input type="password"  className="form-control" ref={rpref}></input>
                        </div>
                        <div classNameName="form-check">
                            <input classNameName="form-check-input" type="checkbox" ></input>
                            <label classNameName="form-check-label" for="gridCheck">
                                I agree to the terms of user
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="Submit"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )


}*/