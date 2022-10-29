import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { IMenuItems } from "../../../Navigation/Menu/MenuInterface";
import { useUpdateGenre } from "./useUpdateGenre";
import style from "./GenreEdit.module.scss";
import { SkeletonLoading } from "../../../Skeleton/Skeleton";
import Field from "../../../Elements/Field/Field";
import { FieldLink } from "../../../Elements/FieldLink/FieldLink";
import { generateLink } from "../../../../../config/generateLink";

import Button from "../../../Elements/Button/Button";
import { DynamicTextEditor } from "../books/BookEditContainer";
import { DynamicSelect } from "../authors/AuthorEditContainer";

import { IOption } from "../../../Elements/Select/select_interface";

import { useGetAllBooksQuery } from "../../../../../services/books/booksApi";

export const GenreEditContainer: FC = () => {
  const {
    setValue,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    control,
  } = useForm<IMenuItems>({ mode: "onChange" });
  const { isLoading, onSubmit } = useUpdateGenre(setValue);

  const { options, isLoading: isBooksLoading } = useGetAllBooksQuery(
    {},
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
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.genre_edit}>
              <div className={style.field}>
                <Field
                  type={"text"}
                  errors={errors.title}
                  placeholder="Title genre"
                  {...register("title", {
                    required: "This field must be filled!",
                  })}
                />
              </div>
              <div className={style.field}>
                <FieldLink
                  register={register}
                  errors={errors.link}
                  generateLink={() => {
                    setValue("link", generateLink(getValues("title")));
                  }}
                />
              </div>
              <div className={style.field}>
                <Field
                  type={"text"}
                  errors={errors.icons}
                  placeholder="Icon genre"
                  {...register("icons", {
                    required: "This field must be filled!",
                  })}
                />
              </div>
            </div>
            <div className={style.select}>
              <Controller
                control={control}
                name="books"
                render={({ field, fieldState: { error } }) => (
                  <DynamicSelect
                    isMulti={true}
                    field={field}
                    placeholder="Books"
                    options={options || []}
                    isLoading={isLoading}
                    errors={error}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="description"
                render={({ field: { value, onChange } }) => (
                  <DynamicTextEditor
                    value={value}
                    onChange={onChange}
                    placeholder={"Description of the genre"}
                  />
                )}
              />
            </div>

            <div className={style.update}>
              <Button buttonStyle={2}>Update</Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
