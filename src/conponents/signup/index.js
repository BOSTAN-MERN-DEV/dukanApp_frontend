import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { userSignup } from "../../redux/slices/user/thunk";

export const Singup = () => {
    // const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        debugger
    console.log("inside data",data)
        // dispatch(userSignup(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Create Account</h3>
              <div className="form-outline mb-2">
              <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register("customer_name")} />
              </div>

              <div className="form-outline mb-2">
              <label className="form-label">Address</label>
                <input type="text" className="form-control"{...register("customer_address")} />
              </div>

              <div className="form-outline mb-2">
              <label className="form-label">Email</label>
                <input type="email" className="form-control"{...register("customer_email")} />
              </div>

              <div className="form-outline mb-2">
              <label className="form-label">Password</label>
                <input type="password" className="form-control" {...register("customer_password")} />
              </div>

              <div className="form-outline mb-2">
              <label className="form-label">Number</label>
                <input type="number" className="form-control"{...register("customer_phone")} />
              </div>
              
              <div className="form-outline mb-2">
              <label className="form-label">City</label>
                <input type="text" className="form-control"{...register("customer_city")} />
              </div>
            
            <div className="login-form">
            <button type="submit" className="">Create Account</button>
            </div>
</form>




        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <div>
        //         <label htmlFor="customer_name">Name</label>
        //         <input type="text" placeholder="Enter your name" {...register("customer_name", { required: true })} />
        //     </div>

        //     <div>
        //         <label htmlFor="customer_email">Email</label>
        //         <input type="email" placeholder="Enter your Email" {...register("customer_email", { required: true })} />
        //     </div>

        //     <div>
        //         <label htmlFor="customer_password">Password</label>
        //         <input type="password" placeholder="Password" {...register("customer_password", { required: true, })}
        //         />
        //     </div>
        //     <button type="submit">Login</button>

        //     {/* <Button type="submit" >
        //         Login{"   "}
        //     </Button> */}
        // </form>
    );
}