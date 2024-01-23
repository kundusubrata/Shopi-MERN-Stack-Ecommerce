import mongoose from "mongoose";
import Product from "../models/productsModels.js";
import data from "./data.js";

const seedProducts = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Shopi");

        await Product.deleteMany();
        console.log("Products are deleted");

        await Product.insertMany(data);
        console.log("Products are added");

        process.exit();

    } catch (error) {
        console.log(error);
        process.exit();
    }
}

seedProducts();