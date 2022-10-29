import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { IUser } from "../../../../../UI/types";
import Button from "../../../../Elements/Button/Button";
import { IOption } from "../../../../Elements/Select/select_interface";
import { DynamicSelect } from "../../authors/AuthorEditContainer";
import style from "./UserEditContainer.module.scss";
import { useUpdateUser } from "./useUpdateUser";

const UserEditContainer: FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<IUser>({ mode: "onChange" });
  const { isLoading, onSubmit } = useUpdateUser(setValue);
  const options: IOption[] = [
    { label: "user", value: false },
    { label: "admin", value: true },
  ];
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.field}>
          <Controller
            control={control}
            name="isAdmin"
            render={({ field }) => (
              <DynamicSelect
                field={field}
                isLoading={isLoading}
                isMulti={false}
                placeholder={"Role"}
                options={options}
              />
            )}
          />
        </div>

        <div className={style.update}>
          <Button buttonStyle={2}>Update</Button>
        </div>
      </form>
    </div>
  );
};

export default UserEditContainer;
