import * as yup from "yup";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

// Dummy user db
const users = [
  {
    id: "1",
    name: "Riecky",
    email: "riecky@example.com",
    password: bcrypt.hashSync("test123", 10),
  },
  {
    id: "2",
    name: "Jane",
    email: "jane@example.com",
    password: bcrypt.hashSync("securepass", 10),
  },
];

// Yup validation schema
const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: { email?: string; password?: string } | undefined,
        req: any
      ) {
        try {
          // 1. Validasi input pakai yup
          await loginSchema.validate(credentials, { abortEarly: false });

          // 2. Cek user
          const user = users.find((u) => u.email === credentials!.email);
          if (!user) {
            throw new Error(
              `VALIDATION_ERROR:${JSON.stringify({
                email: ["User not found"],
              })}`
            );
          }

          // 3. Cek password
          const isValid = await bcrypt.compare(
            credentials!.password!,
            user.password
          );
          if (!isValid) {
            throw new Error(
              `VALIDATION_ERROR:${JSON.stringify({
                email: ["Email is required"],
                password: ["Password is required"],
              })}`
            );
          }

          // 4. Return user data
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (err: any) {
          // Kalau error dari yup
          if (err.name === "ValidationError") {
            const fieldErrors: Record<string, string[]> = {};
            err.inner.forEach((e: any) => {
              if (!fieldErrors[e.path]) {
                fieldErrors[e.path] = [];
              }
              fieldErrors[e.path].push(e.message);
            });
            throw new Error(`VALIDATION_ERROR:${JSON.stringify(fieldErrors)}`);
          }

          // Error biasa (user not found / password salah)
          throw new Error(err.message || "Login failed");
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
