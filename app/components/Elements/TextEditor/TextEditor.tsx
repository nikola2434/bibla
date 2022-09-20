import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { FC, useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { IEditorProps } from "../ElementsInterface";
import style from "./TextEditor.module.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const TextEditor: FC<IEditorProps> = ({
  onChange,
  value,
  placeholder,
  errors,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (isUpdate) return;

    const defaultValue = value || "";
    const blocksFromHtml = htmlToDraft(defaultValue);

    const contentState = ContentState.createFromBlockArray(
      blocksFromHtml.contentBlocks,
      blocksFromHtml.entityMap
    );

    const newEditorState = EditorState.createWithContent(contentState);
    setEditorState(newEditorState);
  }, [isUpdate, value]);

  const EditorStateChange = (editorState: EditorState) => {
    setIsUpdate(true);
    setEditorState(editorState);
    return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  return (
    <div className={style.editor_text}>
      <div className={style.placeholder}>{placeholder}</div>
      <div className={style.editor}>
        <Editor
          editorClassName={style.editor_style}
          toolbarClassName={style.tool_bar}
          editorState={editorState}
          onEditorStateChange={EditorStateChange}
          spellCheck
          toolbar={{
            options: ["inline", "list"],
            inline: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ["bold", "italic", "underline", "strikethrough"],
            },
            list: {
              inDropdown: false,
              options: ["unordered", "ordered"],
            },
          }}
        />
      </div>
      {errors && <div className={style.error}>{errors.message}</div>}
    </div>
  );
};
