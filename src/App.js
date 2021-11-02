import { useState } from 'react';

//https://www.weatherapi.com/api-explorer.aspx#astronomy origem da API

function App() 
{
  const REACT_APP_KEY="e751ea9cf5bc4fcbbb3225428211810";
  const REACT_APP_BASE_URL="http://api.weatherapi.com/v1/";
  
  const state_posible_to_system =
  {
    STANDY_BY : 1,
    LOADING : 2,
    DELIVERED : 3,
    ERRO : 4
  };

  const names_button_Pesquisar =
  {
    STANDY_BY : "Pesquisar",
    LOADING   : "Pesquisando ...",
  };

  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [current_state_system, set_Current_State] = useState(state_posible_to_system.STANDY_BY);

  const call_get_city_info = () => 
  {
    set_Current_State(state_posible_to_system.LOADING);
    handleSearch();
  }

  const handleSearch = () => {

    fetch(
      `${REACT_APP_BASE_URL}current.json?key=${REACT_APP_KEY}&q=${city}&lang=pt`
    )
      .then((res) => {
        if (res.status === 200) 
        {
          setCity("");
          set_Current_State(state_posible_to_system.DELIVERED);
          return res.json();
        }
        else if (res.status === 400)
        {
          set_Current_State(state_posible_to_system.ERRO);
          alert("Cidade não encontrada");
        }
        else if (res.status === 401)
        {
          set_Current_State(state_posible_to_system.ERRO);
          alert("Acesso a API desativada");
        }
      })
      .then((data) => {
        //console.log(data);
        setWeatherForecast(data);
      });
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a className="navbar-brand" href="#search">
            Tempo na sua cidade
          </a>
        </nav>
      </div>

      <main className="container" id="search">
        <div className="jumbotron">
          <h1>Verique agora a previsão do tempo na sua cidade!</h1>
          <p className="lead">
            Digite da sua cidade no campo abaixo o nome da sua cidade em seguida
            clique em pesquisar.
          </p>
          <div className="row mb-4">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <button className="btn btn-lg btn-primary" onClick={call_get_city_info}>
            {
              current_state_system === state_posible_to_system.LOADING ? (
                  names_button_Pesquisar.LOADING
              ) : (
                names_button_Pesquisar.STANDY_BY
              )
            }
          </button>

          {weatherForecast ? (
            <>
              <div className="mt-4 d-flex align-items-center">
                <div className="col-sm-1">
                  <img
                    src={`${weatherForecast.current.condition.icon}`}
                    alt="Weather Icon"
                  />
                </div>
                <div>
                  <h2>
                      Clima em {weatherForecast.location.name} - {weatherForecast.location.region} - {weatherForecast.location.country}
                  </h2>
                  <h5>
                    Latitude: {weatherForecast.location.lat}, Longitude: {weatherForecast.location.lon}
                  </h5>
                  <h3>
                    Hoje o dia está: {weatherForecast.current.condition.text}
                  </h3>
                  <p className="lead">
                    Temperatura: {weatherForecast.current.temp_c} / {weatherForecast.current.temp_f} &#8451;
                  </p>
                  <p>
                    Última atualização em {weatherForecast.current.last_updated}
                  </p>
                  <p>
                    Umidade relativa: {weatherForecast.current.humidity}%
                  </p>
                  <p>
                    Velocidade do vento: {weatherForecast.current.wind_kph} km/h
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div>
          <footer>
            Desenvolvido por Lucas Dallamico
          </footer>
        </div>

      </main>
    </>
  );
}

export default App;
