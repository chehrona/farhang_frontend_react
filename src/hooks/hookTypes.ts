import { ReactNode } from "react";
import { Langs } from "../appTypes";

// useGlobalData
export type TitleProps = {
  [key in Langs]: string[][];
};

export type ContextTypes = {
  lang: Langs;
  setLang: React.Dispatch<React.SetStateAction<Langs>>;
};

export type GlobalDataProviderProps = {
  children: ReactNode;
};

// useToasts
export type ToastTypes = "success" | "error" | "info";
