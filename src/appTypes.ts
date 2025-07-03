export type Langs = "us" | "ru" | "tj";

export type ErrorResponse = {
  status: number;
  message: {
    [key in Langs]: string;
  };
};
