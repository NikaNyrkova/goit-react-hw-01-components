import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({ stats, title }) => (
    <section className={styles.statistics}>     
        {title && <h2 className={styles.title}>Upload stats</h2>}
        <ul className={styles.stats_list}>
            {stats.map(({id, label, percentage}) => (
                <li className={styles.item} key={id}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>
            ))}           
        </ul>
    </section>
);

export default Statistics;

Statistics.defaultProps = {
    title: ''
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}