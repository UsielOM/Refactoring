const ExplorerService = require("../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {

    test("Requerimiento 1: Calcular los explorers en una mision", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });



});