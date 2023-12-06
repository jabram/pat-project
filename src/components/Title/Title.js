import ContentBlock from "../ContentBlock/ContentBlock";
import Section from "../Section/Section";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <Section className={styles.verticalFlex}>
      <ContentBlock className={styles.titleContentBlock}>
        <h1 className={styles.h1}>
          Sad Celebrations{" "}
          <span className={styles.sub}>and Laughable Laments:</span>
        </h1>
        <h2 className={styles.h2}>A Lyrical Autobiography</h2>
        <p className={styles.patHeader}>Pat McDonald</p>
      </ContentBlock>
    </Section>
  );
};

export default Title;
