export const config = {
  db_uri:
    process.env.DB_URI ||
    "mongodb://localhost:27017/openlms",
    secret:"THISISAVALIDSECRET"
};
