import { describe, it } from "mocha";
import { expect } from "chai";
import TournamentGenerator from "../src/tournamentGenerator.js";

describe("Tests sur le Tournament Generator", () => {
    let tournament;

    beforeEach(() => {
        const teams = [
            { name: "Team 1", players: ["Léo", "Bob", "Pierre"] },
            { name: "Team 2", players: ["Edouard", "Eva", "Frank"] },
            { name: "Team 3", players: ["Rein", "Brigitte", "Lucio"] },
            { name: "Team 4", players: ["Winston", "Tracer", "Soldier 76"] },
            { name: "Team 5", players: ["Zenyatta", "Genji", "Hanzo"] },
            { name: "Team 6", players: ["D.Va", "McCree", "Junkrat"] },
            { name: "Team 7", players: ["Ana", "Bastion", "Mei"] },
            { name: "Team 8", players: ["Chien", "Chat", "Lapin"] }
        ];
        tournament = new TournamentGenerator(teams);
    });


    it("Générer 2 poules", () => {
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