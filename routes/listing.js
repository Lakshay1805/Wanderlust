const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingControllers = require("../controllers/listing.js");
const multer  = require('multer')
const {storage} =require("../cloudConfig.js");
const upload = multer({storage});

// INDEX// CREATE
router
.route("/")
.get( wrapAsync(listingControllers.index))
.post( isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingControllers.newListing));


// NEW FORM
router.get("/new",isLoggedIn,listingControllers.renderNewForm);

// EDIT FORM
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingControllers.renderEditForm));

//SHOW UPDATE DELETE
router
.route("/:id")
.get( wrapAsync(listingControllers.showListing))
.put(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingControllers.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingControllers.deleteListing));

module.exports = router;
