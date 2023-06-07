
import MeetupList from '@/components/meetups/MeetupList'
import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </div>
  )
}

export default Home
