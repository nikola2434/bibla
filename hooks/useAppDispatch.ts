import { allAction } from "./../store/user/allAction";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(allAction, dispatch), [dispatch]);
};
