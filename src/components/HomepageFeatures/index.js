import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/mystra_logo_white.svg').default,
    description: (
      <>        
        <a href="https://docs.mystra.io/docs/intro">Detailed information about how Mystra and its products work.</a>
      </>
    ),
  },
  {
    title: 'Twitter',
    Svg: require('@site/static/img/twitter_logo.svg').default,
    description: (
      <>
        <a href="https://twitter.com/mystra_io">Keep up to date with the latest news.</a>
      </>
    ),
  },
  {
    title: 'Discord',
    Svg: require('@site/static/img/discord_logo.svg').default,
    description: (
      <>
        <a href="https://discord.gg/sZQVdRCyqx">Join the community and be closer to the team. Ask anything and share information.</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
