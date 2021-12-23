import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUsersControllers{
  async hundle(resquest: Request, response: Response){

    const sevice = new AuthenticateUserService();
      // sevice.execute()
  }
}


export default {AuthenticateUsersControllers}