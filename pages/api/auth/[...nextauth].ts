import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID
        ? process.env.COGNITO_CLIENT_ID
        : "hf65vg8fd6gbu6uschbtfm082",
      clientSecret: process.env.COGNITO_CLIENT_SECRET
        ? process.env.COGNITO_CLIENT_SECRET
        : "brrq6klfa5f07lqsoj8e26vlcs0h3r4r2tn215qtg8of5uuvibs",
      issuer: process.env.COGNITO_ISSUER
        ? process.env.COGNITO_ISSUER
        : "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_xxxLlvEzz",
      //   clientId: "hf65vg8fd6gbu6uschbtfm082",
      //   clientSecret: "brrq6klfa5f07lqsoj8e26vlcs0h3r4r2tn215qtg8of5uuvibs",
      //   issuer:
      //     "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_xxxLlvEzz",
    }),
    // CognitoProvider({
    //   clientId: "1p54f4d3sr6a58drm53frgodap",
    //   clientSecret: "1hhn7e0ugfue7bp1v05gu42tj872qjn2ik79an0f3iji57ec1vjp",
    //   issuer:
    //     "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_W9qdwj61l",
    // }),
  ],
});

//https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_xxxLlvEzz
//arn:aws:cognito-idp:ap-south-1:592678693542:userpool/ap-south-1_xxxLlvEzz
