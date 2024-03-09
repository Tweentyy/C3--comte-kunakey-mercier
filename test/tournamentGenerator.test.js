import { describe, it } from "mocha";
import { expect } from "chai";
import TournamentGenerator from "../src/tournamentGenerator.js";

describe("Tests sur le Tournament Generator", () => {
    it("Générer 2 poules", () => {
        const tournament = new TournamentGenerator([
            { name: "Team 1", players: ["Léo", "Bob", "Pierre"] },
            { name: "Team 2", players: ["Edouard", "Eva", "Frank"] },
            { name: "Team 3", players: ["Rein", "Brigitte", "Lucio"] },
            { name: "Team 4", players: ["Winston", "Tracer", "Soldier 76"] },
            { name: "Team 5", players: ["Zenyatta", "Genji", "Hanzo"] },
            { name: "Team 6", players: ["D.Va", "McCree", "Junkrat"] },
            { name: "Team 7", players: ["Ana", "Bastion", "Mei"] },
            { name: "Team 8", players: ["Chien", "Chat", "Lapin"] }
        ]);
        tournament.generatePoules();

        expect(tournament.poules.length).to.equal(2);
        expect(tournament.poules[0].length).to.equal(4);
        expect(tournament.poules[1].length).to.equal(4);
    });
});