import Jwk from "./jwk.model";
import JwkInfo from "./jwk-info.model";
import https from "https";
import axios from "axios";
import OidcClientOptions from "./oidc-client-options";
import jwkToPem  from "jwk-to-pem";
import EventEmitter from "events";
export default class OidcService {
    public static instance: OidcService = null;
    public jwkInfo: JwkInfo = null;
    public jwks: Jwk[] = [];
    public pems: { kid: string, pem: string }[] = [];
    public errorEvents: EventEmitter = new EventEmitter();

    public async getJwk(options: OidcClientOptions): Promise<Jwk[]> {
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
                this.jwks = response.data.keys.map((k:any) => new Jwk(k));
                return resolve(this.jwks);
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
                this.jwks = await this.getJwk(options);
                this.pems = this.jwks.map((jwk) => {
                    return {
                        kid: jwk.kid,
                        pem: jwkToPem(jwk as any)
                    };
                });
                return resolve(res);
            } catch (ex) {
                return reject(ex);
            }
        });
    }

    getPemByKid(kid: string): string {
        const filter = this.pems.filter((p) => String(p.kid) === kid);
        return filter.length > 0 ? filter[0].pem : null;
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