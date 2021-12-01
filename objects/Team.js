export default class GameTeam {
    constructor(name, logoLocation)
    {
        this.name = name;
        this.logoLocation = logoLocation;
    }

    getTeamName() {
        return this.name;
    }

    getTeamLogoLocation() {
        return this.logoLocation
    }
}