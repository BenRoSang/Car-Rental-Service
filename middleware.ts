import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
    publicRoutes: ['/'],
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
