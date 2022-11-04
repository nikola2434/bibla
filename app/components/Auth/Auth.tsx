import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuthRegister from "./useAuthRegister";
import style from "./Auth.module.scss";
import lock from "../../../public/lock.png";
import Image from "next/image";
import Button from "../Elements/Button/Button";
import Fields from "./Fields/Fields";
import Meta from "../Meta/Meta";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

export interface IForm {
  login: string;
  password: string;
}

const Auth: FC = () => {
  useAuthRegister();
  const { login, register } = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.users);

  const [type, setType] = useState<"login" | "register">("login");

  const {
    formState,
    reset,
    handleSubmit,
    register: registerField,
    setError,
  } = useForm<IForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    if (type === "login") login({ data, setError });
    else if (type === "register") register({ data, setError });

    reset();
  };

  return (
    <Meta title="Auth">
      <div className={style.Auth}>
        <div className={style.container_auth}>
          <div className={style.container_heading}>
            <Image
              src={lock}
              alt=""
              draggable={false}
              width={50}
              height={50}
              priority
            />
            <div className={style.heading}>Auth</div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Fields formState={formState} register={registerField} />
            <div className={style.buttons}>
              <Button
                onClick={() => setType("login")}
                disabled={isLoading}
                buttonStyle={1}
              >
                login
              </Button>
              <Button
                onClick={() => setType("register")}
                disabled={isLoading}
                buttonStyle={2}
              >
                register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Meta>
  );
};

export default Auth;
