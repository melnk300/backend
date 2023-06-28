import { PrismaClient } from "@prisma/client";
import 'dotenv/config'
import axios from 'axios';

const prisma = new PrismaClient();

interface Fields {
    field: string,
    type: string,
    state: boolean,
    option?: string,
    value?: string | number,
}

export const createDataset = async (dataset: string, fields: Fields[], ownnerId: number) => {
    const data = await prisma.views.create({
        data: {
            name: dataset,
            ownnerId: ownnerId,
        }
    });

    fields.forEach(async (field) => {
        await prisma.field.create({
            data: {
                name: field.field,
                filter: String(field.option)+String(field.value),
                viewsId: data.id,
                state: field.state,
            }
        })
    })
    return data.id;
}

export const getAllDatasets = async () => {
    return await prisma.views.findMany();
}

export const getDataset = async (id: number) => {
    const dataset = await prisma.views.findUnique({
        where: {
            id: id,
        }, include: {
            field: true
        }
    })

    // make request via http to youtube.com

    return await axios.get(`https://legonv2019.s20.online/api/${process.env.API_KEY}/sets/${dataset?.name}?${dataset?.field.map((field) => {
        return `${field.name}=${field.filter}`
    })}`).then((res) => {
        return res.data;
    })

}
