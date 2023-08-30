const express = require("express");
const app = express();

app.get("/api/estudiantes", (req, res) => {
    try{
        res.status(200).json({estudiante: "estudiante"})
    }
    catch {
        res.status(500).json({message: error.message})
    }
    res.send("POST request to the homepage");
});

app.get("/api/estudiantes/:id", (req, res) => {
    try{
        const {id} = req.params;
        res.status(200).json({estudiante: "estudiante"})
    }
    catch {
        res.status(500).json({message: error.message})
    }
    res.send("POST request to the homepage");
});

app.post("/api/estudiantes", (req, res) => {
    try{
        const {id} = req.params;
        res.status(200).json({estudiante: "estudiante"})
    }
    catch {
        res.status(500).json({message: error.message})
    }
    res.send("POST request to the homepage");
});

app.put("/api/estudiantes/:id", (req, res) => {
    try{
        const {id} = req.params;
        res.status(200).json({estudiante: "estudiante"})
    }
    catch {
        res.status(500).json({message: error.message})
    }
    res.send("POST request to the homepage");
});

app.delete("/api/estudiantes/:id", (req, res) => {
    try{
        const {id} = req.params;
        res.status(200).json({estudiante: "estudiante"})
    }
    catch {
        res.status(500).json({message: error.message})
    }
    res.send("POST request to the homepage");
});
  