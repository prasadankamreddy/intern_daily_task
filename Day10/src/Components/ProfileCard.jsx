import React from 'react'

const ProfileCard = () => {
  return (
      <section className="profile-card" id="profile">
            <div className="profile-image">
                DP
            </div>

            <h2>Durga Prasad</h2>
            <h3>Python Full Stack Developer</h3>

            <p>
                I am a BSc Computer Science graduate.
                I am interested in web development
                and learning new technologies.
            </p>

            <h4>My Skills</h4>

            <ul>
                <li>Python</li>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Django</li>
            </ul>

            <a href="mailto:prasad@example.com">
                Contact Me
            </a>
        </section>
  )
}

export default ProfileCard
