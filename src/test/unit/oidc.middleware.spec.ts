import chai from "chai";
import sinon from "sinon";
import OidcService from "../../oidc.service";
import oidcMiddleware from "../../oidc.middleware";
import { pubkey, testJwt } from "./jwt";
const expect = chai.expect;

describe("OidcMiddleware...", () => {
    afterEach(() => sinon.restore());
    it("init should pass", async () => {
        const cb = () => {return "ok";};
        const oidcService: OidcService = OidcService.getInstance();
        oidcService.pems = [{kid: "testkeyid", pem: pubkey}];
        const res = await oidcMiddleware({
            headers: {
                authorization: "Bearer " + testJwt,
            },
        } as any, null, cb);
        expect(res).to.eq("ok");
    });
    it("init return error on invalid token", async () => {
        const cb = () => {return "ok";};
        const res = await oidcMiddleware({
            headers: {
            },
        } as any,
        {
            status: () => {
                return {
                    send: (p: any) => {
                        return p;
                    }
                };
            }
        } as any, cb);
        expect(res).to.deep.eq({success: false, data: {}, message: "missingToken"});
    });
});
