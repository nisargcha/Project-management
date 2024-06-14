import { useEffect, useState } from 'react';
import { Country, State, City } from 'country-state-city';
import Nav from './components/Nav';
import Upload from './components/Upload';
import FormInput from './components/FormInput';
import Login from './components/Login';
import Btn from './components/Button';
import FormInputSel from './components/Selector';

function View() {
  const countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  return (
    <>
      <div className="view">
        <Login/>
        <Nav />
        <form>
          <Upload />
          <div className="inputField">
            <div className="inputRow">
              <FormInput placeholder="Full Name" />
              <FormInput placeholder="Email Address" />
            </div>
            <div className="inputRow">
              <FormInput placeholder="Phone Number" />
              <FormInputSel
                placeholder="Choose a country"
                data={countryData}
                selected={country}
                setSelected={setCountry}
              />
            </div>
            <div className="inputRow">
              <FormInputSel
                placeholder="State/Region"
                data={stateData}
                selected={state}
                setSelected={setState}
              />
              <FormInputSel
                placeholder="City"
                data={cityData}
                selected={city}
                setSelected={setCity}
              />
            </div>
            <div className="inputRow">
              <FormInput placeholder="Address" />
              <FormInput placeholder="Zip/Code" />
            </div>
            <div className="inputRow">
              <FormInput placeholder="Company" />
              <FormInput placeholder="Role" />
            </div>
            <div className="createButton">
              <Btn />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default View;
