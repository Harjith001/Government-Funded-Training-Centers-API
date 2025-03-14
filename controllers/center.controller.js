import Center from "../models/center.models.js";

// Add a new center
export const addCenter = async (req, res) => {
  try {
    const { 
      centerName, 
      centerCode, 
      address, 
      studentCapacity, 
      coursesOffered, 
      contactEmail, 
      contactPhone 
    } = req.body;

    // Create a new center document
    const newCenter = new Center({
      centerName,
      centerCode,
      address,
      studentCapacity,
      coursesOffered,
      contactEmail,
      contactPhone
    });

    // Save the center to MongoDB
    await newCenter.save();

    res.status(201).json({ message: 'Center added successfully', center: newCenter });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getAllCenters = async (req, res) => {
    try {
      const centers = await Center.find(); // Fetch all centers from MongoDB
      res.status(200).json(centers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
