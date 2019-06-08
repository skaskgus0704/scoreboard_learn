import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

import styles from '../pages/scoreboard/Scoreboard.module.css';
import classNames from 'classnames';

const Counter = ({changeScore, score, id}) => (
  <div className={styles.counter}>
    <button className={classNames(styles["counter-action"], styles.decrement)}
            onClick={() => changeScore(id, -1)}> -
    </button>
    <span className={styles["counter-score"]}>{score}</span>
    <button className={classNames(styles["counter-action"], styles.increment)}
            onClick={() => changeScore(id, 1)}> +
    </button>
  </div>
);

Counter.propTypes = {
  changeScore: PropTypes.func,
  score: PropTypes.number,
  id: PropTypes.number
}

const mapActionToProps = (dispatch) => ({
  changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

export default connect(null, mapActionToProps)(Counter)