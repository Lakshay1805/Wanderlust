const Listing = require("../models/listing.js");
module.exports.index =async (req, res) => {
  const allLists = await Listing.find({});
  res.render("listings/index.ejs", { allLists });
}
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
}
module.exports.showListing =async (req, res) => {
  let { id } = req.params;
  const detail = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
  if (!detail) {
    req.flash("error", "Listing does not exist!");
    return res.redirect("/listing");
  }

  res.render("listings/show.ejs", { detail });
}
module.exports.renderEditForm =async (req, res) => {
  let { id } = req.params;
  const detail = await Listing.findById(id);
  let originalImageUrl=detail.image.url;
  originalImageUrl.replace("/upload","/upload/h_300,w_250");
  res.render("listings/edit.ejs", { detail,originalImageUrl });
}
module.exports.newListing = async (req, res) => {
  const newListing = new Listing(req.body.listing);
  const url = req.file.path;
  const filename=req.file.filename;
  newListing.owner = req.user._id;
  newListing.image={url,filename}
  await newListing.save();
  req.flash("success", "Added successfully!");
  res.redirect("/listing");
}
module.exports.updateListing =  async (req, res) => {
  let { id } = req.params;
  let listing =await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if(typeof req.file !== "undefined"){
  const filename=req.file.filename;
  const url = req.file.path;
  listing.image={url,filename};
  await listing.save();
  }
  req.flash("success", "Successfully edited!");
  res.redirect(`/listing/${id}`);
}
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Deleted successfully!");
  res.redirect("/listing");
}