// import { PrismaClient } from "@prisma/client/extension";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function mainCreateUser(username: string, password: string) {
  console.log('mainCreateUser triggered in create-user.ts')
  const user = await prisma.user.create({
    data: {
      email: username,
      password: password,
      role: "",
      user: "",
      avatar: ""
    }
  });
  console.log('data saved in db', user)
}



