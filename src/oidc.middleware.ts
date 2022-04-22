import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import OidcService from "./oidc.service";

export default async function oidcMiddleware(req: Request, res: Response, next: NextFunction)  {
    const oidcService: OidcService = OidcService.getInstance();
    try {
        if (!req.headers.authorization) {
            return res.status(401).send({success: false, data: {}, message: "missingToken"});
        }
        if (req.headers.authorization.indexOf("Bearer ") !== 0) {
            return next();
        }
        const tokenSlice: string = req.headers.authorization.split(" ")[1];
        await jwt.verify(tokenSlice, oidcService.pem);
        return next();
    } catch (ex) {
        oidcService.errorEvents.emit("tokenError", ex);
        return res.status(401).send({success: false, data: {}, message: "invalidToken"});
    }
}