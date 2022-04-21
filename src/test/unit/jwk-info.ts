export const testJwkInfo = {
    "issuer": "https://login.example.org/auth/realms/example",
    "authorization_endpoint": "https://login.example.org/auth/realms/example/protocol/openid-connect/auth",
    "token_endpoint": "https://login.example.org/auth/realms/example/protocol/openid-connect/token",
    "token_introspection_endpoint": "https://login.example.org/auth/realms/example/protocol/openid-connect/token/introspect",
    "userinfo_endpoint": "https://login.example.org/auth/realms/example/protocol/openid-connect/userinfo",
    "end_session_endpoint": "https://login.example.org/auth/realms/example/protocol/openid-connect/logout",
    "jwks_uri": "https://login.example.org/auth/realms/example/protocol/openid-connect/certs",
    "check_session_iframe": "https://login.example.org/auth/realms/example/protocol/openid-connect/login-status-iframe.html",
    "grant_types_supported": [
      "authorization_code",
      "implicit",
      "refresh_token",
      "password",
      "client_credentials"
    ],
    "response_types_supported": [
      "code",
      "none",
      "id_token",
      "token",
      "id_token token",
      "code id_token",
      "code token",
      "code id_token token"
    ],
    "subject_types_supported": [
      "public",
      "pairwise"
    ],
    "id_token_signing_alg_values_supported": [
      "PS384",
      "ES384",
      "RS384",
      "HS256",
      "HS512",
      "ES256",
      "RS256",
      "HS384",
      "ES512",
      "PS256",
      "PS512",
      "RS512"
    ],
    "id_token_encryption_alg_values_supported": [
      "RSA-OAEP",
      "RSA1_5"
    ],
    "id_token_encryption_enc_values_supported": [
      "A128GCM",
      "A128CBC-HS256"
    ],
    "userinfo_signing_alg_values_supported": [
      "PS384",
      "ES384",
      "RS384",
      "HS256",
      "HS512",
      "ES256",
      "RS256",
      "HS384",
      "ES512",
      "PS256",
      "PS512",
      "RS512",
      "none"
    ],
    "request_object_signing_alg_values_supported": [
      "PS384",
      "ES384",
      "RS384",
      "HS256",
      "HS512",
      "ES256",
      "RS256",
      "HS384",
      "ES512",
      "PS256",
      "PS512",
      "RS512",
      "none"
    ],
    "response_modes_supported": [
      "query",
      "fragment",
      "form_post"
    ],
    "registration_endpoint": "https://login.example.org/auth/realms/example/clients-registrations/openid-connect",
    "token_endpoint_auth_methods_supported": [
      "private_key_jwt",
      "client_secret_basic",
      "client_secret_post",
      "tls_client_auth",
      "client_secret_jwt"
    ],
    "token_endpoint_auth_signing_alg_values_supported": [
      "PS384",
      "ES384",
      "RS384",
      "HS256",
      "HS512",
      "ES256",
      "RS256",
      "HS384",
      "ES512",
      "PS256",
      "PS512",
      "RS512"
    ],
    "claims_supported": [
      "aud",
      "sub",
      "iss",
      "auth_time",
      "name",
      "given_name",
      "family_name",
      "preferred_username",
      "email",
      "acr"
    ],
    "claim_types_supported": [
      "normal"
    ],
    "claims_parameter_supported": false,
    "scopes_supported": [
      "openid",
      "email",
      "address",
      "phone",
      "roles",
      "web-origins",
      "offline_access",
      "profile",
      "microprofile-jwt"
    ],
    "request_parameter_supported": true,
    "request_uri_parameter_supported": true,
    "code_challenge_methods_supported": [
      "plain",
      "S256"
    ],
    "tls_client_certificate_bound_access_tokens": true,
    "introspection_endpoint": "https://login.example.org/auth/realms/example/protocol/openid-connect/token/introspect"
  };