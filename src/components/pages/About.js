import React from "react";
import stella from "./Images/stellaoutdoor.jpg";
const About = () => {
  return (
    <div>
      <div className="stellaimg">
        <h2 className="about">About Me</h2>
        <div className="image-box">
          <img className="center-fit" src={stella} alt="Stella" />
        </div>
        <p>
          Born in Greece, Stella Kypriotis is an artist who lives and works in
          Sydney Australia. She is married to her husband of 32 years and
          together have raised 3 sons.
          <br></br> <br></br>
          Her interest in art started from her school life when she picked Arts
          as her subject and felt very connected to that subject.
          <br></br> <br></br>
          She loves painting a variety of subjects including florals, birds,
          landscapes and portraits.She paints mainly in (artist grade) oils on
          canvas or wooden board ensuring her surface is well prepared and
          finished with varnish for longervity.
          <br></br> <br></br>
          During her career life, she worked in various office roles, which
          didn't leave room for her creativity making her realise her true
          passion was arts. She decided to work in an art-shop which was a great
          way to help her further explore that field.She then enrolled in art
          classes to learn oil painting and hasn't stopped since.
          <br></br> <br></br>
          Stella constantly seeks improvement in all her work to ensure the last
          painting is better then the previous. She also loves to go 'plein-air'
          painting outdoors whenever possible and staying connected to other
          artist.
          <br></br> <br></br>
          Stella makes every effort to paint every day, knowing that the more
          someone paints the better they become. Her gold is to be original and
          authentic and to be able to touch the viewer with her paintings is
          what drives her.
          <br></br> <br></br>
          "Art speaks where words are unable to explain." by Mathiole"
          <br></br> <br></br>
        </p>
        <div id="exhibitionNote">
          <h3>Exhibitions</h3>
          <p>Solo Exhibition,</p>
          <p>Art House Cafe,</p>
          <p>Narellan.</p>
          <p>January 2021.</p>
          <br></br>

          <p>Blue Mountains Art Prize</p>
          <p>Budgies in love</p>
          <p>August 2019.</p>
          <br></br>
        </div>
      </div>
    </div>
  );
};

//   <br></br>
// Born in Greece, I migrated here to Sydney at a young age. I am married
// to my husband of 31 years and together we have raised 3 sons.
// <br />
// <br />
// My love for nature is an inspiration in my work. I paint a variety of
// subjects especially Australian birds, landscapes and portraits in
// oils.
// <br></br>
// Previously I worked in various office roles, which didn't leave room
// for my creativity, making me realise my true passion was Arts. I
// decided to enroll in evening courses doing Floral art, Folk art,
// Sewing and Jewellery etc etc, to fullfill my desire for creativity.
// <br></br>I continued my desire for my creativity by working in an Art
// shop which helped me further explore the Art world.
// <br></br>
// For me my happy place is my studio, being original and authentic is my
// goal.
// <br></br>I constantly seek improvement in all my work to ensure my
// last painting is better then the previous. I enjoy staying connected
// to other artists, (going plein air painting where possible), also
// encouraging and motivating each other. <br></br>
// This is what drives me and my passion towards my art every day and why
// I'm so committed to it.
// <br></br>
// If you are interested in any of my work, or would like me commission a
// painting or custom portrait, please contact me using the links below.
// <br></br>
//
export default About;
