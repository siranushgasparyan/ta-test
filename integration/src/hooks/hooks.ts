import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "react";

import { RootState } from "../store/store";
import { ActionTypes } from "../store/types";

export const useAppDispatch = () => useDispatch<Dispatch<ActionTypes>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
