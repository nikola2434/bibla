import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { IAuthor } from "../../../../UI/types";
import { useUpdateAuthor } from "./useUpdateAuthor";
import style from "./AuthorEdit.module.scss";
import { SkeletonLoading } from "../../../Skeleton/Skeleton";
import Field from "../../../Elements/Field/Field";
import Button from "../../../Elements/Button/Button";

import { IOption, ISelect } from "../../../Elements/Select/select_interface";
import dynamic from "next/dynamic";

import { useGetAllBooksQuery } from "../../../../../services/books/booksApi";
import { FieldUploadFile } from "../../../Elements/UploadsFiles/FieldUploadFile";
import { updateAuthor } from "../../../../../services/authors/authorsAdminApi";

export const DynamicSelect = dynamic<ISelect>(
  () => import("../../../Elements/Select/Select"),
  { ssr: false }
);

const AuthorEditContainer: FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    getValues,
    control,
  } = useForm<updateAuthor>({ mode: "onChange" });
  const { onSubmit, isLoading } = useUpdateAuthor(setValue);

  const { options, isLoading: isBooksLoading } = useGetAllBooksQuery(
    { searchTerm: undefined },
    {
      selectFromResult: ({ data, isLoading }) => ({
        options: data?.map(
          (item) => ({ label: item.title, value: item._id } as IOption)
        ),
        isLoading,
      }),
    }
  );
  return (
    <div>
      {isLoading ? (
        <SkeletonLoading count={5} />
      ) : (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.author_edit}>
              <div className={style.field}>
                <Field
                  type={"text"}
                  errors={errors.nameAuthor}
                  placeholder="Name Author"
                  {...register("nameAuthor", {
                    required: "This field must be filled!",
                  })}
                />
              </div>
              <div className={style.field}>
                <Field
                  type={"text"}
                  errors={errors.country}
                  placeholder="Country"
                  {...register("country", {
                    required: "This field must be filled!",
                  })}
                />
              </div>
              <div className={style.field}>
                <Field
                  type={"date"}
                  errors={errors.DateOfBirth}
                  placeholder=" Date of Birth"
                  {...register("DateOfBirth", {
                    required: "This field must be filled!",
                    valueAsDate: false,
                  })}
                />
              </div>

              <div className={style.field}>
                <Controller
                  control={control}
                  name="BooksWritten"
                  render={({ field, fieldState: { error } }) => (
                    <DynamicSelect
                      field={field}
                      isLoading={isBooksLoading}
                      options={options || []}
                      isMulti={true}
                      placeholder={"Books written"}
                      errors={error}
                    />
                  )}
                />
              </div>
              <div className={style.field}>
                <Controller
                  control={control}
                  name="avatar"
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <FieldUploadFile
                      onChange={onChange}
                      placeholder="Avatar"
                      error={error}
                      folder="authors"
                      image={value}
                    />
                  )}
                />
              </div>
            </div>

            <div className={style.update}>
              <Button buttonStyle={2}>Update</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthorEditContainer;
