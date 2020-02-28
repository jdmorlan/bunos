module.exports = {
  Mutation: {
    addApplication: async (base, args, context) => {
      const { appStore } = context;
      const { application } = await appStore.add(args.application);

      return application.toJS();
    }
  }
};
