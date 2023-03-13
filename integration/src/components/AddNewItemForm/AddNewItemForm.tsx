import { FC } from "react";
import { useForm } from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message"

import { Input } from "../Input/Input";
import { useAppDispatch } from "../../hooks/hooks";
import { FormValuesType } from "../../store/types";
import { addProduct } from "../../store/actions/actions";

import s from "./AddNewItemForm.module.scss";


export const AddNewItemForm: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors}
  } = useForm<FormValuesType>();
  const onSubmit = (data: FormValuesType) => {
    dispatch(addProduct(data));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <Input
          label={"name"}
          type={"string"}
          register={register}
        />
        <ErrorMessage errors={errors} name={'name'} as={<p className={s.requiredInput}/>}/>
      </label>
      <label>
        Price:
        <Input
          type={"number"}
          label={"price"}
          register={register}
        />
        <ErrorMessage errors={errors} name={'price'} as={<p className={s.requiredInput}/>}/>
      </label>
      <label>
        Quantity:
        <Input
          type={"number"}
          label={"quantity"}
          register={register}
        />
        <ErrorMessage errors={errors} name={'quantity'} as={<p className={s.requiredInput}/>}/>

      </label>
      <button className={s.addNewProductBtn}>Add new item</button>
    </form>
  );
};