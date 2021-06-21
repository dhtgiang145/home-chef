module.exports = function (app) {
  var chefs = require("../controllers/chefs.controller.js");

  app.post("/api/chef", chefs.createChef);
  app.get("/api/chef/:id", chefs.getChef);
  app.get("/api/chefs", chefs.chefs);
  app.put("/api/chef", chefs.updateChef);
  app.delete("/api/chef/:id", chefs.deleteChef);
};
