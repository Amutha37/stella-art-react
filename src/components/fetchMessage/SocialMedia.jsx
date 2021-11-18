export function SocialMedia() {
  return (
    <div className='social-media'>
      {/* <div className="social-media"> */}
      {/* <div className='followMe-text'> */}
      <div id='followMe-text'>
        <p>Follow me ⤵️ </p>
      </div>
      <div className='icons'>
        <a href='https://www.facebook.com/search/top?q=stellas_art'>
          <div className='layer'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className='fab fa-facebook-f'></span>
          </div>
          <div className='text'>Facebook</div>
        </a>
        <a href='https://twitter.com/KypriotisStella'>
          <div className='layer'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className='fab fa-twitter'></span>
          </div>
          <div className='text'>Twitter</div>
        </a>
        <a href='https://www.instagram.com/stellas_art3/'>
          <div className='layer'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className='fab fa-instagram'></span>
          </div>
          <div className='text'>Instagram</div>
        </a>
        <a href='https://www.linkedin.com/in/stella-kypriotis-949101206/'>
          <div className='layer'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className='fab fa-linkedin-in'></span>
          </div>
          <div className='text'>Linkedin</div>
        </a>
        {/* </div> */}
      </div>

      <div className='footertext'>
        <p>
          Copyright <i className='far fa-copyright'> </i> Stella Kypriotis 2021
          All Right Reserved.
        </p>
      </div>
    </div>
  );
}
