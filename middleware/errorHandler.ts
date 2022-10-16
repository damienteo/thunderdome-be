import { Request, Response, NextFunction } from "express";

interface IError extends Error {
  statusCode: number;
}

export const errorHandler = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = { ...err };

  error.message = err.message;

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server Error" });
};
