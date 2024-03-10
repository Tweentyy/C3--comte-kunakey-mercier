import { describe, it } from "mocha";
import { expect } from "chai";
import TournamentGenerator from "../src/tournamentGenerator.js";
import TeamGenerator from "../src/teamGenerator.js";

describe("Tests sur le Tournament Generator", () => {
    let tournament;

    beforeEach(() => {
        const players = ["Leo", "Bob", "Pierre", "Edouard", "Eva", "Frank", "Arthur", "Rein", "Brigitte", "Lucio", "Winston", "Tracer", "Soldier 76", "Zenyatta", "Genji", "Hanzo", "D.Va", "McCree", "Junkrat", "Ana", "Bastion", "Mei", "Chien", "Chat", "Lapin"];
        const teams = new TeamGenerator(players, 3);
        teams.generateTeams();

        tournament = new TournamentGenerator(teams.getTeams());
    });


    it("Générer 2 poules", () => {
        console.log(tournament.teams);
        tournament.generatePoules();

        expect(tournament.poules.length).to.equal(2);
        expect(tournament.poules[0].length).to.equal(4);
        expect(tournament.poules[1].length).to.equal(4);
    });

    it("Simuler les matchs", () => {
        tournament.generatePoules();
        tournament.simulatePoulesMatches();

        expect(tournament.poules.length).to.equal(2);
        expect(tournament.poules[0].length).to.equal(4);
        expect(tournament.poules[1].length).to.equal(4);
        expect(tournament.finalStages[0].length).to.equal(4);
    });

    it("Générer les phases finales", () => {
        tournament.generatePoules();
        tournament.simulatePoulesMatches();
        tournament.generateFinalStages();

        expect(tournament.finalStages.length).to.equal(3);
        expect(tournament.finalStages[0].length).to.equal(4);
        expect(tournament.finalStages[1].length).to.equal(2);
        expect(tournament.finalStages[2].length).to.equal(1);
    });

    it("Générer le tournoi", () => {
        tournament.generateTournament();

        expect(tournament.poules.length).to.equal(2);
        expect(tournament.poules[0].length).to.equal(4);
        expect(tournament.poules[1].length).to.equal(4);

        expect(tournament.finalStages.length).to.equal(3);
        expect(tournament.finalStages[0].length).to.equal(4);
        expect(tournament.finalStages[1].length).to.equal(2);
        expect(tournament.finalStages[2].length).to.equal(1);
    });
});