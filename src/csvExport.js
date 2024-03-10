import { createObjectCsvWriter } from "csv-writer";

class CsvExport {
    constructor(data, path = "../teams.csv") { // data représente une liste de { name: string, captain: string, players: string[] }
        if (data.length === 0) throw new Error("Aucune donnée à exporter");
        if (typeof path !== "string") throw new Error("Le chemin du fichier doit être une chaîne de caractères");
        if (!Array.isArray(data)) throw new Error("Les données doivent être un tableau");
        if (!data.every(team => team.name && team.captain && team.players)) throw new Error("Les données doivent être des objets avec les clés : name, captain et players");

        this.data = data;
        this.csvWriter = createObjectCsvWriter({
            path: path,
            header: [
                { id: "name", title: "Nom" },
                { id: "captain", title: "Capitaine" },
                { id: "players", title: "Joueurs" }
            ],
            fieldDelimiter: ";"
        });
    }

    async export() {
        const formattedData = this.data.map(team => {
            return {
                name: team.name,
                captain: team.captain,
                players: team.players.join(", ")
            }
        });

        await this.csvWriter.writeRecords(formattedData);
    }
}

export default CsvExport;