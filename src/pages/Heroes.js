import React from 'react';
import axios from 'axios';

export class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes : []
    }
  }

  componentDidMount() {
    this.getHeroes();
    // axios.get('http://eastflag.co.kr:8080/api/heroes')
    //   .then(res => console.log(res));
  }

  async getHeroes() {
    const res = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    console.log(res);
    this.setState({heroes: res.data});
  }

  render() {
    return (
      <ul>
        {this.state.heroes.map(hero => (
          <li key={hero.hero_id} className="row align-items-center m-0">
            <div className="col-1 py-2">
              <img src={hero.photo} alt={hero.name} className="img-fluid rounded-circle" />
            </div>
            <span className="col">{hero.name}</span>
          </li>
          ))}
          </ul>
          );
  }
}
