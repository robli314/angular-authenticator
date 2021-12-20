import { InjectionToken } from "@angular/core";
import { Authenticator } from "../models/authenticator";

export const AUTHENTICATOR_SERVICE_TOKEN =
  new InjectionToken<Authenticator>('AUTHENTICATOR_SERVICE_TOKEN');
