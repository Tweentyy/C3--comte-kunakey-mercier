import { describe, it } from "mocha";
import { expect } from "chai";
import CsvExport from "../src/csvExport.js";

describe("Tests sur le CSV Export", () => {
    it("Exporter un fichier CSV sans données", () => {
        const data = [];
        expect(() => new CsvExport(data)).to.throw("Aucune donnée à exporter");
    });

    it("Exporter un fichier CSV sans tableau", () => {
        const data = "test";
        expect(() => new CsvExport(data)).to.throw("Les données doivent être un tableau");
    });
});