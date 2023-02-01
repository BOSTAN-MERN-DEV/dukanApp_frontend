import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/user/thunk";

export const Login = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        debugger
        console.log("inside submit", data)
        dispatch(loginUser(data));
        console.log("after dispatch")
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div>
                <label htmlFor="customer_name">Name</label>
                <input type="text" placeholder="Enter your name" {...register("customer_name", { required: true })} />
            </div> */}

            <div>
                <label htmlFor="customer_email">Email</label>
                <input type="email" placeholder="Enter your Email" {...register("customer_email", { required: true })} />
            </div>

            <div>
                <label htmlFor="customer_password">Password</label>
                <input type="password" placeholder="Password" {...register("customer_password", { required: true, })}
                />
            </div>
            <button type="submit">Login</button>

            {/* <Button type="submit" >
                Login{"   "}
            </Button> */}
        </form>
    );
}