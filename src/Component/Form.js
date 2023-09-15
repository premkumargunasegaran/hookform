import { useState} from "react";
import { useForm } from "react-hook-form";


function Form() {

    const {register, handleSubmit, formState:{errors}} = useForm();

    console.log(errors)
  return (
    <div>
      <h1 className="text-danger mt-2 text-center mt-4 mb-3">Hook Form</h1>
      <div className="row justify-content-center">
        <div className="col-md-4"> 
          <form className="bg-light p-5 b-round card" >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
               First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register("fname",{required: "First Name Require"})}
               
              />
             {errors?.fname && <span className="text-danger d-block mt-2">{errors.fname.message}</span> }
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                {...register("lname", {required: "Last Name Require", minLength:{
                    value:5,
                    message:"minimum 5 letter"
                }})}
              />
                   {errors?.lname && <span className="text-danger d-block mt-2">{errors.lname.message}</span> }
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit((data)=>{
                console.log(data)
            })}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
