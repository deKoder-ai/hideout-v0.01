import css from './AboutEng.module.css';

const AboutEng = () => {
  return (
    <>
      <h2 className={css.aboutHead}>
        Where the city's best kept secret is waiting to be uncovered, and the good times
        are always on tap!
      </h2>
      <p className={css.para}>
        Step into the unassuming entrance, and discover a world of hidden delights. At
        Hideout Ari, we've repurposed an old [insert location] to create a sophisticated
        oasis in the heart of the city. Think exposed brick, reclaimed wood, and vintage
        accents – with a dash of modern flair.
      </p>
      <p className={css.para}>
        By day, our bar is a quiet haven for coffee and conversation. By night, we
        transform into a lively music venue, featuring local acts that'll keep you dancing
        till the lights come up. With a menu that's always evolving, we offer everything
        from craft cocktails and small plates to wine and beer – and always something new
        to try.
      </p>
      <p className={css.para}>
        From our globally-inspired small plates to our expertly crafted cocktails, every
        detail at Hideout Ari is designed to make you feel at home. Join us for dinner,
        drinks, or just a night out with friends – and experience the warm, welcoming vibe
        that's making us the city's best-kept secret.
      </p>
    </>
  );
};

export default AboutEng;
