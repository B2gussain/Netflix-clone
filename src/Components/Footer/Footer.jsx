import React from 'react'
import "./Footer.css"
import youtube_icon  from "../../assets/youtube_icon.png"
import twitter_icon  from "../../assets/twitter_icon.png"
import instagram_icon  from "../../assets/instagram_icon.png"
import facebook_icon  from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_icons">
        <a href="https://www.facebook.com/netflix/"><img src={facebook_icon} alt="" /></a>
       <a href="https://www.instagram.com/netflix/"><img src={instagram_icon} alt="" /></a>
       <a href="https://x.com/netflixindia?lang=en"> <img src={twitter_icon} alt="" /></a>
       <a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw">  <img src={youtube_icon} alt="" /></a>
      </div>
<ul>
  <li>Audio Description</li>
  <li>Help Centre</li>
  <li>Gift Cards</li>
  <li>Media Centre</li>
  <li>Investor Relations</li>
  <li>Jobs</li>
  <li>Terms of Use</li>
  <li>Privacy</li>
  <li>Legal Notices</li>
  <li>Cookie Preferences</li>
  <li>Corporate Information</li>
  <li>Contact Us</li>
</ul>
<p className="copyright_text">&copy; 1997-2024 Netflix, Inc.</p>
    </div>

  )
}

export default Footer
