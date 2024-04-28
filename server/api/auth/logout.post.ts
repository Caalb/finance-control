const userLogout = async () => {
  return {};
};

export default defineEventHandler(async (event) => {
  await userLogout();
  return {};
});
