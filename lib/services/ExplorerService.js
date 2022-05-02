class ExplorerService {

    static filterByMission(explorers, mission) {

        const explorerFilterByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerFilterByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {

        const explorersAmountOfExplorersByMission = explorers.filter((explorer) => explorer.mission === mission);

        return explorersAmountOfExplorersByMission.length;

    }

    static getExplorersUsernamesByMission(explorers, mission) {

        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.name);

        return usernamesInNode;
    }

    static getExplorersStackSkill(explorers, stack) {

        const explorerSatack = explorers.filter((explorer) => {
            return explorer.stacks.includes(stack)
        });

        return explorerSatack;
    }


}

module.exports = ExplorerService;