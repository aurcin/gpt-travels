import { PrismaClient } from '@prisma/client';

function prismaClientSingelton() {
  return new PrismaClient();
}

type PrismaClientSingelton = ReturnType<typeof prismaClientSingelton>;

const globalForPrisma = globalThis as unknown as {
  db: PrismaClientSingelton | undefined;
};

const db = globalForPrisma.db ?? prismaClientSingelton();

export default db;

if (process.env.NODE_ENV !== 'production') globalForPrisma.db = db;
