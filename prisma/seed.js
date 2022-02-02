const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
  console.log('start seeding 🌱');

  const picturesData = await prisma.pictures.createMany({
    data: [{
      title: ,
      link: ,
      details: ,
      shoot_date: ,
      categoriesId: ,

    },
    ]
  })

  const categoriesData = await prisma.categories.createMany({
    data: [{
      name: ,
    },
    ]

  })

  const materialsData = await prisma.materials.createMany({
    data: [{
      name: ,
      description: ,
      accessories: {}
    },
    ]

  })



  console.log({
    picturesData,
    categoriesData,
    materialsData,

  });

  console.log(`🎉 🎉  Seeding is finish! 🎉 🎉 `);

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
