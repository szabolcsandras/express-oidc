import chai from "chai";
import OidcClientOptions from "../../oidc-client-options";
import OidcService from "../../oidc.service";
import {testJwkInfo} from "./jwk-info";
import axios from "axios";
import sinon from "sinon";
import { testJwk } from "./jwk";
import Jwk from "../../jwk.model";
const expect = chai.expect;

describe("OidcService...", () => {
    afterEach(() => sinon.restore());
    it("init should pass", async () => {
        const service = OidcService.getInstance();
        sinon.stub(axios, "get").resolves({
            data: testJwkInfo,
        });
        sinon.stub(service, "getJwk").resolves(new Jwk(testJwk.keys[0]));
        const res = await service.init(new OidcClientOptions(
            {
                issuer: testJwkInfo.issuer,
            }
        ));
        expect(res.jwksUri).to.eq(testJwkInfo.jwks_uri);
        expect(service.pem).to.have.lengthOf.greaterThan(1);
        expect(service.pem.indexOf("-----BEGIN PUBLIC KEY-----")).to.eq(0);
    });

    it("getJwkInfo should pass", async () => {
        const service = OidcService.getInstance();
        sinon.stub(axios, "get").resolves({
            data: testJwk,
        });
        const res = await service.getJwk(new OidcClientOptions(
            {
                issuer: testJwkInfo.issuer,
            }
        ));
        expect(res.kid).to.eq(testJwk.keys[0].kid);
        expect(res.kty).to.eq(testJwk.keys[0].kty);
        expect(res.alg).to.eq(testJwk.keys[0].alg);
        expect(res.n).to.eq(testJwk.keys[0].n);
        expect(res.e).to.eq(testJwk.keys[0].e);
        expect(res.x5c).to.deep.eq(testJwk.keys[0].x5c);
        expect(res.x5t).to.eq(testJwk.keys[0].x5t);
        expect(res.x5tS256).to.deep.eq(testJwk.keys[0]["x5t#S256"]);
    });

    it("getJwkInfo should pass", async () => {
        const service = OidcService.getInstance();
        sinon.stub(axios, "get").resolves({
            data: testJwk,
        });
        const res = await service.getJwk(new OidcClientOptions(
            {
                issuer: testJwkInfo.issuer,
            }
        ));
        expect(res.kid).to.eq(testJwk.keys[0].kid);
        expect(res.kty).to.eq(testJwk.keys[0].kty);
        expect(res.alg).to.eq(testJwk.keys[0].alg);
        expect(res.n).to.eq(testJwk.keys[0].n);
        expect(res.e).to.eq(testJwk.keys[0].e);
        expect(res.x5c).to.deep.eq(testJwk.keys[0].x5c);
        expect(res.x5t).to.eq(testJwk.keys[0].x5t);
        expect(res.x5tS256).to.deep.eq(testJwk.keys[0]["x5t#S256"]);
    });
});