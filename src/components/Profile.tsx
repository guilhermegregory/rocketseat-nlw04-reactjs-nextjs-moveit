import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/62723388?s=460&u=e4300cecb4edc4214f1a6dd74afad87e5962553e&v=4" alt="Guilherme Gregory" />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
          </p>
      </div>
    </div>
  );
};