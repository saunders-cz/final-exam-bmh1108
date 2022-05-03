import { Category, Pastry } from "./models.js";
import { pastries } from "../data/pastries.js";

export const resolvers = {
  Query: {
    pastries: async (parent, args) => {
      return await Pastry.findAll({
        include: Category,
        order: [["name", "ASC"]],
      });
    },
    pastry: async (parents, args) => {
      return await Pastry.findByPk(args.id, {
        include: Category,
      });
    },
    categories: async () => {
      return await Category.findAll({ include: Pastry });
    },
  },
  Mutation: {
    addPastry: async (parent, args) => {
      const { input } = args;
      await Pastry.create(input);
      return { ok: true };
    },
    updatePastry: async (parent, { id, input }) => {
      await Pastry.update(input, {
        where: { id },
      });
      return { ok: true };
    },
    deletePastry: async (parent, { id }) => {
      await Pastry.destroy({ where: { id } });
      return { ok: true };
    },
  },
};
