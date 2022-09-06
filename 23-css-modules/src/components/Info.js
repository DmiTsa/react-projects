import './Info.css';
import styles from './Info.module.css';

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from info</h1>
      <button className="my-button">Click me</button>
    </div>
  );
}
export default Info;
