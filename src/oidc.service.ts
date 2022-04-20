import Jwk from "./jwk.model";
import JwkInfo from "./jwk-info.model";
import https from "https";
import axios from "axios";
import OidcClientOptions from "./oidc-client-options";
import jwkToPem  from "jwk-to-pem";

export default class OidcService {
    public static instance: OidcService = null;
    public jwkInfo: JwkInfo = null;
    public jwk: Jwk = null;
    public pem: string = "";

    public async getJwk(options: OidcClientOptions): Promise<Jwk> {
        return new Promise(async (resolve, reject) => {
            const reqConf = {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                httpsAgent: new https.Agent({
                    rejectUnauthorized: options.rejectUnauthorized,
                }),
                timeout: 18000
            };
            try {
                const response = await axios.get(
                    this.jwkInfo.jwksUri,
                    reqConf,
                );
                const res: Jwk = new Jwk(response.data.keys[0]);
                this.jwk = res;
                return resolve(res);
            } catch (ex) {
                return reject(ex);
            }
        });
    }

    public async init(options: OidcClientOptions): Promise<JwkInfo> {
        return new Promise(async (resolve, reject) => {
            try {
                const reqConf = {
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: options.rejectUnauthorized,
                    }),
                    timeout: 18000
                };
                const response = await axios.get(
                    options.issuer + "/.well-known/openid-configuration",
                    reqConf,
                );
                const res: JwkInfo = new JwkInfo(response.data);
                this.jwkInfo = res;
                this.jwk = await this.getJwk(options);
                this.pem = jwkToPem(this.jwk as any);
                return resolve(res);
            } catch (ex) {
                return reject(ex);
            }
        });
    }

    /**
     * Returns the sigletion instance if it exists
     * otherwise it creates a new one.
     */
     public static getInstance(): OidcService {
        if (!OidcService.instance) {
            OidcService.instance = new OidcService();
        }
        return OidcService.instance;
    }
}