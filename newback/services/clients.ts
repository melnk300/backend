import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const getAllClients = async () => {
    return await prisma.client.findMany()
}