const mongoose = require("mongoose");
const slugify = require("slugify");

const vehicleLoadingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mainImage: {
      image: {
        type: [String], // Array of images
        required: true,
      },
      desktop: {
        type: String,
        required: true,
      },
      mobile: {
        type: String,
        required: true,
      },
    },

    slug: {
      type: String,
      unique: true,
      index: true,
    },

    iconTitle: {
      type: String,
      default: "",
    },
    iconName: {
      type: [String], //array of icons
      default: [], // Optional array with default
    },
    icon: {
      type: [String],
      default: [],
    },

    slideTitle: {
        type: [String],
        default: [],
      },
    slideDescriptions: {
        type: [String],
        default: [],
      },

    sectionTitle: {
        type: [String],
        default: [],
      },
    sectionDescriptions: {
        type: [String],
        default: [],
      },
    sectionImage: {
        type: [String], //array of images
        default: [],
      },

    additionalServices: {
        type: [String],
        default: [],
    },

    status: {
      type: String,
      enum: ["pending", "in-transit", "delivered"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// 🔁 Generate slug from overview.name before saving
vehicleLoadingSchema.pre("save", function (next) {
  if (this.isModified("name") || this.isNew) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("VehicleLoading", vehicleLoadingSchema);
