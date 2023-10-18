import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

const createTvshow= async ()=>{
    const Tvshowcreated= await prisma.tVShowModel.create({
        data:{
            id:2,
            name: 'Jorge',
            director:'Luis',
            investment: 10000,
            cast: 'SI',
             seasons:{
                create:{
                  id:1,
                  description:'Comienzo',
                  episodesNumber:34,
                  
                }
            }
        }
    });
    console.log(Tvshowcreated)

}
(async ()=>{
    await createTvshow()
    console.log('Database created')
    prisma.$disconnect()
}) ()



