import type {LoginData} from "../../utils/shop-types.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";

const Login = () => {
    const dispatch = useAppDispatch();
    //      console.log(JSON.stringify(loginData))
        }

    return (
        <div>
        </div>
    );
};

export default Login;