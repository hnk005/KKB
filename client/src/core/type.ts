import React from "react";
import store from "@/redux/store";

export type ElementProps<P = {}> = React.FC<P>;

export type TypeMethod = 'get' | 'put' | 'post' | 'delete';

export type AppDispatch = typeof store.dispatch;