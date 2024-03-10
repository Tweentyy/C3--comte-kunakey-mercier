import { describe, it } from "mocha";
import { expect } from "chai";
import CsvExport from "../src/csvExport.js";
import fs from "fs";

describe("Tests sur le CSV Export", () => {
    it("Exporter un fichier CSV sans données", () => {
        const data = [];
        expect(() => new CsvExport(data)).to.throw("Aucune donnée à exporter");
    });

    it("Exporter un fichier CSV sans tableau", () => {
        const data = "test";
        expect(() => new CsvExport(data)).to.throw("Les données doivent être un tableau");
    });

    it("Exporter un fichier CSV avec des données invalides", () => {
        const data = [{ name: "Equipe 1", captain: "Leo", players: ["Léo", "Edouard", "Arthur"] }, { name: "Equipe 2", captain: "Edouard" }];
        expect(() => new CsvExport(data)).to.throw("Les données doivent être des objets avec les clés : name, captain et players");
    });

    it("Exporter un fichier CSV avec des données valides", async () => {
        const data = [
            { name: "Equipe 1", captain: "Leo", players: ["Léo", "Edouard", "Arthur"] },
            { name: "Equipe 2", captain: "Edouard", players: ["Edouard", "Eva", "Frank"] }
        ];

        const path = "./test.csv"
        const csvExport = new CsvExport(data, path);
        await csvExport.export();

        expect(fs.existsSync(path)).to.be.true;
    });

    it("Exporter un fichier CSV avec des données valides et un chemin invalide", () => {
        const data = [
            { name: "Equipe 1", captain: "Leo", players: ["Léo", "Edouard", "Arthur"] },
            { name: "Equipe 2", captain: "Edouard", players: ["Edouard", "Eva", "Frank"] }
        ];

        const path = 0;
        expect(() => new CsvExport(data, path)).to.throw("Le chemin du fichier doit être une chaîne de caractères");
    });
});