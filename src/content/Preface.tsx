import PropTypes from "prop-types";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import Section from "../components/Section/Section";
import styles from "../components/Document/Document.module.scss";

const Preface = ({ setNewChapter }) => {
  return (
    <Section id="preface" setNewChapter={setNewChapter}>
      <ContentBlock className={styles.titlesBlock}>
        <h3>Preface and Thank Yous</h3>
      </ContentBlock>
      <ContentBlock>
        <p>
          As I now read <em>Sad Celebrations and Laughable Laments</em>, 5 years
          after its ostensible completion, I laugh at my earnestness, my
          immaturity and my supreme skills of denial. I wrote it at the peak of
          COVID isolation and fear, and while that sense does not pervade the
          piece, it certainly colors it. Fortunately, the growth I experienced
          in this century allowed me to better understand my path and the
          internal travails I encountered and ultimately overcame.
        </p>
        <p>
          My initial idea was simply to consolidate the music I had written and
          recorded over the course of my life. I had cassettes and reel-to-reel
          tapes from 1/4” to 1”. I had three or four types of digital
          recordings, changing as technology did through the end of the 20th
          century. That idea morphed into including short written sections
          relating context for the song, and its place in my life. Oh, and
          pictures, of old friends, old homes and original lyric sheets. I threw
          in a few performance shots or two, and of course guitars (the true
          love of my life!).
        </p>
        <p>
          I always wanted my lyrics to be the focus, since they truly tell the
          story. But words, even great words, are bound with music, and become
          one with it. A good song should sing, not talk. I hope my growth
          toward that lofty ideal is evident, if not always prominent.
        </p>
        <p>
          I will beg your indulgence for the poor technical quality of some of
          the recordings and my amateurish performances. Even in those, as Mr.
          Costello had said, my aim is true.
        </p>
        <p>
          Thanks to the many folks who encouraged me and provided vital feedback
          along the way, especially JD Krieder, Alison Godburn, HL German.
          Friend support was also crucial and in that category Pete Villa, Bouch
          and Hilken were (and always are) essential supporters.
        </p>
        <p>
          I’d also like to thank Rodney Downs for his great photo of Henry, and
          Beth Braganca Bell for her superb drawings for the Deluca-Mac tunes.
        </p>
        <p>
          And you wouldn’t be seeing this at all without the persistence,
          project management and tech sense of Steve Benoit, along with his
          associate J Abraham. I thank them deeply for putting up with this
          near-Luddite and techno-resistor.
        </p>
      </ContentBlock>
    </Section>
  );
};

Preface.propTypes = {
  setNewChapter: PropTypes.func,
};

Preface.defaultProps = {
  setNewChapter: undefined,
};

export default Preface;
