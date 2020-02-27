module.exports = {
  Query: {
    getApplications: async (base, args, context) => {
      const { appStore } = context;
      const applications = await appStore.search(args);

      return applications.map(x => x.toJS());
    },
    getApplication: async (base, args, context) => {
      const { appStore } = context;

      const { found, application } = await appStore.get(args.id);

      if (!found) {
        return null;
      }

      return application.toJS();
    }
  }
};
