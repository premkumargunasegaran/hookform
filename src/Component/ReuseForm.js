import React from "react";

function ReuseForm( props) {
  return (
    <div className="container ">
    <div className="row justify-content-center">
    <div className="col-md-5">
    <form>
        {
            props.showinput.email ? <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            
          </div> : null
        }
        
       {
        props.showinput.name ?  <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          First Name
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        
      </div> : null
       }
       {props.showinput.password ?
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div> : null}
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default ReuseForm;
