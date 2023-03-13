import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import s from './Input.module.scss'

type PropsType = {
  label: string
  type: "string" | "number"
  register: UseFormRegister<FieldValues>

}

export const Input: FC<PropsType> = ({
                                       label,
                                       type,
                                       register
                                     }) => {
  const required = {
      value: true, message: `Field is required`
  }
  const numberInput = {
    required: required,
    min: {
      value: 1,
      message: `${label} cannot be below zero`
    },
    max: {
      value: 1e6,
      message: `Max valid is one million`
    },
    valueAsNumber: true
  };
  const stringInput = {required: required};

  return (
    <input
      className={s.inputField}
      placeholder={label}
      type={type}
      {...register(
        label,
        type === "number"
          ? numberInput
          : stringInput
      )}
    />
  );
};

