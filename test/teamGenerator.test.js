import { describe, it } from "mocha";
import { expect } from "chai";
import TeamGenerator from "../src/teamGenerator.js";

describe("Tests sur le Team Generator", () => {
    it("Générer 2 équipes de 3 personnes", () => {
        const teams = new TeamGenerator(["Léo", "Bob", "Pierre", "Edouard", "Eva", "Frank"]);
        teams.generateTeams();

        expect(teams.getTeams().length).to.equal(2);
        expect(teams.getTeams()[0].players.length).to.equal(3);
        expect(teams.getTeams()[1].players.length).to.equal(3);
        expect(teams.getTeams()[0].players).to.not.equal(teams.getTeams()[1].players);
    });

    it("Générer 3 équipes de 2 personnes", () => {
        const teams = new TeamGenerator(["Léo", "Bob", "Pierre", "Edouard", "Eva", "Frank"], 2);
        teams.generateTeams();

        expect(teams.getTeams().length).to.equal(3);
        expect(teams.getTeams()[0].players.length).to.equal(2);
        expect(teams.getTeams()[1].players.length).to.equal(2);
        expect(teams.getTeams()[0].players).to.not.equal(teams.getTeams()[1].players).to.not.equal(teams.getTeams()[2].players);
    });
