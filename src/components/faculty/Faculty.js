import React from 'react'
import styled from 'styled-components'
import SallyImg from '../../images/faculty/sally.jpg'
import AshleyImg from '../../images/faculty/ashley.jpg'
import VeronicaImg from '../../images/faculty/veronica.jpg'
import NickyImg from '../../images/faculty/nicky.jpg'
import AmandaImg from '../../images/faculty/amanda.jpg'
import SarahImg from '../../images/faculty/sarah.jpg'
import MeganImg from '../../images/faculty/megan.jpg'
import EdwinImg from '../../images/faculty/edwin.jpg'
import KeithImg from '../../images/faculty/keith.jpg'
import RoderickImg from '../../images/faculty/roderick.jpg'
import LeanneImg from '../../images/faculty/leanne.jpg'
import JenniferImg from '../../images/faculty/jennifer.jpg'
import ChristinaImg from '../../images/faculty/christina.jpg'
import './Faculty.css'

/* eslint-disable max-len */
const SallyImage = () => <img src={SallyImg} alt="Sally Hart" title="Sally Hart" />
const VeronicaImage = () => <img src={VeronicaImg} alt="Veronica Piller" title="Sally Hart" />
const AshleyImage = () => <img src={AshleyImg} alt="Ashley Geisler" title="Ashley Geisler" />
const NickyImage = () => <img src={NickyImg} alt="Nicky Coelho" title="Nicky Coelho" />
const AmandaImage = () => <img src={AmandaImg} alt="Amanda Jo Parks" title="Amanda Jo Parks" />
const LeanneImage = () => <img src={LeanneImg} alt="Leanne Higgins" title="Leanne Higgins" />
const JenniferImage = () => <img src={JenniferImg} alt="Jennifer Gage" title="Jennifer Gage" />
const SarahImage = () => <img src={SarahImg} alt="Sarah Gillespie" title="Sarah Gillespie" />
const MeganImage = () => <img src={MeganImg} alt="Megan Hillary" title="Megan Hillary" />
const EdwinImage = () => <img src={EdwinImg} alt="Edwin Roa" title="Edwin Roa" />
const KeithImage = () => <img src={KeithImg} alt="Keith Lee" title="Keith Lee" />
const RoderickImage = () => <img src={RoderickImg} alt="Roderick Davis" title="Roderick Davis" />
const ChristinaImage = () => <img src={ChristinaImg} alt="Christina Rukavina" title="Christina Rukavina" />

const Instructor = styled.div`
  img {
    float: left;
    padding: 0 15px 10px 0;
    height: 190px;
    margin-top: 4px;
  }
  p {
    text-align: left;
    padding: 0;
    margin: 0;
  }
`

/* eslint-disable max-len */
const Faculty = () => (
  <div className="faculty-container">
    <Instructor>
      <SallyImage />
      <span className="bold instructor">Sally Hart | Owner, Director</span>
      <p>
        A former dancer with the Joffrey Ballet under the direction of Robert Joffrey. She performed at the grand
        opening of the Kennedy Center, with Kevin McKenzie, and in Joffrey Ballet classics Petrouchka, Trinity, Viva
        Vivaldi, and The Seasons.
      </p>
      <p>
        After her dance career, Mrs. Hart went on to become a professional make-up artist and worked on movie sets,
        runway shows, and for modeling agencies. Mrs. Hart began teaching ballet locally in 1992. She has produced many
        local dance productions. Sally has trained and mentored numerous students who have become professional dancers.
        Her unique curriculum includes a blend of English, Italian, and Russian technique.
      </p>
      <p>
        <span className="italic small quote">
          “If you are looking for a dance instructor for your fledgling child or aspiring professional, Mrs. Sally Hart
          is the teacher that you want to train with!”- Linda M. Kuchera-Gage, formerly with “American Ballet Theatre”
        </span>
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <VeronicaImage />
        <span className="bold instructor">Veronica Piller | Artistic Director, Choreographer, Instructor</span>
        Mrs. Piller is the founder and director of concorDance contemporary, a professional contemporary dance company.
        She formerly danced with the Charleston Ballet Theatre, San Diego Ballet, The Garage Contemporary Ballet,
        Charlottesville Ballet, and Keith Lee Dances.
      </p>
      <p>
        Veronica began her training with her mother, Sally Hart. She continued her dance education at the Virginia
        School of the Arts and the Joffrey Ballet School and was blessed to have been the recipient of many
        scholarships.
      </p>
      <p>
        Veronica has performed leading roles in{' '}
        <span className="italic">Cinderella, Paquita, Les Corsaire, Les Sylphedes, and Swan Lake</span>, and
        choreographers have created roles for her. Additional memorable performances include{' '}
        <span className="italic">
          The King and I with Ash Lawn Opera, with the Duke Ellington Orchestra, Maria in West Side Story, and Keith
          Lee’s Mama Rose.
        </span>
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <NickyImage />
        <span className="bold instructor">Nicky Coelho | Executive Director, Production Manager</span>
        Mrs. Coelho began dancing with her mother Sally Hart. She has also studied with Virginia School of the Arts,
        Maryland Youth Ballet, and on scholarship at the Joffrey Ballet. Nicky has danced with Charleston Ballet
        Theater, Robert Ivey Ballet, Mikerline Haitian Folkloric Dance Company, and James Sewell Ballet where she was
        also the Company Manager for two years. She has enjoyed working with choreographers Sharon Eyal, Joanna Kotze,
        Belinda McGuire, Norbert De La Cruz III, Carl Flink, and Myron Johnson to name a few.
      </p>
      <p>
        Mrs. Coelho was on faculty at the Reif Center Summer Intensive in Grand Rapids, MN for five years and directed
        the Intensive in Minneapolis in 2015.
      </p>
      <p>
        Nicky has been the production and stage manager for ABT since 2005 and has choreographed several full-length
        ballets and original works in the repertoire.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <AshleyImage />
        <span className="bold instructor">Ashley Geisler | Director of Operations, Choreographer, Instructor</span>
        Mrs. Geisler studied with the Old Dominion Ballet Company in Norfolk, Virginia, under the husband and wife team
        of Istvan and Nelli Ament.She spent her summers training with Nina Sakhnovskaya of the Vaganova Academy.
      </p>
      <p>
        During her tenure at ODU Ballet, Ashley performed the roles of Marzipan, Chinese, and Russian in The Nutcracker,
        and the lead roles in performances of Snow White and The Fairy Doll. After completing her undergraduate and
        graduate work in Russian Language and Literature at the University of Virginia, Mrs. Geisler returned to ballet
        at Albemarle Ballet Theatre. She has been teaching and choreographing at ABT since 2006 and has performed with
        concorDance contemporary.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <JenniferImage />
        <span className="bold instructor">Jennifer Gage | Instructor</span>
        Jennifer recently moved to the area from Norfolk, VA, but it’s Chicago she called home where she taught for over
        20 years at many schools, including her own studio, NorthSide Dance Theater. Most of her classical foundation is
        from her training with Ballet Tennessee directors Anna and Barry Van-Cura in Cecchetti, Vaganova, and French
        styles. Her Urban Contemporary Jazz formula stems from her later training with Joel Hall Dancers where she was a
        company member, teacher, rehearsal assistant, and ballet mistress. Similar opportunities with Ballet Theater
        North and Ballet Entre Nous brought out Jennifer’s passion for shaping her own company and productions and in
        2002 created her own not-for-profit company, Alliance Dance Company. Over the 13 years they were active,
        Alliance grew into producing a 3 show season with their own festival creating over 100 choreographed pieces,
        including 18 productions and 15 full length story works! Jennifer is a huge believer in age appropriate/level
        appropriate and enjoys teaching with a positive and constructive philosophy.
      </p>
      <hr />
    </Instructor>

    <Instructor>
      <p>
        <LeanneImage />
        <span className="bold instructor">Leanne Higgins | Instructor</span>
        Leanne Higgins has a Master of Science in Exercise Physiology and a Doctorate in Education from the University
        of Delaware. She has been teaching group exercise for 30 years and began specializing in Pilates Mat work and
        Mat with props 18 years ago. With a background in gymnastics, dance, and eventually college cheerleading at the
        Pennsylvania State University, she found her passion in helping individuals discover physical strength and
        mental endurance through exercise. Leanne has taught Pilates for students, professional dancers, and adult
        participants at both the Mid-Atlantic Ballet in Newark, Delaware and First State Ballet Theater in Wilmington,
        Delaware. Leanne truly believes the mind can master the muscles and hopes to inspire students to believe in
        their own physical and emotional power through the practice of Pilates principles.{' '}
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <ChristinaImage />
        <span className="bold instructor">Christina Rukavina | Instructor</span>
        Christina is a summa cum laude graduate, of both Tulane University, where she earned a B.A. in ballet, and
        Hollins University, where she obtained an M.F.A. in children&#39;s literature. As a teen singer and dancer with
        nationally acclaimed entertainment troupe, The Brothers and Sisters, she performed at a variety of venues,
        including the White House, with such legends as Ethel Merman, Cab Calloway, George Burns, Woody Herman, John
        Gary, Cesar Romero, Doc Severinsen, Robert Goulet, Tennessee Ernie Ford, and Red Skelton. She was a mezzo
        soprano, dancer, and choreographer for Milwaukee&#39;s Skylight Comic Opera Company. While based in New Orleans,
        she toured the globe as a singer and dancer with Komenka Ethnic Music and Dance Ensemble, performed in stage
        productions at Le Petit Theatre de Vieux Carre, and was a featured dancer in the film Interview with the
        Vampire.
      </p>
      <p>
        Children&#39;s master storyteller and creative movement specialist, Christina developed and ran the Early
        Childhood Program at New Orleans Dance Academy for 25 years, and brought her expertise to many schools in the
        Greater New Orleans Area as well as to the School of the Milwaukee Ballet, where she taught mainstream
        children’s classes as well as outreach classes, in Spanish, to the neighboring Hispanic community. After
        Katrina, she returned to Louisiana, entertaining and educating elementary schools with her one-woman, musical
        science show, Poor Little Pluto. She also revived the New Orleans Dance Academy’s children’s program with an
        environmentally themed ballet, The Treasure in the Woods, for which she also produced an accompanying narrated
        book, celebrating the state’s indigenous flora and fauna.
      </p>
      <p>
        A longtime legal analyst and an award-winning journalist – including being named top weekly columnist in the
        State of Wisconsin -- Christina currently resides in Virginia’s Shenandoah Valley, where she is working on the
        biography of the Irish American writer who pioneered the Young Adult genre of children’s literature, and on a
        health-based style book for women. She is also one of the writers included in a major anthology launching in
        early 2020.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <KeithImage />
        <span className="bold instructor">Keith Lee | Guest Instructor</span>Keith Lee was born in The Bronx, New York.
        He started his dance training with tap and theatre singing at the age of three. With encouragement from Ben
        Vereen, Mr. Lee pursued his dance studies at the High School of the Performing Arts in New York. Upon
        graduation, he received two Capezio Awards for excellence in both ballet and modern dance technique. Mr. Lee
        pursued his studies at the Harkness School of Ballet and the School of American Ballet under full scholarship.
        Mr. Lee was a member of the Harkness youth Company that performed for President Lyndon B. Johnson and Lady Bird
        Johnson at the White House in 1968. He began his professional career with the Norman Walker Dance Company and
        the Harkness Youth Ballet.
      </p>
      <br />
      <p>
        Mr. Lee joined American Ballet Theatre in 1969 and was promoted to the rank of soloist the following year. In
        1970 as a member of American Ballet Theatre he appeared in the Kennedy Center Opera House’s grand opening. Mr.
        Lee was also part of the original cast of Jelly’s Last Jam, the Broadway musical which featured Gregory Hines.
      </p>
      <br />
      <p>
        In 1968, Kathy Greene sponsored his first choreographic concert at the Clark Center for the Performing Arts and
        has since created ballets for American Ballet Theatre, the Washington Ballet, the Geneva Ballet, the Oakland
        Ballet, the Garden State Ballet, the Alvin Ailey Repertory Ensemble, the Capitol Ballet of Washington, D.C.,
        Ballet Memphis, Lexington Ballet, and for his own company, Ballet of Contemporary Arts. He has also
        choreographed for television, films, and videos.
      </p>
      <br />
      <p>
        Mr. Lee has also been a ballet master for the Alvin Ailey American Dance Theatre and the Capitol Ballet. Mr. Lee
        has also been on the faculty of the Dance Department of Shenandoah University and from 1994-96 he was artistic
        director of Syncopated Inc. Dance Company in Lexington, Kentucky. As artistic director Syncopated Inc. Dance
        Company Mr. Lee staged many of his dances including The Ellington Project which won Best Dance Theatre Award in
        1996. Mr. Lee has also started an outreach program, NeWorlDance, in Kentucky, and he continues his outreach work
        in Virginia. From 1996-98 Mr. Lee was on the faculty of the Virginia School of the Arts. From 1998-99 Mr. Lee
        was named co-artistic director of Neworldance in Toronto, Canada. In 1999 Mr. Lee established Dance Theatre of
        Lynchburg in Lynchburg, Virginia. Mr. Lee marks his 50th Anniversary Celebration of Dance and Theatre, and in
        2017 he was cited by the Virginia Commission For The Arts (Outstanding Artist Award for Dance). In 2019 Mr. Lee
        received the First Artist Laureate Award. Mr. Lee is now pursuing a successful career as a freelance
        choreographer, master teacher, and performing arts coordinator.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <AmandaImage />
        <span className="bold instructor">Amanda Jo Parks | Guest Instructor</span>
        Mrs. Parks received her early dance training under the direction of Christine Meneer and then received a
        scholarship to study at the Dance Institute at the University of Akron. She spent summers training at the
        Pittsburgh Ballet Theatre, Pennsylvania Ballet, Chautauqua Dance Festival and Ballet Austin. Amanda performed
        professionally with the Pittsburgh Ballet, BalletMet, and the Ohio Ballet appearing in productions such as
        George Balanchine’s Rubies, Dwight Rhodens StrayLifeLushHorn, Ruthanna Boris’s Cakewalk, as well as in
        contemporary classics, such as Beauty and the Beast, Cleopatra, and countless Nutcrackers.
      </p>
      <p>
        Amanda went on to earn her undergraduate degree in journalism and then a PhD in political science from the
        Pennsylvania State University. She now enjoys teaching both ballet and political science but spends most of her
        time wrangling her three wild and delightful little boys.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <RoderickImage />
        <span className="bold instructor">Roderick Davis | Guest Instructor</span>Roderick Davis is the Musical Director
        and Lead Drummer of Ezibu Muntu African Dance Co. He was introduced to the dance company in 1994 by one of his
        mentors and original member of the Ezibu, Renee Knight. Roderick has been an active member of the company
        dedicating 20 plus years of studying and sharing his knowledge of West African Djembe music. Mr. Davis has a
        Bachelor’s of Science degree in Architectural Drafting &amp; Design from Virginia State University and an
        Advanced Certification in Principles of Engineering from Duke University. He has taught Technology Education,
        Pre-Engineering and Basic Architecture at MLK Middle School for 8 years, also starting a West African Music
        program after school at MLK Middle. Roderick is currently the Lead Teacher for Richmond Public School’s
        Governor’s Engineering Academy at RTC for 5 years now. He is also an adjunct professor of West African Djembe
        music and history at University of Richmond. He mentors under-served youth centered on teaching them West
        African music and drum repair. He also volunteers teaching music therapy to adults and children with various
        cognitive disabilities in Richmond and surrounding counties. Roderick J. Davis (Instrutor Balanço) began
        intensive training under the instruction of Mestre Panão in 2005 and within a year through hard work and
        dedication was able to bring Mestre Panão to his community to start Capoeira Resistência in Richmond, VA. For
        more than a decade Instrutor Balanço has studied and trained directly with, taught and traveled all over the US
        and Brazil with Mestre Panão. Through his dedication to training and his commitment to Capoeria Resistência and
        his Mestre, Balanço graduated to one of Mestre Panão&#39;s first American Instructors in 2015. He is continuing
        his training with Mestre Panão and is now teaching capoeira in Charlottesville, VA.
      </p>
      <br />
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <SarahImage />
        <span className="bold instructor">Sarah Gillespie | Guest Instructor</span>
        Sarah is a tango instructor at ABT. Mrs. Gillespie began her dance training in classical ballet under Tristi Ann
        McMaster Robinson at her studio in Richmond Virginia. She continued studying ballet throughout high school and
        while at James Madison University where she earned her undergraduate degree in Spanish. Mrs. Gillespie’s love of
        Spanish led her to Buenos Aires Argentina where she discovered Argentine Tango in 2012. While living in Buenos
        Aires she studied privately with instructors Javier Rochwarger and Anabella Cruz Heck. After earning her Masters
        in Spanish Literature from Middlebury College in 2014, Mrs. Gillespie returned to Virginia and began teaching
        Spanish at the Miller School of Albemarle. Mrs. Gillespie is also a festival organizer, milonga host, and
        instructor at Charlottesville Tango.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <MeganImage />
        <span className="bold instructor">Megan Hillary | Guest Instructor</span>A returning teacher for Acting for
        Dancers, Megan holds degrees in visual art and technical theater design, though she grew up with ballet until
        college, when she discovered modern and was wholly seduced by it. Extremely active in the local gallery scene as
        an installation artist, she also embraces directing and choreography -- at Live Arts and area schools. Often to
        be found as a guest artist for puppetry at schools and for children‘s and teen‘s organizations, Megan‘s actual
        day job is as the new manager of The Hip Joint in downtown Charlottesville.
      </p>
      <br />
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <EdwinImage />
        <span className="bold instructor">Edwin Roa | Guest Instructor</span>A native of Bogota, Colombia, Edwin O. Roa
        moved to the US in 1995. He is a professional dancer who has trained in multiple dance disciplines and he
        currently teaches ballroom dances at James Madison University. Edwin devoted his career to the study of partner
        dance. He has been involved in our dance community for over 20 years. Edwin currently resides in
        Charlottesville, VA, where he works as an independent dance instructor. He is the founder of The Dance Spot and
        Co-founder of the Charlottesville Salsa Club. His interest in music, cultures and the perspectives of partner
        dance have encouraged him to experiment and develop a method of teaching social partner dance called Zabor
        Dance.
      </p>
      <hr />
    </Instructor>
  </div>
)

export default Faculty
