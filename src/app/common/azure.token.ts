/* eslint-disable prettier/prettier */
export type azureToken = {
  aud: string;
  exp: number;
  username: string;
  email: string;
  uti: string;
  ver: string;
  userId: string;
  idtyp?: string;
};

export type azureTokenHeader = {
  typ: string;
  alg: string;
  x5t: string;
  kid: string;
};
