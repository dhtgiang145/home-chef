const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Chef = mongoose.model("Chef");

exports.createChef = (req, res) => {
  const chef = new Chef({
    chefid: req.body.chefid,
    chefname: req.body.chefname,
    chefspecialty: req.body.chefspecialty,
    chefratings: req.body.chefratings,
    chefmenus: [],
    chefreviews: [],
  });
  chef.save
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Fail!",
        error: err.message,
      });
    });
};

exports.getChef = (req, res) => {
  Chef.findById(req.params.id)
    .select("-__v")
    .then((chef) => {
      res.status(200).json(chef);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Chef not found with id " + req.params.id,
          error: err,
        });
      }
      return res.status(500).send({
        message: "Error retrieving Chef with id " + req.params.id,
        error: err,
      });
    });
};

exports.chefs = (req, res) => {
  Chef.find()
    .select("-__v")
    .then((chefInfos) => {
      res.status(200).json(chefInfos);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};

exports.deleteChef = (req, res) => {
  Chef.findByIdAndRemove(req.params.id)
    .select("-__v-_id")
    .then((chef) => {
      if (!chef) {
        res.status(404).json({
          message: "No chef found with id = " + req.params.id,
          error: "404",
        });
      }
      res.status(200).json({});
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error -> Can't delete chef with id = " + req.params.id,
        error: err.message,
      });
    });
};

exports.updateChef = (req, res) => {
  Chef.findByIdAndUpdate(
    req.body.id,
    {
      chefid: req.body.chefid,
      chefname: req.body.chefname,
      chefspecialty: req.body.chefspecialty,
      chefratings: req.body.chefratings,
      chefmenus: [
        {
          id: req.body.chefmenus.id,
          image: req.body.chefmenus.image,
          desc: req.body.chefmenus.desc,
          price: req.body.chefmenus.price,
          ratings: req.body.chefmenus.ratings,
          value: 0,
        },
      ],
    },
    { new: false }
  )
    .select("-__v")
    .then((chef) => {
      if (!chef) {
        return res.status(404).json({
          message: "No chef found with id = " + req.params.id,
          error: "404",
        });
      }
      res.status(200).json(inventory);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error -> Can't update chef with id = " + req.params.id,
        error: err.message,
      });
    });
};
