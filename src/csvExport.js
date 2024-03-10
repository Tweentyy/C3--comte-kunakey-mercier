import { createObjectCsvWriter } from "csv-writer";

class CsvExport {
    constructor(data, path = "../teams.csv") { // data représente une liste de { name: string, captain: string, players: string[] }
        this.data = data;
        this.csvWriter = createObjectCsvWriter({
            path: path,
            header: [
                { id: "name", title: "Nom" },
                { id: "captain", title: "Capitaine" },
                { id: "players", title: "Joueurs" }
            ]
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