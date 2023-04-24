/* eslint-disable prettier/prettier */
import {
    ErrorBase,
    errorMessageInternalServer,
    errorMessageInvalidAccess,
    errorMessageInvalidInfo
} from "./error.response";
import { ErrorStatusResponse } from "./errorlist";

export class ErrorHandler {
  /**
   *
   * @param {IErrorMessageCode} args
   * @param {string} internalmessage
   * @returns object of ErrorBase
   */
  static internalServerError(
    message: keyof typeof errorMessageInternalServer,
    internalmessage: string
  ): ErrorBase {
    const errorcode = errorMessageInternalServer[message];
    return new ErrorBase(
      message,
      errorcode,
      internalmessage,
      ErrorStatusResponse.serviceunavailable
    );
  }

  /**
   *
   * @param {IErrorMessageCode} args
   * @returns
   */
  static unauthorizedError(
    message: keyof typeof errorMessageInvalidAccess
  ): ErrorBase {
    const errorcode = errorMessageInvalidAccess[message];
    return new ErrorBase(
      message,
      errorcode,
      "",
      ErrorStatusResponse.unauthorized
    );
  }

  /**
   *
   * @param {IErrorMessageCode} args
   * @returns
   */
  static forbiddenError(
    message: keyof typeof errorMessageInvalidAccess
  ): ErrorBase {
    const errorcode = errorMessageInvalidAccess[message];
    return new ErrorBase(message, errorcode, "", ErrorStatusResponse.forbidden);
  }

  /**
   *
   * @param {IErrorMessageCode} args
   * @returns
   */
  static invalidInfoError(
    message: keyof typeof errorMessageInvalidInfo
  ): ErrorBase {
    const errorcode = errorMessageInvalidInfo[message];

    return new ErrorBase(
      message,
      errorcode,
      "",
      ErrorStatusResponse.badrequest
    );
  }

  /**
   *
   * @param {IErrorMessageCode} args
   * @returns
   */
  static notFoundError(
    message: keyof typeof errorMessageInvalidInfo
  ): ErrorBase {
    const errorcode = errorMessageInvalidInfo[message];

    return new ErrorBase(message, errorcode, "", ErrorStatusResponse.notfound);
  }
}
