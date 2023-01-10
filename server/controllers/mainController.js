// GET HOMEPAGE

exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJS Notes",
    description: " Free NodeJS Notes APP",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

// GET ABOUT

exports.about = async (req, res) => {
  const locals = {
    title: "About - NodeJS Notes",
    description: " Free NodeJS Notes APP",
  };
  res.render("about", {
    locals,
  });
};
