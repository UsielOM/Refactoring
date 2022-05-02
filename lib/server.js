const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});


app.get('/v1/explorers', (req, res) => {
    console.log(`GET EXPLORERS V1 API ${new Date()}`)

    const explorer1 = { id: 1, name: "Explorer1" }
    const explorer2 = { id: 2, name: "Explorer2" }
    const explorers = { explorer1, explorer2 }
        //HTTP CODE STATUS:200 EXITOSO 
    res.status(200).json(explorers)
})


app.get("/", (request, response) => {
    response.json({ message: "FizzBuzz Api welcome!" });
});


app.get('/v1/explorers/:mission', (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    // console.log(explorersInMission)
    response.json(explorersInMission);
});

app.get("/v1/fizzbuzz/:num", (request, response) => {
    const num = parseInt(request.params.num);
    const explorersInNum = ExplorerController.applyFizzbuzz(num);

    response.json({ score: num, trick: explorersInNum });

    // console.log(explorersInNum);
});