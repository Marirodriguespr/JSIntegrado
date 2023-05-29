const prisma = require("./prisma");

const findUserByEmail = (email) => {
  return prisma.users.findUnique({
    where: {
      email,
    },
    select:{
      id: true,
      name:true,
      email:true,
      password:false,
      BoughtMany: {
        select: {
          quantity:true,
          product: {
            select:{
              name:true,
              price:true
            },
          },
        },
      },
    }
  });
};

const findUserById = (id) => {
  return prisma.users.findUnique({
    where: {
      id,
    },
  });
};

const saveUser = (user) => {
  return prisma.users.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    }
  });
};

module.exports = {
  saveUser,
  findUserByEmail,
  findUserById,
};
