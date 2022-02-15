interface ITokenReqBody {
  user_id: string;
}

interface ITokenResBody {
  token: string;
}

interface IValidateReqBody {
  token: string;
}

interface IValidateResBody {
  ok: boolean;
}

export {ITokenReqBody, ITokenResBody, IValidateReqBody, IValidateResBody};
