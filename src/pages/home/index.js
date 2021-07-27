import React from 'react';
import ProfilePic from '../../assets/images/profile-pic.jpg';
import Wave from '../../assets/images/waving-hand.png';
import File from './file.mdx';

import './style.scss';

function Home() {
  return (
    <div className="home">
      <File />
      <div className="container px-5">
        <div className="flex items-center my-6">
          <div className="w-12 rounded-full overflow-hidden mr-4">
            <img src={ProfilePic} alt="Profile Pic" />
          </div>
          <h3 className="flex items-center text-lg font-bold">
            Hi
            <img src={Wave} alt="Wave" className="w-8 mx-1 -mt-2" />
            , I&apos;m Kishore.
          </h3>
        </div>
        <div className="mb-12">
          <p className="mb-3 text-lg">
            I&apos;m a software engineer at&nbsp;
            <a href="jquery.com" className="text-purple-600">Fractal</a>
            . Part of the front end team. Working closely on various design and functionality
            aspects. Working on React, React Native, Angular, Javascript, Html, Css etc.
          </p>
          <p className="text-lg">
            I like to write tech blogs, specially about latest and greatest front end
            technologies and hence this website where I will mainly put my writings. Apart from
            this you can check out my Medium and Dev.to profile.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Side projects</h3>
          <ul className="list-disc pl-4">
            <li className="mb-4">
              <a href="# " className="text-2xl font-bold">rctx-tooltip</a>
              <p>Tooltip library extensively for react library.</p>
            </li>
            <li>
              <a href="# " className="text-2xl font-bold">rctx-contextmenu</a>
              <p>Context menu plugin for React.</p>
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Recent writings</h3>
          <ul className="list-disc pl-4">
            <li className="mb-4">
              <a href="# " className="text-2xl font-bold">Write your own polyfill</a>
              <p>
                In the new era of web development we never think of writing custom polyfill
                because whatever frameworks we use, those use polyfill under the...
              </p>
            </li>
            <li className="mb-4">
              <a href="# " className="text-2xl font-bold">Handle prop drilling at ease</a>
              <p>
                If you are breaking your component into multiple pieces in react, then you
                would have gone through a process of passing data into an extrem...
              </p>
            </li>
            <li className="mb-4">
              <a href="# " className="text-2xl font-bold">Mutate object or arrays without changing original source</a>
              <p>
                If you are building a javascript application irrespective of any framework, you
                would have faced a specific issue where you want to modify...
              </p>
            </li>
          </ul>
          <a href="# " className="text-lg">All writings</a>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Reach out to me</h3>
          <p className="text-lg">
            <a href="mailto:patra.kishore65@gmail.com">patra.kishore65@gmail.com</a>
          </p>
          <p className="text-lg">
            <a href="# ">Github</a>
            <span className="mx-2">.</span>
            <a href="# ">Linkedin</a>
            <span className="mx-2">.</span>
            <a href="# ">Dev.to</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
