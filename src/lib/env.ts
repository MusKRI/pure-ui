export function getAppUrl() {
  if (process.env.NODE_ENV === "production") {
    return "https://pure.kam-ui.com";
  }

  return "http://localhost:3001";
}
