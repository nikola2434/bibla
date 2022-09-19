import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { IBook } from "../../../../UI/types";
import { SkeletonLoading } from "../../../Skeleton/Skeleton";
import { useUpdateBook } from "./useUpdateBook";
import style from "./BookEdit.module.scss";
import Field from "../../../Elements/Field/Field";
import Button from "../../../Elements/Button/Button";
import dynamic from "next/dynamic";
import { IEditorProps } from "../../../Elements/ElementsInterface";
import { DynamicSelect } from "../authors/AuthorEditContainer";
import { useGetAllAuthorsQuery } from "../../../../../services/authorsApi";
import { IOption } from "../../../Elements/Select/select_interface";
import { useGetGenresQuery } from "../../../../../services/genresApi";

export const DynamicTextEditor = dynamic<IEditorProps>(
  () =>
    import("../../../Elements/TextEditor/TextEditor").then(
      (mod) => mod.TextEditor
    ),
  { ssr: false }
);

const BookEditContainer: FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    control,
  } = useForm<IBook>({ mode: "onChange" });
  const { onSubmit, isLoading } = useUpdateBook(setValue);

  const { optionsAuthors, isLoading: isLoadingAuthors } = useGetAllAuthorsQuery(
    { search: "" },
    {
      selectFromResult: ({ data, isLoading }) => ({
        optionsAuthors: data?.map(
          (item) =>
            ({ label: item.nameAuthor, value: item.nameAuthor } as IOption)
        ),
        isLoading,
      }),
    }
  );
  const { optionsGenres, isLoading: isLoadingGenres } = useGetGenresQuery(
    {},
    {
      selectFromResult: ({ data, isLoading }) => ({
        optionsGenres: data?.map(
          (item) => ({ label: item.title, value: item.title } as IOption)
        ),
        isLoading,
      }),
    }
  );

  return (
    <div>
      {isLoading ? (
        <SkeletonLoading count={5} height={48} />
      ) : (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.book_edit}>
              <div className={style.field}>
                <Field
                  type={"text"}
                  errors={errors.title}
                  placeholder="Name of the book"
                  {...register("title", {
                    required: "This field must be filled!",
                  })}
                />
              </div>
              <div className={style.field}>
                <Controller
                  control={control}
                  name="author"
                  render={({ field, fieldState: { error } }) => (
                    <DynamicSelect
                      isMulti={false}
                      field={field}
                      errors={error}
                      placeholder="Author"
                      options={optionsAuthors || []}
                      isLoading={isLoadingAuthors}
                    />
                  )}
                />
              </div>
              <div className={style.field}>
                <Controller
                  control={control}
                  name="genre"
                  render={({ field, fieldState: { error } }) => (
                    <DynamicSelect
                      isMulti={false}
                      field={field}
                      errors={error}
                      placeholder="Genre"
                      options={optionsGenres || []}
                      isLoading={isLoadingGenres}
                    />
                  )}
                />
              </div>
              <div className={style.field}>
                <Field
                  type={"text"}
                  errors={errors.poster}
                  placeholder="Poster"
                  {...register("poster", {
                    required: "This field must be filled!",
                  })}
                />
              </div>
              <div className={style.field}></div>
            </div>
            <div>
              <Controller
                control={control}
                name="description"
                render={({
                  fieldState: { error },
                  field: { value, onChange },
                }) => (
                  <DynamicTextEditor
                    onChange={onChange}
                    value={value}
                    placeholder="Description"
                    errors={error}
                  />
                )}
              />
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

export default BookEditContainer;
