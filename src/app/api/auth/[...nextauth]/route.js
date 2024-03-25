import NextAuth from "next-auth/next";
import prisma from "../../../../../libs/prismadb";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GithubProvider({
    //     clientId: process.env.GITHUB_ID,
    //     clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET,
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        username: {
          label: "Username",
          type: "text",
          placeholder: "John Smith",
        },
      },
      async authorize(credentials) {
        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        localStorage.setItem('user', JSON.stringify(user));

        // console.log(user);

        // if no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error("No user found");
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        // if password does not match
        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //     console.log(user, "USER IN ")
    //   if (user) {
    //     // if(user.isAdmin){
    //         console.log("YAAY")
    //         return {isAdmin: user.isAdmin}
    //     // }
    //   }
    // },
    // async session({ session, user, token }) {
    //     console.log(token, "TOKEN", user);
    //   // Include specific user fields in the session
    // //   session.user.id = token.user.id;
    // //   session.user.email = token.user.email;
    // //   session.user.name = token.user.name; // Include additional fields as needed
    //   session.user.isAdmin = user.isAdmin

    //   return session;
    // },
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.user = user;
    //   }
    //   return {token, user};
    // },
    // jwt: {
    //   async sign({ token, user }) {
    //     if (user) {
    //       token.user = {
    //         id: user.id,
    //         email: user.email,
    //         isAdmin: user.isAdmin,
    //         name: user.name, // Include additional fields as needed
    //       };
    //     }
    //     return token;
    //   },
    // },

    async session({ session, token, user }) {
      return { ...token, ...user, ...session };
    },
  },
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
