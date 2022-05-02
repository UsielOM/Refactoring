const ExplorerService = require('./../services/ExplorerService')
const FizzbuzzService = require('./../services/FizzbuzzService.js')
const Reader = require("./../utils/Reader")

class ExplorerController {

    static getExplorersByMission(mission) {

        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        return console.log(ExplorerService.filterByMission(explorers, mission));


    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        return console.log(ExplorerService.getExplorersUsernamesByMission(explorers, mission));

    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        return console.log(ExplorerService.getAmountOfExplorersByMission(explorers, mission));
    }


}

module.exports = ExplorerController