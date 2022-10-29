import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import { FieldError } from "react-hook-form";

interface IButtonProps {
  buttonStyle: 1 | 2;
}

type IButtonHTML = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps;

export interface IButton extends IButtonHTML {}

export interface IInputProps {
  placeholder: string;
  errors?: FieldError | undefined;
}

type IInputHTML = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IField extends IInputHTML {}

type TypeEDitorProps = IInputProps & EditorProps;

export interface IEditorProps extends Omit<TypeEDitorProps, "editorState"> {
  value: string | undefined;
  onChange: (...event: any[]) => void;
}

export interface IFieldUploadProps {
  folder?: string;
  onChange: (...event: any[]) => void;
  placeholder: string;
  error?: FieldError;
  image?: string;
}
