import { Type } from "@angular/core";
import { Authenticator } from "./authenticator";

export interface Config {
  authenticatorService: Type<Authenticator>;
}
