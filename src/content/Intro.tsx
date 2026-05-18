import PropTypes from "prop-types";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import Section from "../components/Section/Section";
import styles from "../components/Document/Document.module.scss";

const Intro = ({ setNewChapter }) => {
  return (
    <Section id="intro" setNewChapter={setNewChapter}>
      <ContentBlock className={styles.titlesBlock}>
        <h3>Introduction</h3>
        <img
          src="images/cavaliers.jpg"
          alt="Cavaliers April 6, 1968"
          className={styles.image}
        />
      </ContentBlock>
      <ContentBlock>
        <p>
          I “wrote” my first song when I was 16. I was the guitar player in a
          mid-sixties “Soul” band, having fun and getting paid for it. The band
          needed another slow dance number to play at my older brother’s Senior
          Prom. The prom was held in the high school’s gymnasium, but to gloss
          it up, and mitigate some annoying sound reflection from the cavernous
          space, the school draped huge and colorful parachutes from the
          rafters.
        </p>
        <p>
          So I worked out a simple four chord structure with minors and major
          7ths, one with lots of room for mournful sax and trumpet soloing, and
          an occasional bridge. Terry Fenner, one of our trumpeters, crooned
          improvised lyrics between instrumental passages, “how I love you, my
          little parachute.” The lyrics were eminently forgettable, as was the
          music, but it got me thinking—I could do this.
        </p>

        <p>
          It took me a while to get started and my output has always been
          sparse. When I discovered this passage from a book called{" "}
          <em>The Blues Line, compiled by Eric Sackheim</em>, I found a
          resonance that remained with me, and informs this compilation.
        </p>

        <blockquote>
          <p>
            This collection “…was motivated simply by the belief that a man who
            makes a song has accomplished something of consequence.”
          </p>
        </blockquote>

        <p>
          So it is with my songwriting endeavors. At their smallest, these
          consequences touch only me. That was my primary focus. To find
          something within; to express musically and lyrically what I felt, what
          played in my heart. As I have never released any music to the larger
          culture, my furthest reach would be to an audience at a coffee house,
          a club, or a distant Internet friend. But art is the thing one cannot
          help but do
          <a href="#1">
            <sup>1</sup>
          </a>
          , regardless of the reach or size of the consequences
        </p>

        <p>
          I have a close friend who is a very fine songwriter. She says
          songwriting is like working on a large and complicated jigsaw puzzle.
          It takes concentration, hours of work and an ability to see the larger
          picture long before it has become obvious. Then it’s finished, and no
          one cares. Her reach and her audience are several orders of magnitude
          larger than mine, and yet it is still the process of creation, the
          expression, the art of it that matters most to her.
        </p>

        <p>
          My original models came from the pop, rock, and especially blues songs
          of the sixties and seventies: Dylan, of course, Willie Dixon, Mick
          Jagger (underrated, when he’s not in parody-mode), Robert Hunter,
          Steely Dan’s Walter Becker and Donald Fagan, Tom Waits, and later,
          Joni Mitchell. While I knew I could never reach their exquisite level
          of expression, these writers provided a base from which I could learn
          while growing into my own style.
        </p>

        <p>
          And I did grow, moving from the decidedly sophomoric (well, I was a
          sophomore then…) to a style wherein I tried to use common language to
          express complex feelings and ideas simply, without beating a
          message-sending drum. Did I succeed? At times, yes, I think I did.
        </p>

        <p>
          My topics started simply as well – a travelogue, a protest song, a
          tortured folk tune. Personal struggle was my most frequent topic –
          failing relationships and the demons of compulsion and substance. I
          made occasional forays into character-based songs, but as one might
          guess, the character usually turned out to be within me.
        </p>

        <p>
          I’ve included audio for many of these songs, low fidelity recordings
          made at home so I could archive and document my output. Also mixed in
          are a few worthy song-poems that I never quite finished.
        </p>

        <p>
          As I come to a quieter, more contemplative time in my life, and see
          its sunset approaching in the distance, _Sad Celebrations and
          Laughable Laments_ is my way of summing up, reflecting on my journey,
          finding and making peace with an often troubled past - a thing I
          cannot help but do.
        </p>

        <p>
          So please take this journey with me. Let us celebrate and accept
          whatever comes.
        </p>

        <p>
          Pat McDonald
          <br />
          February 2021
        </p>

        <footer>
          <p id="1">
            <sup>1</sup> Paraphrasing Ellen Winner, The Harvard Gazette,
            2/2/2019
          </p>
        </footer>
      </ContentBlock>
    </Section>
  );
};

Intro.propTypes = {
  setNewChapter: PropTypes.func,
};

Intro.defaultProps = {
  setNewChapter: undefined,
};

export default Intro;
