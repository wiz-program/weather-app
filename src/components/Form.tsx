type FormPropsType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLElement>) => void;
}

const Form = ({ city, setCity, getWeather }: FormPropsType) => {
  return (
    <form onSubmit={getWeather} className="weather-form">
      <div className="input-group">
        <input 
          type="text" 
          name="city" 
          placeholder="Search city" 
          onChange={e => setCity(e.target.value)} 
          value={city}
        />
      </div>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;