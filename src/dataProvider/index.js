const FakeData = [];
export default type => {
  switch (type) {
    case "fakeapi":
      return FakeData;
    case "restapi":
      return import('./rest').then(provider => provider.default);
    default:
      return FakeData;
  }
};
