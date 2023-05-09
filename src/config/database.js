module.exports = {
  dialect: "postgres",
  host: process.env.PGHOST || "localhost",
  username: process.env.PGUSER || "postgres",
  password:  process.env.PGPASSWORD || "postgres",
  database:  process.env.PGDATABASE || "codeburger",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
