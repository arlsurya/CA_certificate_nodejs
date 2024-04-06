# Setting Up SSL Certificates for Node.js HTTPS Server

This guide provides step-by-step instructions on generating SSL certificates for setting up an HTTPS server in Node.js using OpenSSL.

## Prerequisites

Make sure you have OpenSSL installed on your system. If not, you can download it from [OpenSSL official website](https://www.openssl.org/source/) or install it using a package manager like apt, brew, or chocolatey.

## Steps

1. **Generate Private Key (`key.pem`)**

    ```bash
    openssl genrsa -out key.pem
    ```

    This command generates a new RSA private key (`key.pem`) with a default key length of 2048 bits.

2. **Generate Certificate Signing Request (CSR) (`csr.pem`)**

    ```bash
    openssl req -new -key key.pem -out csr.pem
    ```

    This command generates a CSR (`csr.pem`) based on the private key (`key.pem`) you generated in the previous step. You'll be prompted to provide details such as Country Name, State or Province Name, etc. Follow the prompts to complete the CSR generation.

3. **Generate Self-Signed Certificate (`cert.pem`)**

    ```bash
    openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
    ```

    This command generates a self-signed X.509 certificate (`cert.pem`) valid for 365 days based on the CSR (`csr.pem`) and the private key (`key.pem`). Adjust the number of days (`365`) as needed.


