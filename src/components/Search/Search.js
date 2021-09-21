import './search.css';

export default function Search() {
  return (
    <div className="form">
        <select className="styled-select">
            <option></option>
            <option>one</option>
            <option>two</option>
            <option>three</option>
        </select>
        <input className="input" type="text" />
        <input className="input" type="text" />
    </div>
  );
}


