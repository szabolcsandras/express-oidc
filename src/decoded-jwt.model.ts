export default class DecodedJwt {
    public exp: number = 0;
    public iat: number = 0;
    public authTime: number = 0;
    public jti: string = "";
    public iss: string = "";
    public aud: string = "";
    public sub: string = "";
    public typ: string = "";
    public azp: string = "";
    public sessionState: string = "";
    public acr: string = "";
    public emailVerified: string = "";
    public name: string = "";
    public preferredUsername: string = "";
    public givenName: string = "";
    public familyName: string = "";
    public email: string = "";
    public memberOf: string[] = [];
    public groups: string[] = [];

    /**
     * @param {any} model - It is possible to pass an object to the constructor.
     * If the proper attributes are filled and exist,
     * the constructor will set up the new instance with
     * the provided values.
     */
    constructor(model: any = null) {
        if (model) {
            this.fill(model);
        }
    }



    /**
     * Fills the instance attributes from the given object
     * if the necessary properties are set up and available.
     */
    private fill(model: any) {
        if (model.exp) {
            this.exp = Number(model.exp);
        }
        if (model.iat) {
            this.iat = Number(model.iat);
        }
        if (model.authTime) {
            this.authTime = Number(model.authTime);
        }
        if (model.auth_time) {
            this.authTime = Number(model.auth_time);
        }
        if (model.jti) {
            this.jti = model.jti;
        }
        if (model.iss) {
            this.iss = model.iss;
        }
        if (model.aud) {
            this.aud = model.aud;
        }
        if (model.sub) {
            this.sub = model.sub;
        }
        if (model.typ) {
            this.typ = model.typ;
        }
        if (model.azp) {
            this.azp = model.azp;
        }
        if (model.sessionState) {
            this.sessionState = model.sessionState;
        }
        if (model.session_state) {
            this.sessionState = model.session_state;
        }
        if (model.acr) {
            this.acr = model.acr;
        }
        if (model.emailVerified) {
            this.emailVerified = model.emailVerified;
        }
        if (model.email_verified) {
            this.emailVerified = model.email_verified;
        }
        if (model.name) {
            this.name = model.name;
        }
        if (model.preferredUsername) {
            this.preferredUsername = model.preferredUsername;
        }
        if (model.preferred_username) {
            this.preferredUsername = model.preferred_username;
        }
        if (model.givenName) {
            this.givenName = model.givenName;
        }
        if (model.given_name) {
            this.givenName = model.given_name;
        }
        if (model.familyName) {
            this.familyName = model.familyName;
        }
        if (model.family_name) {
            this.familyName = model.family_name;
        }
        if (model.email) {
            this.email = model.email;
        }
        if (model.memberOf) {
            this.memberOf = model.memberOf;
        }
        if (model.member_of) {
            this.memberOf = model.member_of;
        }
        if (model.groups) {
            this.groups = model.groups;
        }
    }
}