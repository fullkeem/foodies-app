import classes from "./page.module.css";
import ShareForm from "./shareForm";

export default function ShareMeal() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <ShareForm />
      </main>
    </>
  );
}
