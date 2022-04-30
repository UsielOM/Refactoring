const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe("Tests para FizzbuzzService", () => {

    test("Requerimiento 1: Calcular los explorers en una mision", () => {
        const explorer1 = { name: "Explorer1", score: 5 }
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorerFizz).toBe();
    })



})