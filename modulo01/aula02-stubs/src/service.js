class Service {
  async makeRequest(url) {
    return await (await fetch(url)).json();
  }

  async getPlanet(url) {
    const data = await this.makeRequest(url);

    return {
      name: data.name,
      surfaceWater: data.surface_water,
      appearedIn: data.films.length,
    };
  }
}

module.exports = Service;
