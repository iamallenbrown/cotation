
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const Cars = await prisma.cars.create({
    data:{
        Matricule : 'ZKHBK55',
        Marque : 'REXTON',
        Version : 'PHASE 2',
        EtatVehicule : 'NEUVE',
        PoidsVehicule : 10,
        PoidsColis : 5,
        Amorcage : 15,
        DateArriveeAuPort : new Date(21-03-2020),
    },
   })

  /*display data
  const allCars = await prisma.cars.findMany()
  console.dir(allCars)*/
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })