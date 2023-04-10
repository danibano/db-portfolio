import React from "react";
import barstool from '../../img/barstool.png'
import quiz from '../../img/quiz.png'
import smorgasbord from '../../img/smorgasbord.png'
import team from '../../img/team.png'
import weather from '../../img/weather.png'
import workday from '../../img/workday.png'

const Projects = () => {
    return (
      <section>
      <div>
        <h2 id='projects' className='text-5xl py-3 text-emerald-800 text-center md:text-6xl'> Projects</h2>
      </div>

      <div className='grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 '>

        <div className='text-center shadow-xl p-10 rounded-xl my-10'>
          <img src={barstool} alt='barstool' className=''></img>
          <h3 className='text-3xl py-3 '> The Barstool</h3>
          <p className='text-xl py-1  text-emerald-700 hover:underline'><a href='https://github.com/strongjaw15/the-barstool' target='blank'>GitHub</a></p>
          <p className='text-xl py-1 text-emerald-700 hover:underline'><a href='http://strongjaw15.github.io/the-barstool/' target='blank'>Live</a></p>
          <p className='text-md py-3'>The Barstool is a simple application to search, save and learn how to make your favorite cocktails utilizing the distilled alocohol spirits you have available. A client-side build that utilizes server-side API calls, local storage, and an embedded video player.</p>
        </div>

        <div className='text-center shadow-xl p-10 rounded-xl my-10'>
          <img src={smorgasbord} alt='smorgasbord' className=''></img>
          <h3 className='text-3xl py-3 '>Smorgasbord</h3>
          <p className='text-xl py-1  text-emerald-700 hover:underline'><a href='https://github.com/Greg-Trahan/smorgasbord' target='blank'>GitHub</a></p>
          <p className='text-xl py-1 text-emerald-700 hover:underline'><a href='https://smorgasbord.herokuapp.com/' target='blank'>Live</a></p>
          <p className='text-md py-3'>Smorgasbord is a website for users to post and view favorite restaraunts. Users can view others restraunts that have been posted, as well as review the postings of others. Each user has a personal profile for easy access to their own favorite restaraunts.</p>
        </div>

        <div className='text-center shadow-xl p-10 rounded-xl my-10'>
          <img src={weather} alt='weather' className=''></img>
          <h3 className='text-3xl py-3 '> Weather Dashboard</h3>
          <p className='text-xl py-1  text-emerald-700 hover:underline'><a href='https://github.com/danibano/weather-app' target='blank'>GitHub</a></p>
          <p className='text-xl py-1 text-emerald-700 hover:underline'><a href='https://danibano.github.io/weather-app/' target='blank'>Live</a></p>
          <p className='text-md py-3'>This is a weather dashboard, that shows a city's current weather and the future conditions over the next five days. Using the weather API we get the information on the date, city, an icon representation of the weather, the humidity, temperature, and wind speed. When you search for a city, that city is saved using local storage and you are presented with a search history.</p>
        </div>

        <div className='text-center shadow-xl p-10 rounded-xl my-10'>
          <img src={workday} alt='workday' className=''></img>
          <h3 className='text-3xl py-3 '> Workday Scheduler</h3>
          <p className='text-xl py-1  text-emerald-700 hover:underline'><a href='https://github.com/danibano/work-day-scheduler' target='blank'>GitHub</a></p>
          <p className='text-xl py-1 text-emerald-700 hover:underline'><a href='https://danibano.github.io/work-day-scheduler/' target='blank'>Live</a></p>
          <p className='text-md py-3'>The purpose of this project was to build a work day scheduler so that users can add events into a daily planner. The planner will display the current day and time which is powered using DayJs. The hour time blocks change color depending if the current hour is past, present or future. Inside the time block you can add and saves your event to the local storage so that if you reload the page it still exists.</p>
        </div>

        <div className='text-center shadow-xl p-10 rounded-xl my-10'>
          <img src={team} alt='team' className=''></img>
          <h3 className='text-3xl py-3 '> Team Profile</h3>
          <p className='text-xl py-1  text-emerald-700 hover:underline'><a href='https://github.com/danibano/team-profile' target='blank'>GitHub</a></p>
          <p className='text-xl py-1 text-emerald-700 hover:underline'><a href='https://danibano.github.io/team-profile/' target='blank'>Live</a></p>
          <p className='text-md py-3'>This generates a webpage that displays a user's team basic info. It's a command line application that prompts the user to enter information about their team members using Inquierer. It will include information such as their name, id, and email, and depending on the role either their office number, GitHub username or the school they went too.</p>
        </div>

        <div className='text-center shadow-xl p-10 rounded-xl my-10'>
          <img src={quiz} alt='quiz' className=''></img>
          <h3 className='text-3xl py-3 '> Coding Quiz</h3>
          <p className='text-xl py-1  text-emerald-700 hover:underline'><a href='https://github.com/danibano/coding-quiz' target='blank'>GitHub</a></p>
          <p className='text-xl py-1 text-emerald-700 hover:underline'><a href='https://danibano.github.io/coding-quiz/' target='blank'>Live</a></p>
          <p className='text-md py-3'>This is a quiz made with JavaScript. When you start the quiz a timer starts counting down, but if answer a question incorrectly you'll lose time! The quiz is over when either all questions are answered or the timer reaches 0. You then get to submit your score to the leaderboard. This uses local storage, having a timer function and using an event listener.</p>
        </div>

      </div>
    </section>
  )
}

export default Projects