import './search.css';

export default function Search() {
  return (
    <div className="form">
        <select value={"coconut"} className="styled-select">
            <option value="lime">lime</option>
            <option value="coconut">coconut</option>
            <option value="mango">mango</option>
        </select>
        <input className="input" type="text" />
        <input className="input" type="text" />
    </div>
  );
}


