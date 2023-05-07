import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth(req, res, {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentails: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "tykeaboyloy@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        fetch("http://localhost:8000/api/login", {
          method: "POST",
        });
      },
    }),
  ],
});