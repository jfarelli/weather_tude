describe('App / User Flow', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      `https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=b6e9ecfee4aba217e2be8eaff32c5160`,
      {
        fixture: '/genWeatherData.json',
      }
    ).as('genWeather');
  });

  it('should display the Header and Form components', () => {
    cy.visit('http://localhost:3000')
      .get('.App')
      .should('exist')
      .get('.header-container')
      .should('exist')
      .get('.title')
      .should('exist')
      .get('.form-container')
      .should('exist')
      .get('.weather-tude-title-text')
      .should('contain', 'WEATHER')
      .get('.weather-tude-description')
      .should('contain', 'The weather app that tells it like it is.')
      .get('.form-container')
      .get('input')
      .should('exist')
      .get('label')
      .should(
        'contain',
        'For (possibly) more accurate results, search by City Name, State Code, and Zip Code together.'
      );
  });

  it('should get general weather data for the city typed into the input', () => {
    cy.visit('http://localhost:3000')
      .get('input')
      .should('exist')
      .type(`Denver{enter}`)
      .wait('@genWeather')
      .then(({ response }) => {
        expect(response.body.name).to.equal('Denver');
        expect(response.body.coord.lat).to.equal(39.7392);
        expect(response.body.coord.lon).to.equal(-104.9847);
      })
      .get('.info-div-container')
      .should('exist')
      .get('.city-name-container')
      .should('exist')
      .get('.city-name')
      .should('contain', 'Denver')
      .get('.current-temp')
      .should('contain', 45)
      .get('.weather-description')
      .should('have.text', 'Overcast Clouds')
      .get('.high-and-low-temps')
      .should('have.text', 'High: 55°F | Low: 35°F')
      .get('.rude-text-and-display')
      .should('exist')
      .get('.display-box')
      .should('exist')
      .get('.feels-like')
      .should('have.text', "Others say it's:")
      .get('.data')
      .eq(0)
      .should('have.text', '44°F')
      .get('.humidity')
      .should('have.text', 'Air Wetness:')
      .get('.data')
      .eq(1)
      .should('have.text', '36% ')
      .get('.wind-speed')
      .should('have.text', "It's this windy:")
      .get('.data')
      .eq(2)
      .should('have.text', '3 mph NE ')
      .get('.rude-text-container')
      .should('exist')
      .get('.rude-text')
      .should('exist');
  });

  it('should get five day forecast data for the city typed into the input', () => {
    cy.visit('http://localhost:3000')
      .get('input')
      .should('exist')
      .type(`Denver{enter}`)
      .wait('@genWeather')
      .then(({ response }) => {
        expect(response.body.name).to.equal('Denver');
        expect(response.body.coord.lat).to.equal(39.7392);
        expect(response.body.coord.lon).to.equal(-104.9847);
      })
      .get('.five-day-div')
      .should('exist')
      .get('.five-day-forecast-title-text')
      .should('contain', '5-Day Forecast for')
      .get('.five-day-container')
      .children()
      .should('have.length', 5)
      .get('.day')
      .eq(0)
      .should('have.text', 'Friday')
      .get('.day-weather')
      .eq(0)
      .should('have.text', 'Clear Sky')
      .get('.day')
      .eq(1)
      .should('have.text', 'Saturday')
      .get('.day-weather')
      .eq(1)
      .should('have.text', 'Clear Sky')
      .get('.day')
      .eq(2)
      .should('have.text', 'Sunday')
      .get('.day-weather')
      .eq(2)
      .should('have.text', 'Broken Clouds')
      .get('.day')
      .eq(3)
      .should('have.text', 'Monday')
      .get('.day-weather')
      .eq(3)
      .should('have.text', 'Scattered Clouds')
      .get('.day')
      .eq(4)
      .should('have.text', 'Tuesday')
      .get('.day-weather')
      .eq(4)
      .should('have.text', 'Clear Sky');
  });
});
